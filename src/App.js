import React, { Component } from 'react';

export function App() {
  const dom = <label htmlFor="bar">bar</label>;
  const input_dom = <input type="text" onChange={() => { console.log("Clicked!") }} />;
  return (
    <React.Fragment>
      {dom}
      {input_dom}
    </React.Fragment>
  );
}

export const AppFunc = () => {
  const dom = <label htmlFor="func">func</label>;
  const input_dom = <input type="text" onChange={() => { console.log("Clicked!") }} />;
  return (
    <React.Fragment>
      {dom}
      {input_dom}
    </React.Fragment>
  );
}

export class AppClass extends Component {
  render() {
    const dom = <label htmlFor="class">class</label>;
    const input_dom = <input type="text" onChange={() => { console.log("Clicked!") }} />;
    return (
      <React.Fragment>
        {dom}
        {input_dom}
      </React.Fragment>
    );
  }
}