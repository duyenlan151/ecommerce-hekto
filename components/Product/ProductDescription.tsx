import { ProductModel } from 'models';
import { memo } from 'react';
import * as sanitizeHtml from 'sanitize-html';

export interface ProductDetailProps {
  product: ProductModel;
}

export const ProductDescription = memo(function ProductDescriptionMain({
  product,
}: ProductDetailProps) {
  const { short_description } = product;
  return (
    <div
      className="ql-editor !overflow-hidden"
      dangerouslySetInnerHTML={{
        __html: short_description,
      }}
    ></div>
  );
});
