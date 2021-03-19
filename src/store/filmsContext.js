import React from 'react'
import { createFilmsStore } from './filmsStore'
import { useLocalObservable } from 'mobx-react'


const FilmsContext = React.createContext(null)

export const FilmsProvider = ({children}) => {

    const filmsStore = useLocalObservable(createFilmsStore)
    return <FilmsContext.Provider value={filmsStore}>{children}</FilmsContext.Provider>
}

export const useFilmsStore = () => React.useContext(FilmsContext)

