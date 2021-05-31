import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { GridContainer, Container, ComponentWrapper } from './styles';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      let response = await fetch(
        'https://frontend-labs.herokuapp.com/products?_sort=created_at&_limit=10'
      );
      response = await response.json();
      setProducts(response);
    }

    fetchAPI();
  }, []);
  return (
    <ComponentWrapper>
      <h1>Most recent products</h1>
      <Container>
        <GridContainer>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              width='100%'
              height='70%'
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </GridContainer>
      </Container>
    </ComponentWrapper>
  );
};

export default HomePage;
