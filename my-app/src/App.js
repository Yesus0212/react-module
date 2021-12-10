import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

const _users = [
  {
    id: 1,
    firstName: "Selene",
    lastName: "Chavez"
  },
  {
    id: 2,
    firstName: "Jesus",
    lastName: "Solis"
  },
  {
    id: 3,
    firstName: "Marco",
    lastName: "Fernandez"
  }
]


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // await fetch() "simulación de consulta a una BD"
    setTimeout(() => {
      const response = _users;
      setUsers(response);
    }, 3000);
  }, []);

  console.log(users);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Aquí pintamos todo lo que este en la variable users, forzosamente debemos cambiar las llaves despues del => por corchetes*/}        
        {users.map((user) => (
          <div key={user.id}>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
          </div>
        ))}   
        {/* {users.map((user) => {
          const _firstName = user.firstName.toUppserCase();
          return (
          <div key={user.id}>
            <h1>
              {_firstName} {user.lastName}
            </h1>
          </div>
          );
        })}   */}
      </header>
    </div>
  );
}

export default App;
