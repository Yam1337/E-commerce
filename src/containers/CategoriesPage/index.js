import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from '../../styles';
import CategoryCard from '../../components/CategoryCard';
import { ComponentWrapper, Title, GridContainer } from './styles';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        'https://frontend-labs.herokuapp.com/categories'
      );
      setCategories(data);
      setLoader(false);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <ComponentWrapper>
        <Title>Product categories</Title>
        {loader ? (
          <Loader />
        ) : (
          <GridContainer>
            {categories.map((item) => (
              <CategoryCard
                key={item.id}
                name={item.name}
                to={`/category/${item.id}`}
                image={item.image}
              />
            ))}
          </GridContainer>
        )}
      </ComponentWrapper>
    </>
  );
};

export default CategoriesPage;
