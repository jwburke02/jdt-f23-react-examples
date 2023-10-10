import React from 'react'
import ReactDOM from 'react-dom/client'

const Counter = (props) => {
  // when setVariable is called, react will update the state and rerender any relying components/tags
  const [count, setCount] = React.useState(0);
  const [textColor, setTextColor] = React.useState("black");

  // setColor based on counter value
  const setColorFromValue = (value) => {
    if (value == 0) {
      setTextColor("black");
    }
    if (value > 0 && value < 10) {
      setTextColor("lightgreen");
    }
    if (value >= 10) {
      setTextColor("green");
    }
    if (value < 0 && value > -10) {
      setTextColor("orange");
    }
    if (value <= -10) {
      setTextColor("red");
    }
  }

  // simple increment + decrement function
  const handleIncrement = () => {
    setColorFromValue(count + 1);
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setColorFromValue(count - 1);
    setCount(count - 1);
  }

  // various stylings
  const outerDivStyle = { // vertical column of headers and button group
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: '320px',
    backgroundColor: 'whitesmoke',
    padding: '30px',
    borderRadius: '10px',
    border: '4px solid',
    margin: '0 auto' // centers the div on the page
  }

  const innerDivStyle = { // horizontal row of buttons
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '320px'
  }

  const buttonStyle = { // consistent styling for buttons
    width: '80px',
    height: '30px',
    borderRadius: '5px',
    border: '2px dashed',
    backgroundColor: "pink"
  }

  // HTML/JSX that is returned from this component
  return (
    <>
      <div style={outerDivStyle} className='counterUIContainer'>
        <h1>Counter Component!</h1>
        <h2 style={{ color: textColor }}>{count}</h2>
        <div style={innerDivStyle} className='counterButtonContainer'>
          <button style={buttonStyle} onClick={() => handleIncrement()}>+ 1</button>
          <button style={buttonStyle} onClick={() => handleDecrement()}>- 1</button>
          <button style={buttonStyle} onClick={() => { setCount(0); setTextColor("black"); }}>CLEAR</button>
        </div>
      </div>
    </>
  )
}

const App = (props) => {
  return (
    <>
      <Counter />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
