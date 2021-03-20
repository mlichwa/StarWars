import { useState } from 'react';


const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [filmObject, setFilmObject] = useState(null);
  const [characterStore, setCharacterStore] = useState(null);
  // const characterStore = useCharacterStore();

  function toggle() {
    setIsShowing(!isShowing);
  }

  function updateObject(obj) {
    setFilmObject(obj)
  }

  function updateCharacterStore(store) {
    setCharacterStore(store)
  }

  return {
    characterStore,
    updateCharacterStore,
    filmObject,
    updateObject,
    isShowing,
    toggle,
  }
};

export default useModal;