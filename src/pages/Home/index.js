import React, { useEffect, useState } from 'react';
import background from '../../assets/images/background.jpg';
import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import './styles.css';

function App() {
  const token = process.env.GITHUB_TOKEN;
  const [username, setUsername] = useState('kelsonbatista');
  const [currentUser, setCurrentUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: {token},
      },
    })
      .then((response) => response.json())
      .then((data) => data);
    
    setCurrentUser(userData);

    const repoData = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: {token},
      },
    })
      .then((response) => response.json())
      .then((data) => data);

    setRepositories(repoData);
  }

  useEffect(() => {
    handleGetData();
  }, []);

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
            {currentUser ? (
              <>
                <img src={currentUser.avatar_url} className="avatar" alt="Avatar" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </>
            ): <h3>User not found</h3>}
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
