import React from 'react'
import { createCharacterStore } from './characterStore'
import { useLocalObservable } from 'mobx-react'


const CharacterContext = React.createContext(null)

export const CharacterProvider = ({children}) => {

    const characterStore = useLocalObservable(createCharacterStore)
    return <CharacterContext.Provider value={characterStore}>{children}</CharacterContext.Provider>
}

export const useCharacterStore = () => React.useContext(CharacterContext)