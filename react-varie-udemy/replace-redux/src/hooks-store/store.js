import {useState, useEffect} from 'react'

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
    const [state, setState] = useState(globalState);

    const dispatch = (actionId, payload) => {
        const newState = actions[actionId](globalState, payload);
        globalState = {...globalState, ...newState}
    };

    for (const listener of listeners) {
        listener(globalState);
    }

    useEffect(() => {
        if (shouldListen) {
            listeners.push(setState);

            return () => {
                listeners = listeners.filter(l => l !== setState);
            }
        }
    }, [setState, shouldListen]);

    return [globalState, dispatch];
    
};

export const initStore = (userAction, initialState) => {
    if (initialState) {
        globalState = {...globalState, ...initialState};
    }
    actions = {...actions, ...userAction};
}