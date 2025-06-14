import React from 'react';
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              नेपाल <span className="text-red-500">समाचार</span>
            </h3>
            <p className="text-gray-300 mb-4">
              नेपालको भरपर्दो र निष्पक्ष समाचार स्रोत। हामी सधैं सत्य र तथ्यपरक समाचार प्रस्तुत गर्दछौं।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">द्रुत लिंकहरू</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">गृहपृष्ठ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">राजनीति</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">खेलकुद</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">व्यापार</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">मनोरञ्जन</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">श्रेणीहरू</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">प्रविधि</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">स्वास्थ्य</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">शिक्षा</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">अन्तर्राष्ट्रिय</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">मौसम</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">सम्पर्क</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-gray-300 text-sm">काठमाडौं, नेपाल</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-gray-300 text-sm">+977-1-1234567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-gray-300 text-sm">info@nepalsamachar.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 नेपाल समाचार। सबै अधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;