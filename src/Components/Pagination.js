import { Link } from 'react-router-dom';

const PREVIOUS_PAGE = 'PREV';
const NEXT_PAGE= 'NEXT';

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

function Pagination(props) {
  const { 
    totalRecords = null, 
    pageLimit = 30, 
    pageRangeDisplayed = 0, 
    renderPage,
    baseUrl
  } = props;
  const totalPages = Math.ceil(totalRecords / pageLimit);

  // const gotoPage = useCallback(
  //   page => {
  //     setCurrentPage(page);
  //     props.onChangePage(page);
  //   },
  //   [props]
  // );

  // useEffect(()=> {
  //   gotoPage(renderPage);
  // }, []);

  // const setPage = page => event => {
  //   event.preventDefault();
  //    gotoPage(page);
  // };
  
  const getPager = () => {
    const totalItems = (pageRangeDisplayed * 2) + 3;
    const totalBlocks = totalItems + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, renderPage - pageRangeDisplayed);
      const endPage = Math.min(totalPages - 1, renderPage + pageRangeDisplayed);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalItems - (pages.length + 1);

      switch (true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [PREVIOUS_PAGE, ...extraPages, ...pages];
          break;
        }
        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, NEXT_PAGE];
          break;
        }
        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [PREVIOUS_PAGE, ...pages, NEXT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  if (!totalRecords || totalPages === 1) return null;

  const pages = getPager();

  const renderPages = pages.map((page, index) => {
    const numCurrentPage = parseInt(renderPage);
    return (
      <li key={index}>
        <Link to={`${baseUrl}${page}`} 
              className={`button pagination-link ${numCurrentPage === page ? 'is-current' : ''}`} 
              //onClick={setPage(page)}
        >
          {page}
        </Link>
      </li>
    );
  });

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        {renderPages}
      </ul>
    </nav>
  );
}

export default Pagination;