import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/vendors/font-stroke/css/font-stroke.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import cartReducer from "./store/reducers/cartReducer";
import productReducer from "./store/reducers/productReducer";
import productListReducer from "./store/reducers/productListReducer";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("state");
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (e) {
//     return undefined;
//   }
// };

// const saveState = state => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("state", serializedState);
//   } catch (e) {
//     // Ignore write errors;
//   }
// };

// const peristedState = loadState();

// const store = createStore(
//   // Other reducer
//   cartReducer,
//   peristedState
// );

// store.subscribe(() => {
//   saveState(store.getState());
// });

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // only navigation will be persisted
}

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer, 
  productList: productListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
