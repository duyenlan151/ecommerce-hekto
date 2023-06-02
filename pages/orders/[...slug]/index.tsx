import { useRouter } from 'next/router';
import * as React from 'react';

export interface OrderInfoProps {}

export default function OrderInfo(props: OrderInfoProps) {
  const router = useRouter();
  console.log('🚀 ~ file: index.tsx:11 ~ OrdersResultPage ~ router:', router);
  return <div>OrderInfo</div>;
}
