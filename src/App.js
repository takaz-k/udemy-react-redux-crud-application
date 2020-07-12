import React, { Component } from 'react';

export function App() {
  const profiles = [
    { "name": "takayoshi", "age": 29 },
    { "name": "marie", "age": 29 },
    { "name": "haruto", "age": 0 }
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </React.Fragment>
  );
}

const User = (props) => {
  const dom = <p>I'm {props.name}, {props.age} years old</p>;
  return dom;
}
