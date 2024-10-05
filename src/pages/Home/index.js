import React, { useState } from 'react';
import avatar from '../../assets/images/avatar.png';
import background from '../../assets/images/background.jpg';
import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import './styles.css';

function App() {
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => data);
    
    console.log(userData);

    const repoData = await fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => data);
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} alt="Background" className="background" />
        <div className="info">
          <div className="search">
            <input
              name="username"
              type="text"
              placeholder="@username"
              value={username}
              onChange={handleUsername} />
            <button onClick={handleGetData}>Find</button>
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
            <h4 className="repository">Repositories</h4>
            {repositories.map((repository) => (
              <ItemList
                key={repository.id}
                title={repository.name}
                description={repository.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
