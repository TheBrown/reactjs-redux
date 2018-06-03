import { createStore } from 'redux';
import reducCal from '../reducers/reducCal';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';    

export const store = createStore(reducCal, devToolsEnhancer());
