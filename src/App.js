import React from 'react';

import './style/style.css';
// import ItemParent from './components/ItemParent';
// import ItemSon from './components/ItemSon';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducer';
import AsideMenu from './components/AsideMenu';
import MenuWidget from './components/MenuWidget';
import Main from './components/Main';

function App() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      <div className="App">
        <div className="main-dashboard">
          <MenuWidget/>
          <Main />
          <AsideMenu />
        </div>
      </div>
    </Provider>
  );
}

export default App;
