import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About'
import Hobby from './components/Hobby'

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
      <section>
        <Hobby />
      </section>
    </div>
  );
}

export default App;