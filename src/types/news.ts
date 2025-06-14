export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  featured: boolean;
  breaking: boolean;
}

export interface NewsCategory {
  id: string;
  name: string;
  nameNepali: string;
}