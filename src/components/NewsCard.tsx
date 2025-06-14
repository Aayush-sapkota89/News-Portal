import React from 'react';
import { Clock, User, Tag } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface NewsCardProps {
  article: NewsArticle;
  onClick: (article: NewsArticle) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onClick }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ne-NP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
      politics: 'राजनीति',
      sports: 'खेलकुद',
      technology: 'प्रविधि',
      business: 'व्यापार',
      entertainment: 'मनोरञ्जन',
      health: 'स्वास्थ्य',
      education: 'शिक्षा'
    };
    return names[category] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      politics: 'bg-blue-100 text-blue-800',
      sports: 'bg-green-100 text-green-800',
      technology: 'bg-purple-100 text-purple-800',
      business: 'bg-orange-100 text-orange-800',
      entertainment: 'bg-pink-100 text-pink-800',
      health: 'bg-red-100 text-red-800',
      education: 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <article 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={() => onClick(article)}
    >
      <div className="relative">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {article.breaking && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
            ब्रेकिंग
          </div>
        )}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
          <Tag className="h-3 w-3 inline mr-1" />
          {getCategoryName(article.category)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;