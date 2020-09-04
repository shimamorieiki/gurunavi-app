import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import { default as shopping } from './shopping';
// import { default as Ranking } from './Ranking';

export const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        // shopping,
        // Ranking,
    });

// export { shopping };
// export { Ranking };