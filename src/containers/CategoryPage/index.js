import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import SortBox from '../../components/SortBox';
import {
  ComponentWrapper,
  Title,
  GridContainer,
  TopContainer,
  Error,
} from './styles';
import { Loader } from '../../styles';

const CategoryPage = ({ match }) => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('');
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const { data } = await axios.get(
          `https://frontend-labs.herokuapp.com/categories/?id=${match.params.id}`
        );
        setCategory(data[0].name);
      } catch (e) {
        setCategory('This');
      }
    };

    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `https://frontend-labs.herokuapp.com/products?category.id=${match.params.id}`
        );
        setProducts(data);
      } catch (e) {
        setError(true);
      }
    };

    Promise.all([fetchCategories(), fetchName()]).then((res) => {
      setLoader(false);
    });
  }, [match.params.id]);

  const sortHandler = (a, b) => {
    switch (sort) {
      case 'alphabet':
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      case 'increasing':
        return a.price - b.price;
      case 'decreasing':
        return b.price - a.price;
      default:
    }
    return 0;
  };

  return (
    <>
      <ComponentWrapper>
        {loader ? (
          <Loader />
        ) : (
          <>
            <TopContainer>
              <Title>{`${category} category - ${products.length} products`}</Title>
              <SortBox state={[sort, setSort]} />
            </TopContainer>
            {error ? (
              <Error>Something went wrong, try again later!</Error>
            ) : (
              <GridContainer>
                {products.sort(sortHandler).map((item) => (
                  <Link to={`/product/${item.id}`} key={item.id}>
                    <ProductCard
                      key={item.id}
                      image={item.image}
                      price={item.price}
                      name={item.name}
                      height='100%'
                      width='100%'
                    />
                  </Link>
                ))}
              </GridContainer>
            )}
          </>
        )}
      </ComponentWrapper>
    </>
  );
};

export default CategoryPage;
