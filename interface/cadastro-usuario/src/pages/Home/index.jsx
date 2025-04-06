import { useEffect, useState, useRef } from 'react';
import './style.css';
import Trash from '../../assets/trash-red-icon.svg';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios');
    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    setShowModal(false);
    setUserToDelete(null);
    getUsers();
  }

  function handleDeleteClick(user) {
    setUserToDelete(user);
    setShowModal(true);
  }

  function handleCancel() {
    setShowModal(false);
    setUserToDelete(null);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro usuarios</h1>
        <input name="nome" type="text" placeholder="Nome" ref={inputName} />
        <input name="idade" type="number" placeholder="Idade" ref={inputAge} />
        <input name="email" type="email" placeholder="Email" ref={inputEmail} />
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
            <button onClick={() => handleDeleteClick(user)}>
              <img src={Trash} alt="trash" />
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirmar Exclusão</h2>
            <p>
              Deseja realmente excluir o usuário <strong>{userToDelete?.name}</strong>?
            </p>
            <div className="modal-buttons">
              <button className="modal-button confirm" onClick={() => deleteUsers(userToDelete.id)}>
                Sim
              </button>
              <button className="modal-button cancel" onClick={handleCancel}>
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;