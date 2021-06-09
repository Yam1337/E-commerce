import { PageButton, ButtorsWrapper, ActivePageButton } from './styles';

function PagerNav({ state, itemsCount, itemsPerPage }) {
  const [page, setPage] = state;
  let pagesCount = Math.floor(itemsCount / itemsPerPage);
  if (pagesCount !== itemsCount / itemsPerPage) pagesCount += 1;

  return (
    <>
      <ButtorsWrapper>
        {Array.from(Array(pagesCount).keys()).map((item) => {
          return page === item ? (
            <ActivePageButton type='submit' key={item}>
              {item + 1}
            </ActivePageButton>
          ) : (
            <PageButton type='submit' onClick={() => setPage(item)} key={item}>
              {item + 1}
            </PageButton>
          );
        })}
      </ButtorsWrapper>
    </>
  );
}

export default PagerNav;
