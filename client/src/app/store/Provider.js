'use client';
import { useReducer } from 'react';
import reducer, { initState } from './reducer';
import Context from './Context';
import logger from './logger';

function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), initState);
    console.log('provider state: ', state)
    return (
        <Context.Provider value={[state, dispatch]} >
            {children}
        </ Context.Provider>
    )
}

export default Provider;
