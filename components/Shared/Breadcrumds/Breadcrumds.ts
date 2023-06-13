// components/breadcrumbs/Breadcrumbs.ts
import { ReactNode } from 'react';
// defining the Props
export type CrumbItem = {
  label: ReactNode; // e.g., Python
  path: string; // e.g., /development/programming-languages/python
};
export type BreadcrumbsProps = {
  items: CrumbItem[];
};
