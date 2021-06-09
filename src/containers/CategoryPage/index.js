import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import CustomSelect from '../../components/CustomSelect';
import PagerNav from '../../components/PagerNav';
import {
  ComponentWrapper,
  Title,
  GridContainer,
  TopContainer,
  Error,
} from './styles';
import { Loader } from '../../styles';

const CategoryPage = ({ match }) => {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('id');
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  const sortOptions = [
    {
      name: '---',
      value: 'id',
    },
    {
      name: 'Alphabetical order',
      value: 'name',
    },
    {
      name: 'Increasing price',
      value: 'price',
    },
  ];

  const countOptions = [
    {
      name: '4',
      value: '4',
    },
    {
      name: '8',
      value: '8',
    },
    {
      name: '12',
      value: '12',
    },
    {
      name: '24',
      value: '24',
    },
    {
      name: '48',
      value: '48',
    },
  ];

  const whichPage = () => {
    if (page * itemsPerPage > count) {
      return 0;
    }
    return page * itemsPerPage;
  };

  useEffect(() => {
    const fetchCount = async () => {
      if (count === 0) {
        try {
          const { data } = await axios.get(
            `https://frontend-labs.herokuapp.com/products/count/?category.id=${match.params.id}`
          );
          setCount(data);
        } catch (e) {
          setError(true);
        }
      }
    };
    const fetchName = async () => {
      if (category === '') {
        try {
          const { data } = await axios.get(
            `https://frontend-labs.herokuapp.com/categories/?id=${match.params.id}`
          );
          setCategory(data[0].name);
        } catch (e) {
          setCategory('This');
        }
      }
    };
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `https://frontend-labs.herokuapp.com/products?_limit=${itemsPerPage}&category.id=${
            match.params.id
          }&_start=${whichPage()}&_sort=${sort}`
        );
        setProducts(data);
      } catch (e) {
        setError(true);
      }
    };

    Promise.all([fetchName(), fetchCount()]).then((res) => {
      Promise.all([fetchCategories()]).then((res2) => {
        setLoader(false);
      });
    });
    // eslint-disable-next-line
  }, [match.params.id, page, sort, itemsPerPage]);

  return (
    <>
      <ComponentWrapper>
        {loader ? (
          <Loader />
        ) : (
          <>
            <TopContainer>
              <Title>{`${category} category - ${count} products`}</Title>
              <div>
                <CustomSelect
                  state={[itemsPerPage, setItemsPerPage]}
                  title='DISPLAY ITEMS'
                  options={countOptions}
                />
                <CustomSelect
                  state={[sort, setSort]}
                  title='SORTING BY'
                  options={sortOptions}
                />
              </div>
            </TopContainer>
            {error ? (
              <Error>Something went wrong, try again later!</Error>
            ) : (
              <>
                <GridContainer>
                  {products.map((item) => (
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
                <PagerNav
                  state={[page, setPage]}
                  itemsCount={count}
                  itemsPerPage={itemsPerPage}
                />
              </>
            )}
          </>
        )}
      </ComponentWrapper>
    </>
  );
};

export default CategoryPage;
