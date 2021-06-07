import { Select, SortWrapper, Option, Title } from './styles';

const SortBox = ({ state }) => {
  const [sort, setSort] = state;

  const handleChange = (e) => setSort(e.target.value);

  return (
    <>
      <SortWrapper>
        <Title>SORTING BY</Title>
        <Select value={sort} onChange={handleChange}>
          <Option value=''>---</Option>
          <Option value='alphabet'>Alphabetical order</Option>
          <Option value='increasing'>Increasing price</Option>
          <Option value='decreasing'>Decreasing price</Option>
        </Select>
      </SortWrapper>
    </>
  );
};

export default SortBox;
