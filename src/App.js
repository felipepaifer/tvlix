// LIBRARIES
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import history  from "./routes/history";
import { Provider } from 'react-redux';

// STORE
import store from './store'

// VIEWS
import CombinedRoutes from "./CombinedRoutes";

// STRUCTURE COMPONENTS
import { TvPageWrapper, TvContainer } from "./structureComponents/index";


function App() {

  return (
      <Provider store={store}>
        <TvPageWrapper>
          <Router history={history}>
            <Switch>
              <TvContainer fluid flex>
                <TvContainer>
                  <CombinedRoutes />
                </TvContainer>
              </TvContainer>
            </Switch>
          </Router>
        </TvPageWrapper>
      </Provider>
  );
}

export default App
