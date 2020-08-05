import React from 'react';
import { render } from 'react-dom';
import './index.css';
import {StoreState} from './types';
import {EnthusiasmAction} from "./actions";
import {enthusiasm} from './reducers';
import Hello from './containers/Hello';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore<StoreState, EnthusiasmAction, unknown, unknown>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

render(
  <React.StrictMode>
    <Provider store={store}>
        <Hello />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
