import React from 'react';
import './App.css';
import './discord.css';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <div className="main_wrapper overflow_hidden">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
