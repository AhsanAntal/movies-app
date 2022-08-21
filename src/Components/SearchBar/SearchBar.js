import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function SearchBar({
  moviesToSearch,
  handleSearchMoviesToChange,
  handleClearMoviesToSearch,
}) {
  // React.useEffect(() => {
  //   const moviesSearched = [...moviesData].filter((movie) =>
  //     movie.Title.toLowerCase().startsWith(moviesToSearch.toLowerCase())
  //   );
  //   handleSetMovies(moviesSearched);
  // }, [moviesToSearch, moviesData]);

  return (
    <InputGroup className="md-3">
      <Form.Control
        value={moviesToSearch}
        onChange={handleSearchMoviesToChange}
        placeholder="Search by Title"
        aria-label="Search Movies"
      />
      {moviesToSearch ? (
        <Button
          variant="outline-secondary"
          id="btnClear"
          onClick={handleClearMoviesToSearch}
        >
          Refresh
        </Button>
      ) : null}
    </InputGroup>
  );
}
