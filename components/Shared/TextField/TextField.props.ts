export enum ETextItemType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TRENDING = 'trending',
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  STRIPE = 'stripe',
  CASH = 'cash',
  PAYPAL = 'paypal',
  LOCK = 'lock',
}

export const TextItemType: Record<ETextItemType, string | number> = {
  [ETextItemType.PRIMARY]: 'text-black',
  [ETextItemType.SECONDARY]: 'text-gray-200',
  [ETextItemType.TRENDING]: 'text-yellow-400',
  [ETextItemType.ACTIVE]: 'text-green-1',
  [ETextItemType.ARCHIVED]: 'text-black',
  [ETextItemType.STRIPE]: 'text-blue-700',
  [ETextItemType.CASH]: 'text-red-500',
  [ETextItemType.PAYPAL]: 'text-yellow-500',
  [ETextItemType.LOCK]: 'text-red-500',
};
