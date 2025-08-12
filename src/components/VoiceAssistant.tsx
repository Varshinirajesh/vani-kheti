import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, Sun, CloudRain, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface VoiceAssistantProps {
  language: 'hi' | 'en';
}

export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ language }) => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastMessage, setLastMessage] = useState('');

  const text = {
    en: {
      greeting: "Namaste! I'm your farming assistant",
      tapToSpeak: "Tap to ask farming questions",
      listening: "Listening...",
      processing: "Understanding...",
      weatherTitle: "Today's Weather",
      cropTitle: "Crop Calendar", 
      adviceTitle: "Daily Advice"
    },
    hi: {
      greeting: "नमस्ते! मैं आपका किसान सहायक हूँ",
      tapToSpeak: "खेती के बारे में पूछने के लिए दबाएं",
      listening: "सुन रहा हूँ...",
      processing: "समझ रहा हूँ...",
      weatherTitle: "आज का मौसम",
      cropTitle: "फसल कैलेंडर",
      adviceTitle: "दैनिक सलाह"
    }
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      setIsListening(false);
      setIsProcessing(true);
      
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        setLastMessage(language === 'hi' ? 
          "आपकी मिट्टी के लिए जैविक खाद का उपयोग करें" : 
          "Use organic fertilizer for your soil");
      }, 2000);
    } else {
      setIsListening(true);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      {/* Greeting */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-foreground text-shadow-warm">
          {text[language].greeting}
        </h1>
        <p className="text-muted-foreground">
          {isListening ? text[language].listening : 
           isProcessing ? text[language].processing :
           text[language].tapToSpeak}
        </p>
      </div>

      {/* Voice Button */}
      <div className="relative">
        <Button
          size="lg"
          className={`
            voice-button w-24 h-24 rounded-full gradient-primary text-primary-foreground shadow-lg
            ${isListening ? 'listening' : ''} 
            ${isProcessing ? 'processing' : ''}
          `}
          onClick={handleVoiceToggle}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <Volume2 className="h-8 w-8" />
          ) : isListening ? (
            <MicOff className="h-8 w-8" />
          ) : (
            <Mic className="h-8 w-8" />
          )}
        </Button>
        
        {isListening && (
          <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping"></div>
        )}
      </div>

      {/* Last Response */}
      {lastMessage && (
        <Card className="cultural-card p-4 max-w-sm">
          <div className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">{lastMessage}</p>
          </div>
        </Card>
      )}

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <Card className="cultural-card p-6 text-center hover:scale-105 transition-transform">
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
              <Sun className="h-6 w-6 text-accent bounce-gentle" />
            </div>
            <h3 className="font-semibold text-foreground">{text[language].weatherTitle}</h3>
            <p className="text-sm text-muted-foreground">28°C, {language === 'hi' ? 'धूप' : 'Sunny'}</p>
          </div>
        </Card>

        <Card className="cultural-card p-6 text-center hover:scale-105 transition-transform">
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
              <Sprout className="h-6 w-6 text-secondary float" />
            </div>
            <h3 className="font-semibold text-foreground">{text[language].cropTitle}</h3>
            <p className="text-sm text-muted-foreground">
              {language === 'hi' ? 'बुआई का समय' : 'Sowing Season'}
            </p>
          </div>
        </Card>

        <Card className="cultural-card p-6 text-center hover:scale-105 transition-transform">
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <CloudRain className="h-6 w-6 text-primary bounce-gentle" />
            </div>
            <h3 className="font-semibold text-foreground">{text[language].adviceTitle}</h3>
            <p className="text-sm text-muted-foreground">
              {language === 'hi' ? 'सिंचाई करें' : 'Water crops'}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};