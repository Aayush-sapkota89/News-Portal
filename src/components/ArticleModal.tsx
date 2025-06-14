import React from 'react';
import { X, Clock, User, Tag, Share2, Facebook, Twitter } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ne-NP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
              <Tag className="h-4 w-4 inline mr-1" />
              {getCategoryName(article.category)}
            </div>
            {article.breaking && (
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                ब्रेकिंग न्यूज
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Article Image */}
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
          />

          {/* Article Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 border-b pb-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Share2 className="h-4 w-4" />
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 hover:bg-blue-50 text-blue-600 rounded-full transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 hover:bg-blue-50 text-blue-400 rounded-full transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Article Excerpt */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-lg text-gray-700 font-medium italic">
              {article.excerpt}
            </p>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {article.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;