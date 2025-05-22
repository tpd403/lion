// components/Pagination.jsx
import './Pagination.css';
import leftArrow from '../assets/arrow-left.png';
import rightArrow from '../assets/arrow-right.png';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const groupSize = 10;
  const currentGroup = Math.floor((currentPage - 1) / groupSize);
  const groupStart = currentGroup * groupSize + 1;
  const groupEnd = Math.min(groupStart + groupSize - 1, totalPages);

  const pageNumbers = [];
  for (let i = groupStart; i <= groupEnd; i++) {
    pageNumbers.push(i);
  }

  const handlePrevGroup = () => {
    if (groupStart > 1) {
      onPageChange(groupStart - 1);
    }
  };

  const handleNextGroup = () => {
    if (groupEnd < totalPages) {
      onPageChange(groupEnd + 1);
    }
  };

  console.log(totalItems)

  return (
    <div className="pagination">
      <button
        className="arrow"
        onClick={handlePrevGroup}
        disabled={groupStart === 1}
      >
        <img src={leftArrow} alt="prev" className="arrow-icon" />
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`page-number ${num === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="arrow"
        onClick={handleNextGroup}
        disabled={groupEnd === totalPages}
      >
        <img src={rightArrow} alt="next" className="arrow-icon" />
      </button>
    </div>
  );
};

export default Pagination;
