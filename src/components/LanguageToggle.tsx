import React from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  language: 'hi' | 'en';
  onLanguageChange: (language: 'hi' | 'en') => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  language, 
  onLanguageChange 
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Languages className="h-5 w-5 text-muted-foreground" />
      <div className="flex rounded-lg bg-muted p-1">
        <Button
          variant={language === 'hi' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('hi')}
          className={`rounded-md text-xs font-medium transition-all ${
            language === 'hi' 
              ? 'gradient-primary text-primary-foreground shadow-sm' 
              : 'hover:bg-background/50'
          }`}
        >
          हिंदी
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('en')}
          className={`rounded-md text-xs font-medium transition-all ${
            language === 'en' 
              ? 'gradient-primary text-primary-foreground shadow-sm' 
              : 'hover:bg-background/50'
          }`}
        >
          English
        </Button>
      </div>
    </div>
  );
};