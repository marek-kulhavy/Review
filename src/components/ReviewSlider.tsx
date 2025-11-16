'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Definice typu recenze
type Review = {
  id: number;
  author: string;
  date: string;
  text: string;
  authorImage: string;
};


// Data recenzí
const reviewsData: Review[] = [
  {
    id: 1, 
    author: "Doubravovi",
    date: "duben 2025",
    text: "Zakoupil jsem si standardní balíček Matguard pro svůj byt a nemůžu si jej vynachválit. Instalace proběhla před 1 rokem a ovládání je velmi praktické.",
    authorImage: "/images/person.png",
  },
  {
    id: 2,  
    author: "Janouškovi",
    date: "únor 2025",
    text: "Systém Matguard nám poskytl klid na duši. Instalace byla rychlá a bezproblémová. Doporučuji všem majitelům domů.",
    authorImage: "/images/person.png",
  },
  {
    id: 3,
    author: "Koblížkovi",
    date: "listopad 2024",
    text: "Matguard je skvělá investice do bezpečnosti našeho domova. Systém funguje bezchybně a ovládání je intuitivní.",
    authorImage: "/images/person.png",
  },
];

// Komponenta pro vykreslení vzoru teček
const DotsPattern = ({ mobile = false }: { mobile?: boolean }) => {
  const rows = 7;
  const cols = 8;
  
  // Funkce pro určení, jestli má být tečka viditelná
  const isDotVisible = (rowIndex: number, colIndex: number) => {
    if (rowIndex >= 5 && colIndex >= 5) {
      return false;
    }
    return true;
  };
  
  return (
    <div className="grid grid-cols-8 gap-2">
      {Array.from({ length: rows * cols }).map((_, i) => {
        const rowIndex = Math.floor(i / cols);
        const colIndex = i % cols;
        const isVisible = isDotVisible(rowIndex, colIndex);
        
        return (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${isVisible ? 'bg-dots-color' : 'bg-[transparent]'}`}
          />
        );
      })}
    </div>
  );
};

export const ReviewSlider = () => {
  // Stav aktuální recenzee
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview = reviewsData[currentIndex];

  // Funkce pro přechod na předchozí recenzi
  const goToPrevious = () => {
    const isFirstReview = currentIndex === 0;
    const newIndex = isFirstReview ? reviewsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Funkce pro přechod na následující recenzi
  const goToNext = () => {
    const isLastReview = currentIndex === reviewsData.length - 1;
    const newIndex = isLastReview ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };




  return (






  );

}