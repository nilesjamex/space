import React, {createContext, useState} from 'react';

export const MoveContext = createContext()

const MoveContextProvider = (props) => {
    const [steps, setSteps] = useState(1);
   
    const next = (e) => {
        setSteps(steps + 1);
    }
    const next2 = (e) => {
        setSteps(steps + 2);
    }
    const next3 = (e) => {
        setSteps(steps + 3);
    }
    const prev = (e) => {
        setSteps(steps - 1);
    }
    const prev2 = (e) => {
        setSteps(steps - 2);
    }
    const prev3 = (e) => {
        setSteps(steps - 3);
    };
  return (
      <MoveContext.Provider value={{steps, next, next2, next3, prev, prev2, prev3}}>
      {props.children}
      </MoveContext.Provider>
  )
};

export default MoveContextProvider;
