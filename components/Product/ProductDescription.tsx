import { ProductItem } from 'models';
import * as sanitizeHtml from 'sanitize-html';

export interface ProductDetailProps {
  product: ProductItem;
}

function ProductDescription({ product }) {
  const { description } = product;
  return (
    <div
      className="ql-editor"
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    ></div>
  );
}

export default ProductDescription;
