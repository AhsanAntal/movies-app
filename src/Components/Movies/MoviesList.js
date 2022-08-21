import React from "react";
import { Button } from "react-bootstrap";
export default function MoviesList({ movie, handleDeleteMovie }) {
  return (
    <tr>
      <td>{movie.Title}</td>
      <td>{movie.Genre.name}</td>
      <td>{movie.Stock}</td>
      <td>{movie.Rate}</td>
      <td>
        <Button className="btn btn-info">Edit</Button>
      </td>
      <td>
        <Button
          className="btn btn-danger"
          onClick={() => {
            handleDeleteMovie(movie._id);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
