import React, {createContext, useState} from 'react';

export const MoveContext = createContext()

const MoveContextProvider = (props) => {
    const [steps, setSteps] = useState(1);
   
    const next = (e) => {
        setSteps(steps + 1);
    }
    const prev = (e) => {
        setSteps(steps - 1);
    };
  return (
      <MoveContext.Provider value={{steps, next, prev}}>
      {props.children}
      </MoveContext.Provider>
  )
};

export default MoveContextProvider;
