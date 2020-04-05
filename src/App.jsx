import React, {useState} from 'react';
import Bar, {TOTO} from './components/Bar.jsx';
import Foo from './components/Foo.jsx'
const age = 23;

function App() {

  const [x, setX] = useState(66);

  function increment(inc = 1){
    setX(x + inc)
  }
  return (
    <>
      <div className="container">
      <Bar name="Fifi" age={x} />
      <Foo y="55" incrementHandler={increment}/>
      </div>
    </>
  );
}

export default App;
