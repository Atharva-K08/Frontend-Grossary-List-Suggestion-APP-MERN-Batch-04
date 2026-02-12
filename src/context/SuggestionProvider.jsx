import React from 'react'
import { createContext } from 'react';
export const SuggestionContext = createContext();
function SuggestionProvider({children}) {
  return (
    <SuggestionContext.Provider value={{}} >
        {children}
    </SuggestionContext.Provider>
  )
}

export default SuggestionProvider