export interface Product {
  _id?: string;
  code: string;
  name: string;
  brand: string;
  description: string;
  summary: string;
  benefits: string;
  composition?: string;
  specifications?: string;
  price: number;
  category: 'Agricola' | 'Acuacultura';
  stock: number;
  creationDate?: Date;
  lastDataModification?: Date;
  images: string[];
}