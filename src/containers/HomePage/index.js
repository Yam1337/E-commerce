import { useState, useEffect } from 'react';
import { Container, ProductCard } from './styles';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://frontend-labs.herokuapp.com/products?_limit=10')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <>
      <h1>Most recent products</h1>
      <Container>
        {products.map((item) => (
          <ProductCard key={item.id}>{item.image}{item.name}</ProductCard>
        ))}
      </Container>
    </>
  );
};

export default HomePage;
