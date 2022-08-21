import React from "react";
import genreData from "../../data/genre.json";
import { ListGroup, Tab } from "react-bootstrap";
import { useActiveGenreContext } from "../../context/GenreContext";
export default function Genre() {
  const [activeGenre, { handleActiveGenre }] = useActiveGenreContext();

  const handleShowAllMovies = () => {
    handleActiveGenre({
      id: "0",
      name: "All Movies",
    });
  };
  const handleShowGenreMovies = (genre) => {
    handleActiveGenre({
      id: genre._id,
      name: genre.name,
    });
  };

  return (
    <Tab.Container defaultActiveKey={activeGenre.name}>
      <ListGroup>
        <ListGroup.Item
          as="li"
          action
          href="All Movies"
          onClick={handleShowAllMovies}
          style={{ cursor: "pointer" }}
        >
          All Movies
        </ListGroup.Item>
        {genreData.map((genre) => {
          return (
            <ListGroup.Item
              as="li"
              action
              href={genre.name}
              onClick={() => handleShowGenreMovies(genre)}
            >
              {genre.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Tab.Container>
  );
}
