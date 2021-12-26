import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className='wrapper'>
    <h1 className='mainHeader'>Hello World</h1>
    <h2 className='secondaryHeader'>Hello Eduweb</h2>
  </div>
)

ReactDOM.render(
<App/>,
  document.getElementById('root')
);

