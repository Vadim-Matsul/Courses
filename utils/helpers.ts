import { useReducedMotion } from 'framer-motion';
import React from 'react';


export const getFormatter = (): Intl.NumberFormat => {
  const formatter = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 });
  return formatter;
}


export const replaceNumberToNewFormat = (n: number): string => n.toString().replace(/\B(?=(\d{3})+(?!\d))/, ' ')

export const doNonBrackingSpaces = (text: string): string => text.replace(/\s/g, ' '); //Символ U+00a0

export const translateWordToCase = (number: number, tappleCases: [string, string, string]): string => {

  const numString = number.toString();

  return numString.length > 1
    ? getDeclination(Number(numString.split('').pop()))
    : getDeclination(number)

  function getDeclination(num: number) {
    if (num === 0 || num >= 5 && num < 9) { return tappleCases[2] }
    else if (num === 1) { return tappleCases[0] }
    return tappleCases[1]
  }
}

export function handleTap<T>(
  evt: React.KeyboardEvent<T>,
  action: (payload?: any) => void,
  payload?: any) {
  if (evt && evt.code === 'Space' || evt.code === 'Enter') {
    evt.preventDefault();
    action(payload)
  }
}
