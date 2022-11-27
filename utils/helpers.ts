import { useReducedMotion } from 'framer-motion';
import { wrap } from 'module';
import React from 'react';
import { MenuItem, Page } from '../types/menu.types';


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

export const searchAlias = (main: MenuItem[], search: string) => {

  const output = new Map<string, string[]>();

  main.forEach(category => {
    const aliasS: string[] = []
    category.pages.forEach(aliasB => {
      if (aliasB.alias.includes(search.toLowerCase())) {
        aliasS.push(aliasB.alias)
      }
    });

    if (aliasS.length) output.set(category._id.secondCategory, aliasS)
  })

  return Array.from(output)
}

export const throttle = (func: Function, delay: number) => {
  let
    isPending: boolean = false,
    timeout: ReturnType<typeof setTimeout>;

  return () => {
    if (isPending) return;

    timeout && clearTimeout(timeout);

    func();
    isPending = true;

    timeout = setTimeout(() => {
      isPending = !isPending;
    }, delay);
  };

};
