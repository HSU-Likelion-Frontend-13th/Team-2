import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About'


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      <section>
        <About />
      </section>
    </div>
  );
}

export default App;