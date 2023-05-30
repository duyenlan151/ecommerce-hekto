import { ReactNode } from 'react';

export interface TabProps {
  children?: ReactNode;
  activeTab?: string | number;
  currentTab: string | number;
  setActiveTab?: (value: number | string) => void;
  component?: string;
}

export enum ColorType {
  TRUE = 'true',
  FALSE = 'false',
}

export const colorText: Record<ColorType, any> = {
  [ColorType.TRUE]: '!border-b-0',
  [ColorType.FALSE]: 'text-black !bg-color-tab',
};
