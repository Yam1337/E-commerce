import { Select, SelectWrapper, Option, Title } from './styles';

const CustomSelect = ({ state, title, options }) => {
  const [selState, setSelState] = state;

  const handleChange = (e) => setSelState(e.target.value);

  return (
    <>
      <SelectWrapper>
        <Title>{title}</Title>
        <Select value={selState} onChange={handleChange}>
          {options.map((item) => (
            <Option value={item.value} key={item.value}>
              {item.name}
            </Option>
          ))}
        </Select>
      </SelectWrapper>
    </>
  );
};

export default CustomSelect;
