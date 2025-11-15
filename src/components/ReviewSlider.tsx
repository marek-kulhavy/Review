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
const reviews: Review[] = [
  {
    id: 1, 
    author: "Doubravovi",
    date: "duben 2025",
    text: "Zakoupil jsem si standardní balíček Matguard pro svůj byt a nemůžu si jej vynachválit. Instalace proběhla před 1 rokem a ovládání je velmi praktické.",
    authorImage: "",
  },
  {
    id: 2,  
    author: "Janouškovi",
    date: "únor 2025",
    text: "Systém Matguard nám poskytl klid na duši. Instalace byla rychlá a bezproblémová. Doporučuji všem majitelům domů.",
    authorImage: "",
  },
  {
    id: 3,
    author: "Koblížkovi",
    date: "listopad 2024",
    text: "Matguard je skvělá investice do bezpečnosti našeho domova. Systém funguje bezchybně a ovládání je intuitivní.",
    authorImage: "",
  },
];




  