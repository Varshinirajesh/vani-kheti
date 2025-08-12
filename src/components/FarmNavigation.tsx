import React from 'react';
import { Sprout, Cloud, Users, BookOpen, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FarmNavigationProps {
  language: 'hi' | 'en';
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const FarmNavigation: React.FC<FarmNavigationProps> = ({
  language,
  activeTab,
  onTabChange
}) => {
  const navItems = {
    en: [
      { id: 'home', icon: Sprout, label: 'Crops', color: 'text-secondary' },
      { id: 'weather', icon: Cloud, label: 'Weather', color: 'text-accent' },
      { id: 'community', icon: Users, label: 'Community', color: 'text-primary' },
      { id: 'learn', icon: BookOpen, label: 'Learn', color: 'text-secondary' },
      { id: 'settings', icon: Settings, label: 'Settings', color: 'text-muted-foreground' }
    ],
    hi: [
      { id: 'home', icon: Sprout, label: 'फसल', color: 'text-secondary' },
      { id: 'weather', icon: Cloud, label: 'मौसम', color: 'text-accent' },
      { id: 'community', icon: Users, label: 'समुदाय', color: 'text-primary' },
      { id: 'learn', icon: BookOpen, label: 'सीखें', color: 'text-secondary' },
      { id: 'settings', icon: Settings, label: 'सेटिंग', color: 'text-muted-foreground' }
    ]
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="flex justify-around items-center p-2">
        {navItems[language].map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center space-y-1 py-3 px-2 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-primary/10 text-primary scale-105' 
                  : `${item.color} hover:bg-background/50 hover:scale-105`
              }`}
            >
              <Icon className={`h-6 w-6 ${isActive ? 'bounce-gentle' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};