import { ProductModel } from 'models';
import * as sanitizeHtml from 'sanitize-html';

export interface ProductDetailProps {
  product: ProductModel;
}

function ProductDescription({ product }) {
  const { short_description } = product;
  return (
    <div
      className="ql-editor"
      dangerouslySetInnerHTML={{
        __html: short_description,
      }}
    ></div>
  );
}

export default ProductDescription;
