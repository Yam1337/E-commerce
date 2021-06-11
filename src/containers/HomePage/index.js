import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { Loader } from '../../styles';
import {
  GridContainer,
  Container,
  ComponentWrapper,
  NavLink,
  Title,
} from './styles';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      let response = await fetch(
        'https://frontend-labs.herokuapp.com/products?_sort=created_at&_limit=10'
      );
      response = await response.json();
      setProducts(response);
      setLoader(false);
    };

    fetchAPI();
  }, []);
  return (
    <ComponentWrapper>
      <Title>Most recent products</Title>
      <Container>
        {loader ? (
          <Loader />
        ) : (
          <GridContainer>
            {products?.map((item) => {
              return (
                <NavLink to={`/product/${item.id}`} key={item.id}>
                  <ProductCard
                    key={item.name}
                    width='100%'
                    height='100%'
                    image={item?.image}
                    name={item?.name}
                    price={item?.price}
                  />
                </NavLink>
              );
            })}
          </GridContainer>
        )}
      </Container>
    </ComponentWrapper>
  );
};

export default HomePage;
