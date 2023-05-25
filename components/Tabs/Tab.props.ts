import { ReactNode } from 'react';

export interface TabProps {
  children?: ReactNode;
  activeTab?: string | number;
  currentTab?: string | number;
  setActiveTab?: (value: number | string) => void;
  component?: string;
}

export enum ColorType {
  TRUE = 'true',
  FALSE = 'false',
}

export const colorText: Record<ColorType, any> = {
  [ColorType.TRUE]: 'text-pink-1 border-b border-pink-1',
  [ColorType.FALSE]: 'text-black',
};
