import React from "react";
import HeaderComponent from "./components/Header/HeaderComponent";
import ArticlePage from "./pages/ArticlePage";

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <ArticlePage />
    </div>
  );
};

export default App;
