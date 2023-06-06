import * as React from 'react';

export enum EBadgeItemType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TRENDING = 'trending',
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  LOCK = 'lock',
}

export const BadgeItemType: Record<EBadgeItemType, string | number> = {
  [EBadgeItemType.PRIMARY]: '!text-black bg-gray-200',
  [EBadgeItemType.SECONDARY]: '!text-black',
  [EBadgeItemType.TRENDING]: '',
  [EBadgeItemType.ACTIVE]: 'bg-green-500',
  [EBadgeItemType.ARCHIVED]: '!text-black bg-gray-200',
  [EBadgeItemType.LOCK]: 'bg-red-500',
};

export interface BadgeProps {
  type?: EBadgeItemType;
  text: string;
}

export function Badge({ type = EBadgeItemType.PRIMARY, text }: BadgeProps) {
  return (
    <span className={`text-white py-1 px-3 capitalize text-xs rounded ${BadgeItemType[type]}`}>
      {text}
    </span>
  );
}
