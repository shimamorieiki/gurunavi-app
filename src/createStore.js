import {
    createStore as reduxCreateStore,
    applyMiddleware,
    compose
} from 'redux';

import {
    routerMiddleware
} from 'connected-react-router';
import { createRootReducer } from './reducers';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export function configureStore(preloadedState) {
    const store = reduxCreateStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                logger,
                thunk,
                // ... other middlewares ...
            ),
        ),
    );
    return store;
}