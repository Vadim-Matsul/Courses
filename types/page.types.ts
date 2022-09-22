export interface HhData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
  _id: string;
}

export interface Blog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

export interface Qa {
  question: string;
  answer: string;
}

export interface Sravnikus {
  metaTitle: string;
  metaDescription: string;
  seoText: string;
  qas: Qa[];
  _id: string;
}


export interface Learningclub {
  metaTitle: string;
  metaDescription: string;
  seoText: string;
  qas: Qa[];
  _id: string;
}

export interface Advantages {
  title: string,
  description: string,
  _id: string
}

export interface PageModel {
  _id: string;
  tags: string[];
  firstCategory: number;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText?: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  advantages?: Advantages[] | [];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hh?: HhData;
  qas: any[];
  addresses: any[];
  categoryOn: string;
  blog: Blog;
  sravnikus: Sravnikus;
  learningclub: Learningclub;
}

export interface HhDataGroup {
  title: 'Начальный' | 'Средний' | 'Профессионал',
  number: string,
  rating: number,
}
