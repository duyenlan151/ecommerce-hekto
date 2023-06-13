import * as React from 'react';

export interface LoadingCommonProps {}

export default function LoadingCommon(props: LoadingCommonProps) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-4xl font-bold">Hekto</h1>
    </div>
  );
}
