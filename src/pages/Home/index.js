import avatar from '../../assets/images/avatar.png';
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
          <div className="search">
            <input name="username" type="text" placeholder="@username" />
            <button>Find</button>
          </div>
          <div className="profile">
            <img src={avatar} className="avatar" alt="Avatar" />
            <div>
              <h3>Username</h3>
              <span>@username</span>
              <p>Description</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>Repositories</h3>
            <ul>
              <li>
                <a href="/#">Repository 1</a>
              </li>
              <li>
                <a href="/#">Repository 2</a>
              </li>
              <li>
                <a href="/#">Repository 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
