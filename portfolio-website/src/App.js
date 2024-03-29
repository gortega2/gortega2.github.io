import logo from './logo.svg';
import './App.css';
import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit what and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default function App() {

  return (
    <main className="text-gray-400 bg-zinc-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />

    </main>
  );
}
