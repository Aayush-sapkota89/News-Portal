import React from 'react';
import NewsCard from './NewsCard';
import { NewsArticle } from '../types/news';

interface NewsGridProps {
  articles: NewsArticle[];
  onArticleClick: (article: NewsArticle) => void;
}

const NewsGrid: React.FC<NewsGridProps> = ({ articles, onArticleClick }) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">कुनै समाचार फेला परेन।</p>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              onClick={onArticleClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;