import React, { useState } from 'react';
import { VoiceAssistant } from '@/components/VoiceAssistant';
import { FarmNavigation } from '@/components/FarmNavigation';
import { LanguageToggle } from '@/components/LanguageToggle';

const Index = () => {
  const [language, setLanguage] = useState<'hi' | 'en'>('hi');
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">🌾</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">
                {language === 'hi' ? 'किसान मित्र' : 'Kisan Mitra'}
              </h1>
              <p className="text-xs text-muted-foreground">
                {language === 'hi' ? 'आपका खेती सहायक' : 'Your Farming Assistant'}
              </p>
            </div>
          </div>
          <LanguageToggle 
            language={language} 
            onLanguageChange={setLanguage} 
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20 pt-4">
        <VoiceAssistant language={language} />
      </main>

      {/* Bottom Navigation */}
      <FarmNavigation 
        language={language}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default Index;
