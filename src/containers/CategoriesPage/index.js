import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from '../../styles';
import { Error } from '../../components/OrderList/styles';
import CategoryCard from '../../components/CategoryCard';
import { ComponentWrapper, Title, GridContainer } from './styles';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          'https://frontend-labs.herokuapp.com/categories'
        );
        setCategories(data);
        setLoader(false);
      } catch (err) {
        setError('Something went wrong, try again later!');
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <ComponentWrapper>
        <Title>Product categories</Title>
        {error === '' &&
          (loader ? (
            <Loader />
          ) : (
            <GridContainer>
              {categories?.map((item) => (
                <CategoryCard
                  key={item.id}
                  name={item?.name}
                  to={`/category/${item.id}`}
                  image={item?.image}
                />
              ))}
            </GridContainer>
          ))}
        {error !== '' && <Error>{error}</Error>}
      </ComponentWrapper>
    </>
  );
};

export default CategoriesPage;
