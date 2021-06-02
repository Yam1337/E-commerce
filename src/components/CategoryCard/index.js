import { Link } from 'react-router-dom';
import { CardWrapper, Name, Photo, PhotoContainer } from './styles';

const CategoryCard = ({ name, image, to }) => {
  return (
    <>
      <Link to={to} style={{ textDecoration: 'none' }}>
        <CardWrapper color=''>
          <PhotoContainer img={image}>
            <Photo src={image || '#'} alt={name} />
          </PhotoContainer>
          <Name size='calc(1.5rem + 0.2vw)'>{name}</Name>
        </CardWrapper>
      </Link>
    </>
  );
};

export default CategoryCard;
