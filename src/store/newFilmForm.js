import React from "react";
import { useFilmsStore } from "./filmsContext";

export const NewFilmForm = () => {
  const [filmText, setFilmText] = React.useState("");
  const filmsStore = useFilmsStore();

  return (
    <>
      <input
        value={filmText}
        onChange={(e) => setFilmText(e.target.value)}
        type="text"
      />
      <button onClick={() => filmsStore.addFilm(filmText)}>Add note</button>
    </>
  );
};