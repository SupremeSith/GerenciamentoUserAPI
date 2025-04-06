import { useEffect, useState, useRef } from 'react';
import './style.css';
import Trash from '../../assets/trash.svg';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()



  async function getUsers() {
    const usersFromApi = await api.get('/usuarios');
    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post('/usuarios',
      {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value
      }
    )
  }
  


  useEffect(() => {
    getUsers();
  }
    , []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro usuarios</h1>
        <input name="nome" type="text" placeholder="Nome" ref={inputName} />
        <input name="idade" type="number" placeholder="Idade" ref={inputAge} />
        <input name="email" type="email" placeholder="Email" ref={inputEmail}/>
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>Nome: {user.name}</p>
              <p>Idade: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
            <button>
              <img src={Trash} alt="trash" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;