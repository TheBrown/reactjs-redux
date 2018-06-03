import { createStore } from 'redux';
import reducCal from '../reducers/reducCal';

export const store = createStore(reducCal);
