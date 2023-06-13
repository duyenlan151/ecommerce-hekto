import * as React from 'react';

export interface LoadingCommonProps {}

export default function LoadingCommon(props: LoadingCommonProps) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-4xl font-bold mr-20">Hekto</h1>
    </div>
  );
}
