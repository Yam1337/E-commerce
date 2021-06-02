import { Select, SortWrapper, Title } from './styles';

const SortBox = ({ state }) => {
  const [sort, setSort] = state;

  const handleChange = (e) => setSort(e.target.value);

  return (
    <>
      <SortWrapper>
        <Title>SORTING BY</Title>
        <Select value={sort} onChange={handleChange}>
          <option value=''>---</option>
          <option value='alphabet'>Alphabetical order</option>
          <option value='increasing'>Increasing price</option>
          <option value='decreasing'>Decreasing price</option>
        </Select>
      </SortWrapper>
    </>
  );
};

export default SortBox;
