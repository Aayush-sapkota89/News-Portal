import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NewsGrid from './components/NewsGrid';
import ArticleModal from './components/ArticleModal';
import Footer from './components/Footer';
import { mockNews } from './data/mockNews';
import { NewsArticle } from './types/news';

function App() {
  const [articles, setArticles] = useState<NewsArticle[]>(mockNews);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>(mockNews);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  // Filter articles based on category and search
  useEffect(() => {
    let filtered = articles;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(article => article.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  }, [articles, activeCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleArticleClick = (article: NewsArticle) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  // Get featured articles (featured flag or breaking news)
  const featuredArticles = articles.filter(article => article.featured || article.breaking);
  
  // Get non-featured articles for grid
  const gridArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
      />
      
      {activeCategory === 'all' && searchQuery === '' && (
        <HeroSection
          featuredArticles={featuredArticles}
          onArticleClick={handleArticleClick}
        />
      )}
      
      <NewsGrid
        articles={activeCategory === 'all' && searchQuery === '' ? gridArticles : filteredArticles}
        onArticleClick={handleArticleClick}
      />
      
      <Footer />
      
      <ArticleModal
        article={selectedArticle}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;