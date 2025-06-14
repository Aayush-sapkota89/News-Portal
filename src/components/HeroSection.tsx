import React from 'react';
import { Clock, User } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface HeroSectionProps {
  featuredArticles: NewsArticle[];
  onArticleClick: (article: NewsArticle) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredArticles, onArticleClick }) => {
  if (featuredArticles.length === 0) return null;

  const mainArticle = featuredArticles[0];
  const sideArticles = featuredArticles.slice(1, 4);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ne-NP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => onArticleClick(mainArticle)}
            >
              <img
                src={mainArticle.imageUrl}
                alt={mainArticle.title}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              {mainArticle.breaking && (
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  ब्रेकिंग न्यूज
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {mainArticle.title}
                </h2>
                <p className="text-gray-200 mb-4 line-clamp-2">
                  {mainArticle.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-300">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{mainArticle.author}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{formatDate(mainArticle.publishedAt)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                className="group cursor-pointer"
                onClick={() => onArticleClick(article)}
              >
                <div className="flex space-x-4">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-24 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;