import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductDetailsWrapper,
} from './styles';

const products = [
  {
    id: '1',
    name: 'Koszulka',
    description: 'Zwykła koszulka o kroju basic-fit',
    img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    category: 'Koszulki',
    material: '100% Bawełna',
    adjective: 'Placeholder',
    price: '29,99',
    color: 'Biały',
  },
  {
    id: '2',
    name: 'Jeansy',
    description: 'Zwykłe jeansy o kroju basic-fit',
    img: 'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    category: 'Spodnie',
    material: '100% Bawełna',
    adjective: 'Placeholder',
    price: '89,99',
    color: 'Granatowe',
  },
];

function ProductCard({ width, height }) {
  return (
    <ProductCardWrapper width={width} height={height}>
      <ProductImageWrapper>
        <img src={products[0].img} alt={products[0].name} />
      </ProductImageWrapper>
      <ProductDetailsWrapper>
        <div>{products[0].name}</div>
        <div>{`${products[0].price} zł`}</div>
      </ProductDetailsWrapper>
    </ProductCardWrapper>
  );
}

export default ProductCard;
