import React from "react";

import { useMoviesContext } from "../../context/MoviesContext";
import { useActiveGenreContext } from "../../context/GenreContext";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import DeleteModal from "../Modals/DeleteModal";
import MoviesContainer from "./MoviesContainer";

export default function Movies() {
  const [activeGenre] = useActiveGenreContext();
  const [{ movies }, { handleSetMovies }] = useMoviesContext();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [moviesPerPage] = React.useState(4);
  const [deleteModal, setDeleteModal] = React.useState({
    isVisible: false,
    targetId: null,
  });
  const [directDeleteButton, setDirectDeleteButton] = React.useState(false);
  const [orderBy, setOrderBy] = React.useState("Ascending");
  const [moviesToSearch, setMoviesToSearch] = React.useState("");

  //<--- delete button --->

  const movieDelete = (id) =>
    handleSetMovies(movies.filter((movie) => movie._id !== id));

  const handleDeleteMovie = (id) => {
    if (!directDeleteButton) {
      setDeleteModal({
        isVisible: true,
        targetId: id,
      });
      return;
    }

    movieDelete(id);
  };

  const handleConfirmDeleteModal = () => {
    movieDelete(deleteModal.targetId);

    setDeleteModal({
      isVisible: false,
      targetId: null,
    });

    return;
  };

  const handleDirectDeleteButtonIsChecked = (e) => {
    if (e.target.checked) {
      setDirectDeleteButton(true);
    }

    return;
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal({
      isVisible: false,
      targetId: null,
    });
    setDirectDeleteButton(false);

    return;
  };

  // <--- filter by genre --->

  const filterMovies = movies.filter((movie) => {
    if (activeGenre.id === "0") {
      return movie.Genre._id !== activeGenre.id;
    }
    return movie.Genre._id === activeGenre.id;
  });

  // <--- pagination --->

  const indexOfFirstMovie = currentPage * moviesPerPage - moviesPerPage;
  const indexOfLastMovie = currentPage * moviesPerPage - 1;
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalMovies = filterMovies.length;

  const searchFilteredMovies = filterMovies.filter((movie) =>
    movie.Title.toLowerCase().startsWith(moviesToSearch.toLowerCase())
  );

  const moviesToDisplay = searchFilteredMovies.filter((_movie, index) => {
    if (index >= indexOfFirstMovie && index <= indexOfLastMovie) {
      return true;
    }
    return false;
  });

  //<---- Sorting --->

  const sortOrder = (colPath) => {
    orderBy === "Ascending"
      ? setOrderBy("Descending")
      : setOrderBy("Ascending");
    sortMovies(orderBy, colPath);
  };

  const sortMovies = (orderBy, colPath) => {
    if (colPath === "genre") {
      orderBy === "Ascending"
        ? movies.sort((prevMovie, nextMovie) =>
            prevMovie.genre.name > nextMovie.genre.name ? 1 : -1
          )
        : movies.sort((prevMovie, nextMovie) =>
            prevMovie.genre.name < nextMovie.genre.name ? 1 : -1
          );
      handleSetMovies(movies);
      return;
    }

    orderBy === "Ascending"
      ? movies.sort((prevMovie, nextMovie) =>
          prevMovie[colPath] > nextMovie[colPath] ? 1 : -1
        )
      : movies.sort((prevMovie, nextMovie) =>
          prevMovie[colPath] < nextMovie[colPath] ? 1 : -1
        );

    handleSetMovies(movies);
    return;
  };

  //<---- Searching --->

  const handleSearchMoviesToChange = (e) => {
    setMoviesToSearch(e.target.value);
  };

  const handleClearMoviesToSearch = () => {
    setMoviesToSearch("");
  };

  return (
    <>
      <p> Showing {movies.length} movies in database</p>
      <SearchBar
        moviesToSearch={moviesToSearch}
        handleSearchMoviesToChange={handleSearchMoviesToChange}
        handleClearMoviesToSearch={handleClearMoviesToSearch}
      />

      <MoviesContainer
        movies={moviesToDisplay}
        handleDeleteMovie={handleDeleteMovie}
        sortOrder={sortOrder}
        orderBy={orderBy}
      />
      <Pagination
        currentPage={currentPage}
        moviesPerPage={moviesPerPage}
        totalMovies={totalMovies}
        paginate={paginate}
      />
      <DeleteModal
        displayModal={deleteModal}
        handleCloseBtn={handleCloseDeleteModal}
        handleConfirmBtn={handleConfirmDeleteModal}
        handleRememberBtn={handleDirectDeleteButtonIsChecked}
      />
    </>
  );
}
