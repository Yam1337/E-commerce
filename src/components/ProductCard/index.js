import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductDetailsWrapper,
  PriceWrapper,
} from './styles';

function ProductCard({ width, height, image, name, price }) {
  return (
    <ProductCardWrapper width={width} height={height}>
      <ProductImageWrapper>
        <img src={image} alt={name} />
      </ProductImageWrapper>
      <ProductDetailsWrapper>
        <div>{name}</div>
        <PriceWrapper>{`${price} zł`}</PriceWrapper>
      </ProductDetailsWrapper>
    </ProductCardWrapper>
  );
}

export default ProductCard;
