import './App.css';

function Key({label, onClick}) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

function Display() {
  return (
    <>0</>
  );
}

function App() {
  const clickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
  }

  return (
    <div className='App'>
      <div className='Calc'>
        <div className='Disp'>
          <Display />
        </div>
        <div className='Buttons'>
          <Key label={7} onClick={clickHandler}/>
          <Key label={8} onClick={clickHandler}/>
          <Key label={9} onClick={clickHandler}/>
          <Key label={'÷'} onClick={clickHandler}/>
          <Key label={4} onClick={clickHandler}/>
          <Key label={5} onClick={clickHandler}/>
          <Key label={6} onClick={clickHandler}/>
          <Key label={'×'} onClick={clickHandler}/>
          <Key label={1} onClick={clickHandler}/>
          <Key label={2} onClick={clickHandler}/>
          <Key label={3} onClick={clickHandler}/>
          <Key label={'−'} onClick={clickHandler}/>
          <Key label={'C'} onClick={clickHandler}/>
          <Key label={0} onClick={clickHandler}/>
          <Key label={'='} onClick={clickHandler}/>
          <Key label={'+'} onClick={clickHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
