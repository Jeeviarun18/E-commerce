import React, { useContext } from 'react'
import {ShopCOntext} from '../Context/ShopCOntext'
import {useParams} from 'react-router-dom'
import Breadcrumbs  from '../Components/Breadcrumbs/Breadcrumbs';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopCOntext);
  const { productId } = useParams();

  const product = all_product.find(
    (e) => e.id === Number(productId)
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
};
export default Product;

