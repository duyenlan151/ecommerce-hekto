import { ReactNode } from 'react';

export interface ModalCommonProps {
  loading?: boolean;
  isShow: boolean;
  title: string;
  description?: string | ReactNode;
  onClose: () => void;
}
