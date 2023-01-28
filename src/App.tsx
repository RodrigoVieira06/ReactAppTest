import React from 'react';
import Header from "./components/common/Header";
import Sidebar from './components/common/Sidebar';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// adicionando o font awesome ao projeto
library.add(fas);

function App() {
  return (
    <div className="App" style={{ backgroundColor: "lightgray" }}>
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
