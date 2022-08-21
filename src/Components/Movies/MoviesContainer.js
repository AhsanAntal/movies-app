import React from "react";

import { Table } from "react-bootstrap";
import MoviesList from "./MoviesList";

export default function MoviesContainer({
  movies,
  handleDeleteMovie,
  sortOrder,
  orderBy,
}) {
  return (
    <Table striped>
      <thead>
        <tr>
          <th onClick={() => sortOrder("Title")}>Title</th>
          <th onClick={() => sortOrder("Genre")}>Genre</th>
          <th onClick={() => sortOrder("Stock")}>Stock</th>
          <th onClick={() => sortOrder("Rate")}>Rate</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => {
          return (
            <MoviesList
              movie={movie}
              key={movies._id}
              handleDeleteMovie={handleDeleteMovie}
            />
          );
        })}
      </tbody>
    </Table>
  );
}
