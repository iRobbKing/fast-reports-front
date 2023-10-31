import PropTypes from "prop-types";

function NewsListPaginationBar({ page, prevPage, nextPage, pageCount, onPageChanged }) {
  function handlePageChange(page) {
    onPageChanged(page);
  }

  const leftPart = 0 < page && (
    <>
      {
        1 < page && <>
          <li>
            <a className="pagination-link" onClick={() => handlePageChange(0)}>1</a>
          </li>
          <li>
          <span className="pagination-ellipsis">&hellip;</span>
          </li>
        </>
      }
      <li>
        <a className="pagination-link" onClick={() => handlePageChange(prevPage)}>{prevPage + 1}</a>
      </li>
    </>
  );

  const rightPart = page < pageCount - 1 && (
    <>
      <li>
        <a className="pagination-link" onClick={() => handlePageChange(nextPage)}>{nextPage + 1}</a>
      </li>
      {
        page < pageCount - 2 && <>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a className="pagination-link" onClick={() => handlePageChange(pageCount - 1)}>{pageCount}</a>
          </li>
        </>
      }
    </>
  );

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        {leftPart}
        <li>
          <a className="pagination-link is-current">{page + 1}</a>
        </li>
        {rightPart}
      </ul>
    </nav>
  );
}

NewsListPaginationBar.propTypes = {
  page: PropTypes.number.isRequired,
  prevPage: PropTypes.number.isRequired,
  nextPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
};

export default NewsListPaginationBar;
