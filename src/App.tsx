// App.js
import React from 'react';
import './App.css';
import config from './config';

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <img src={`${config.assetPath}/github-mark-white.png`} alt=""/>
      </div>
      <div className="Spacing-15"></div>
      <div className="TopText">
        <h1>
          Graphic designer beyond colors
        </h1>
        <h2>
          (I might be colorblind)
        </h2>
      </div>
      <div className="AboutMe">
        <h2>
          Second year Engineering Student
        </h2>
        <h2>
          @ Umeå University
        </h2>
        <h2>
          Interaktion & Design
        </h2>
      </div>
      <div className="Spacing-25"></div>
      <div className="Goals">
        <h1>Goals</h1>
        <h2>
          My goals are to make design that is accessible to all,
        </h2>
        <h2>
          with my focus on those like myself who are colorblind.
        </h2>
        <div className="Spacing-10"></div>
        <p>
          Being colorblind while working with webdevelopment has it's challenges,
        </p>
        <p>
          but that also allows me to produce designs with that challenge in mind.
        </p>
        <div className="Spacing-5"></div>
        <p>
          A lot of websites might designs that fit the normal person,
        </p>
        <p>
          but with colorblindness that can be a struggle, as we don't see color the same way.
        </p>
        <div className="Spacing-5"></div>
        <p>
          So what am I getting at here, well mostly that a lot of design does not take into account
        </p>
        <p>
          other visual impairments than bad eyeseight. This problem is exactly what I'm trying to solve
        </p>
        <div className="Spacing-5"></div>
        <p>
          MAKING DESIGN THAT GOES BEYOND COLORS
        </p>
      </div>
      <div className="Footer"></div>
    </div>
  );
}

export default App;