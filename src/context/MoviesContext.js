import React from "react";
import moviesData from "../data/movie.json";
const CreateActiveMoviesStateContext = React.createContext(undefined);

const CreateActicveMoviesDispatchContext = React.createContext(undefined);

function MoviesContextProvider({ children }) {
  const [movies, setMovies] = React.useState(moviesData);

  const handleSetMovies = (movies) => {
    setMovies(movies);
  };

  return (
    <CreateActiveMoviesStateContext.Provider value={{ movies, moviesData }}>
      <CreateActicveMoviesDispatchContext.Provider value={{ handleSetMovies }}>
        {children}
      </CreateActicveMoviesDispatchContext.Provider>
    </CreateActiveMoviesStateContext.Provider>
  );
}

const useCreateActiveMoviesStateContext = () => {
  const context = React.useContext(CreateActiveMoviesStateContext);
  if (context === undefined) {
    throw Error("CreateActiveMoviesStateContext");
  }
  return context;
};

const useCreateActiveMoviesDispatchContext = () => {
  const context = React.useContext(CreateActicveMoviesDispatchContext);
  if (context === undefined) {
    throw Error("CreateActicveMoviesDispatchContext");
  }
  return context;
};

const useMoviesContext = () => {
  return [
    useCreateActiveMoviesStateContext(),
    useCreateActiveMoviesDispatchContext(),
  ];
};

export { MoviesContextProvider, useMoviesContext };
