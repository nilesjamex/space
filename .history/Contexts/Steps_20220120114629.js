import React, {useState, createContext} from 'react';

export const StepContext = createContext();

const StepContextProvider = (props) => {
     const [true1, setTrue1] = useState(true)
    const [true2, setTrue2] = useState(false)
    const [true3, setTrue3] = useState(false)
    const [true4, setTrue4] = useState(false)

    const click1 = () => {
        setTrue1(true);
        setTrue2(false);
        setTrue3(false);
        setTrue4(false);
    }
    const click2 = () => {
        setTrue1(false);
        setTrue2(true);
        setTrue3(false);
        setTrue4(false);
    }
    const click3 = () => {
        setTrue1(false);
        setTrue2(false);
        setTrue3(true);
        setTrue4(false);
    }
    const click4 = () => {
        setTrue1(false);
        setTrue2(false);
        setTrue3(false);
        setTrue4(true);
    }

  return (
       <StepContext.Provider value={{click1, click2, click3, click4, true1, true2, true3, true4}}>
            {props.children}
        </StepContext.Provider>
        );
}

export default StepContextProvider;
