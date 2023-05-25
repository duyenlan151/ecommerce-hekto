export enum EProductItemType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TRENDING = 'trending',
}

export const ProductItemType: Record<EProductItemType, string | number> = {
  [EProductItemType.PRIMARY]: 'text-pink-1 border-b border-pink-1',
  [EProductItemType.SECONDARY]: 'text-black',
  [EProductItemType.TRENDING]: '',
};
