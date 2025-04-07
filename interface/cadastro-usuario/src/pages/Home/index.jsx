import { useEffect, useState, useRef } from 'react';
import './style.css';
import Trash from '../../assets/trash-red-icon.svg';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="page-wrapper">
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        {isSidebarOpen && (
          <nav className="sidebar-nav">
            <a href="/" title="Cadastro de Usuários">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </a>
            <a href="/tabela" title="Tabela de Usuários">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h18v18H3z"></path>
                <path d="M21 9H3"></path>
                <path d="M9 21V3"></path>
              </svg>
            </a>
          </nav>
        )}
      </aside>
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
    </div>
  );
}

export default Home;