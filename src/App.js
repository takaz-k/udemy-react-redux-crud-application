import React from 'react';
import PropTypes from "prop-types"

export function App() {
  const profiles = [
    { "name": "takayoshi", "age": 29 },
    { "name": "marie", "age": "29" },
    { "name": "haruto" }
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}