import React, {useState} from 'react'
import TemaContext from './TemaContext'

const TemaProvider = ({children}) => {
    const [tema, setTema] = useState('light');

    function toggleTema(){
        setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'))
    }
  return (
    <TemaContext.Provider value={{tema, toggleTema}}>
      {children}
    </TemaContext.Provider>
  )
}

export default TemaProvider;
