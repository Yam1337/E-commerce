import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductDetailsWrapper,
  PriceWrapper,
  ProductImage
} from './styles';

function ProductCard({ width, height, image, name, price }) {
  return (
    <ProductCardWrapper width={width} height={height}>
      <ProductImageWrapper img={image}>
        <ProductImage src={image || '#'} alt={name || '#'} />
      </ProductImageWrapper>
      <ProductDetailsWrapper>
        <div>{name}</div>
        <PriceWrapper>{`${price},00 zł`}</PriceWrapper>
      </ProductDetailsWrapper>
    </ProductCardWrapper>
  );
}

export default ProductCard;
