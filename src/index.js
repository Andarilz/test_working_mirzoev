import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {

const [state, setState] = useState(1)

const [flag, setFlag] = useState(false)

const styles = {
  padding: '5px 50px', 
  backgroundColor: 'lightBlue', 
  borderRadius: '10%', 
  color: 'green',
  marginRight: '50px'
}

const addintionalContent = (
  <div>
    <button style={styles} onClick={() => setState(1)}>1</button>
    {state === 2 ? null : <button style={{...styles, backgroundColor: 'lightGreen', padding: '10px 40px'}} onClick={() => setState(2)}>2</button>}
    {state === 3 ? null : <button style={{...styles, backgroundColor: 'lightRed'}} onClick={() => setState(3)}>3</button>}
  </div>
)

const changeFlag = flag => {
  setFlag(!flag)
  setState(1)
}

  return (
    <div style={{margin: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', 'justify-content': 'space-around', height:500}}>
      <button style={styles} onClick={() => changeFlag(flag)}>{state}</button>
      {flag && addintionalContent}
    </div>
  )
}

ReactDOM.render(
  <App />
  ,document.getElementById('root')
);
