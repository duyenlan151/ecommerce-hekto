import { Variants } from 'framer-motion';
import React from 'react';

/* Custom Animated Components types */
export type AnimatedTAGProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
};
