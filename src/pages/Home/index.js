import background from '../../assets/images/background.jpg';
import Header from '../../components/Header';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} alt="Background" className="background" />
        <div className="info">
          <div>
            <input name="username" type="text" placeholder="@username" />
            <button>Find</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
