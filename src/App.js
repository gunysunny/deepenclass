
import React from 'react';
import Header from './components/Header/Header.jsx';
import Banner from './components/Section/Banner.jsx';
import Contents from './components/Contents/Contents.jsx';
import Category from './components/Section/Category.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Contents />
      <Category />
    </div>
  );
}

export default App;