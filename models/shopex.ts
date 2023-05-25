import { ReactNode } from 'react';

export interface ShopexModel {
  id: string | number;
  title: string;
  desc: string;
  icon: ReactNode;
  imageUrl: string;
}
