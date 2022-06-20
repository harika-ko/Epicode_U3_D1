import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Components/ButtonComponent';
import ImageComponent from './Components/ImageComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
  </p>*/}
        <ImageComponent image="https://i.pinimg.com/originals/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5.jpg" alternate="Beautiful Nature Image"
          pictureheight="500px" picturewidth="600px" />
        {/*} <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
</a>*/}
        <ButtonComponent button="Click Here" />

      </header>
    </div>
  );
}

export default App;
