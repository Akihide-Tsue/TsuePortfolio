import React from "react";
import { store } from "./store"
import { Provider } from "react-redux"

import DashBoard from "./DashBoard/DashBoard";

function App() {

    return (
      <Provider store={store}>
        <DashBoard />;
      </Provider>
    )
}

export default App;
