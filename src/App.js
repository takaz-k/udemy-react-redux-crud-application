import React from 'react';

function App() {
  const dom = <label htmlFor="bar">bar</label>;
  const input_dom = <input type="text" onChange={() => { console.log("Clicked!") }} />;
  return (
    <React.Fragment>
      {dom}
      {input_dom}
    </React.Fragment>
  );
}

export default App;
