import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CosmoCardProps {
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  onClick?: () => void;
  orientation?: 'vertical' | 'horizontal';
}

export function CosmoCard({ 
  title, 
  content, 
  imageUrl, 
  category,
  onClick,
  orientation = 'vertical' 
}: CosmoCardProps) {
  if (orientation === 'horizontal') {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
            />
          </div>
          <div className="md:w-3/5 p-6">
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{content}</p>
            <button 
              onClick={onClick}
              className="text-sm font-medium text-primary dark:text-secondary hover:underline flex items-center"
            >
              Descubrir más <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{content}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-primary dark:text-secondary">{category}</span>
          <button 
            onClick={onClick}
            className="text-sm font-medium text-primary dark:text-secondary hover:underline flex items-center"
          >
            Leer más <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface FactCardProps {
  title: string;
  content: string;
  icon: ReactNode;
}

export function FactCard({ title, content, icon }: FactCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-5 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 dark:bg-secondary/20 flex items-center justify-center text-primary dark:text-secondary">
          {icon}
        </div>
        <h3 className="font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{content}</p>
    </div>
  );
}

interface ExpertCardProps {
  name: string;
  title: string;
  quote: string;
  imageUrl: string;
  tags: string[];
}

export function ExpertCard({ name, title, quote, imageUrl, tags }: ExpertCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          </div>
          <h3 className="font-bold text-center">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{title}</p>
        </div>
        <div className="md:w-3/4">
          <blockquote className="text-gray-600 dark:text-gray-300 italic border-l-4 border-primary dark:border-secondary pl-4">
            "{quote}"
          </blockquote>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs font-medium px-2 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
