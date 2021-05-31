import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductDetailsWrapper,
} from './styles';

function ProductCard({ width, height, image, name, price }) {
  return (
    <ProductCardWrapper width={width} height={height}>
      <ProductImageWrapper>
        <img src={image} alt={name} />
      </ProductImageWrapper>
      <ProductDetailsWrapper>
        <div>{name}</div>
        <div>{`${price} zł`}</div>
      </ProductDetailsWrapper>
    </ProductCardWrapper>
  );
}

export default ProductCard;
