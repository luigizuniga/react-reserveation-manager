/* eslint-disable react/prop-types */
import { useState } from 'react';
import CourtCard from './CourtCard';

const CourtList = ({ courts, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Lógica para obtener las canchas que se mostrarán en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourts = courts.slice(startIndex, endIndex);

  // Lógica para generar los números de página en el paginador
  const totalPages = Math.ceil(courts.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <section>
        <div className="columns is-multiline">
          {currentCourts.map((court) => (
            <div key={court.id} className="column is-4">
              <CourtCard court={court} />
            </div>
          ))}
        </div>

        <nav className="pagination" role="navigation" aria-label="pagination">
          <ul className="pagination-list">
            {pageNumbers.map((pageNumber) => (
              <li key={pageNumber}>
                <button
                  className={`pagination-link ${
                    pageNumber === currentPage ? 'is-current' : ''
                  } `}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default CourtList;

