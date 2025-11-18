'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const rows = 8;
  const cols = 7;

  // Funkce pro určení, jestli má být tečka viditelná
  const isDotVisible = (rowIndex: number, colIndex: number) => {
    if (rowIndex >= 6 && colIndex >= 4) {
      return false;
    }
    return true;
  };

  return (
    <div className="grid grid-cols-7 gap-2">
      {Array.from({ length: rows * cols }).map((_, i) => {
        const rowIndex = Math.floor(i / cols);
        const colIndex = i % cols;
        const isVisible = isDotVisible(rowIndex, colIndex);

        return (
          <div
            key={i}
            className={`md:w-2 md:h-2 w-[9px] h-[9px] rounded-full ${isVisible ? 'bg-dots-color' : 'bg-[transparent]'}`}
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
    <section className="bg-primary pt-16 pb-20 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hlavní mřížka */}
        <div className="relative md:grid md:grid-cols-2 md:gap-16 items-center">

          {/* LEVÁ ČÁST - Desktop */}
          <div className="hidden md:block md:relative">
            <div className="relative z-10 flex items-end justify-center">
              {/* Pozadí za fotkou */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-secondary h-[82%] w-[80%]">
                {/* Uvozovky na pozadí */}
                <div className="absolute -top-8 -right-[-16] z-10">
                  <Image
                    src="/images/quotation.svg"
                    alt="Uvozovky"
                    width={66}
                    height={66}
                  />
                </div>
              </div>

              {/* Fotka */}
              <Image
                key={currentReview.id}
                src={currentReview.authorImage}
                alt={`Fotka autora recenze: ${currentReview.author}`}
                width={400}
                height={400}
                className="object-cover aspect-square relative z-10"
              />
            </div>
          </div>

          {/* PRAVÁ ČÁST - Text a slider */}
          <div className="relative z-10">

            {/* Mobilní hlavička, MatAlarm a šipky */}
            <div className="flex justify-between items-center md:hidden ml-3">
              <h3 className="text-logo-text text-lg">MatAlarm</h3>
              <div className="flex gap-4">
                <button
                  onClick={goToPrevious}
                  aria-label="Předchozí recenze"
                  className="bg-secondary rounded-full shadow-md text-purple-bg hover:bg-gray-100 transition-colors w-8 h-8 flex items-center justify-center"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  aria-label="Další recenze"
                  className="bg-purple-bg rounded-full shadow-md text-white hover:bg-opacity-90 transition-colors w-8 h-8 flex items-center justify-center"
                >
                  <ChevronRight className="w-6 h-6 stroke-2" />
                </button>
              </div>
            </div>

            {/* Recenze zákazníků - mobil verze */}
            <h2 className="text-3xl md:text-4xl text-header-text mb-8 ml-3 md:hidden">
              Recenze zákazníků
            </h2>

            {/* Desktop MatAlarm, Recenze zákazníků a šipky */}
            <div className="hidden md:block mb-6 transform translate-y-[100px] -translate-x-[90px] relative z-20">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-logo-text text-lg">
                    MatAlarm
                  </h3>

                  {/* Recenze zákazníků */}
                  <h2 className="text-4xl text-header-text">
                    Recenze zákazníků
                  </h2>
                </div>
                <div className="flex gap-4 relative left-20">
                  <button
                    onClick={goToPrevious}
                    aria-label="Předchozí recenze"
                    className="bg-secondary rounded-full shadow-md text-purple-bg hover:bg-gray-300 transition-colors w-8 h-8 flex items-center justify-center"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    aria-label="Další recenze"
                    className="bg-purple-bg rounded-full shadow-md text-white hover:bg-opacity-90 transition-colors w-8 h-8 flex items-center justify-center"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Karta recenze */}
            <div className="bg-primary md:bg-review-bg shadow-[0_0_20px_rgba(0,0,0,0.2)] md:shadow-[5px_5px_20px_rgba(0,0,0,0.2)] p-8 md:p-8 relative overflow-hidden min-h-[280px] md:min-h-[210px] md:h-[210px] max-w-[95%] md:max-w-[746px] z-10 md:-ml-44 md:top-24">
              {/* Fialový pruh */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 md:w-1.5 bg-purple-bg"></div>

              <div className="pl-3 md:mt-4">
                <h4 className="text-2xl md:text-xl font-bold text-header-text">
                  {currentReview.author}
                </h4>
                <p className="text-date-text mb-4">{currentReview.date}</p>
                <p className="text-gray-700 text-lg md:text-sm leading-relaxed md:line-clamp-4">
                  {currentReview.text}
                </p>
              </div>
            </div>

            {/* Dekorativní tečky - Mobil */}
            <div className="absolute -bottom-[60px] left-20 z-0 md:hidden opacity-50 transform -translate-x-1/2">
              <DotsPattern />
            </div>

            {/* Dekorativní tečky - Desktop */}
            <div className="hidden md:block absolute -bottom-[183px] -left-[245px] z-0 opacity-50 transform translate-x-1/4">
              <DotsPattern />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};