import * as React from 'react';

export interface HighLightSearchTextProps {
  text: string;
  textHighlight: string;
}

export function HighLightSearchText({ text, textHighlight = '' }: HighLightSearchTextProps) {
  if (!textHighlight.trim()) {
    return <span className="text-red">{text}</span>;
  }

  const regex = new RegExp(`(${textHighlight})`, 'gi');
  const parts = text ? text.split(new RegExp(`(${textHighlight})`, 'gi')) : [];

  return (
    <span>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
        )}
    </span>
  );
}
