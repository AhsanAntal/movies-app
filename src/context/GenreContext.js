import React from "react";

const CreateActiveGenreStateContext = React.createContext(undefined);

const CreateActiveGenreDispatchContext = React.createContext(undefined);

function GenreContextProvider({ children }) {
  const [activeGenre, setActiveGenre] = React.useState({
    id: "0",
    name: "All Movies",
  });
  const handleActiveGenre = (activeGenre) => {
    setActiveGenre(activeGenre);
  };

  return (
    <CreateActiveGenreStateContext.Provider value={activeGenre}>
      <CreateActiveGenreDispatchContext.Provider value={{ handleActiveGenre }}>
        {children}
      </CreateActiveGenreDispatchContext.Provider>
    </CreateActiveGenreStateContext.Provider>
  );
}

const useGenreStateContext = () => {
  const context = React.useContext(CreateActiveGenreStateContext);
  if (context === undefined) {
    throw Error("CreateActiveGenreStateContext");
  }
  return context;
};

const useGenreDispatchContext = () => {
  const context = React.useContext(CreateActiveGenreDispatchContext);
  if (context === undefined) {
    throw Error("CreateActiveGenreDispatchContext");
  }
  return context;
};

const useActiveGenreContext = () => {
  return [useGenreStateContext(), useGenreDispatchContext()];
};

export { GenreContextProvider, useActiveGenreContext };
