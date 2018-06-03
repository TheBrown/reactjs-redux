import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducCal from '../reducers/reducCal';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';    
import ReduxThunk from 'redux-thunk';
import fetchReducer  from '../reducers/fetchReducer';


const composeEnhancers = composeWithDevTools({

});

const root = combineReducers({ calu: reducCal, fetch: fetchReducer});

export const store = createStore(root, composeEnhancers(applyMiddleware(ReduxThunk)));
