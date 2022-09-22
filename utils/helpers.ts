

export const replaceNemberToNewFormat = (n: number): string => n.toString().replace(/\B(?=(\d{3})+(?!\d))/, ' ')

export const doNonBrackingSpaces = (text: string): string => text.replace(/\s/g, ' '); //Символ U+00a0