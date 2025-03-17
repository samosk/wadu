// App.js
import React from 'react';
import './App.css';
import config from './config';

function App() {
  return (
    <div className="App">
      <div className="Spacing-20"></div>
      <div className="Introduction">
        <div>
          <h1>Who am I?</h1>
          <h2>A university student making the odd webpage here and there</h2>
        </div>
        <div className="Spacing-20"></div>
        <div className="Picture">
          <img src={`${config.assetPath}/github-mark-white.png`} alt="" />
        </div>
      </div>

      <div className="Beginning">
        <h1>My beginning into programing</h1>
        <p>I got introduced to programing in upper secondary school, where we started with some simple Python</p>
        <p>We made some snake-like games and some simple math-related programs</p>
        <p>Overall pretty simple stuff, but since I was very new to the idea of programing still, it was not the easiest</p>
      </div>

      <div className="Learning">
        <h1>A lot of learning ahead</h1>
        <p>After a while of learning Python, we began using HTML,CSS & JS making simple replications of existing websites</p>
        <p>Making a visual clone of Netflix or YouTube was the gateway to getting a better grip on CSS and utilizing containers in HTML</p>
        <p>Getting a feel for JavaScript took a bit longer, but with some simpler websites using JS for functions such as clocks or getting the current date</p>
      </div>

      <div className="Understanding">
        <h1>Getting a grip</h1>
        <p>After finally getting a decent grip on how to build a basic website we were introduced to Svelte</p>
        <p>This was my first framework, and it laid down a foundation I have continued on since then</p>
        <p>Together with Svelte we used other addons for the design like DaisyUI and TailwindCss, we started slowly transitioning into more modular code</p>
        <p>To finalize my learning process at upper secondary school we started using SvelteKit together with a webbserver</p>
      </div>

      <div className="Current">
        <h1>Higher level studies</h1>
        <p>Having started University we started using basic programing in C</p>
        <p>In total I have had two courses in C, and I have the most ECTS in that language when it comes to programing</p>
        <p>I have also had a course in Java, to learn object-oriented programing</p>
        <p>Currently I am reading a course in webdevelopment, where we were tasked with finding a "bad" website and improving upon it</p>
        <p>As of now, I find webdevelopment to be the most interesting subject within programing</p>
        <p>This website serves as a early attempt of a portfolio to be able to showcase my work as I improve</p>
      </div>

    </div>
  );
}

export default App;