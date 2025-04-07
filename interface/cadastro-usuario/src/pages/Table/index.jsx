import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import api from '../../services/api';

function Table() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios');
    setUsers(usersFromApi.data);
  }

  async function deleteUsers() {
    try {
      await Promise.all(
        selectedUsers.map((userId) => api.delete(`/usuarios/${userId}`))
      );
      setSelectedUsers([]);
      getUsers();
    } catch (error) {
      console.error('Erro ao deletar usuários:', error);
    }
  }

  function handleSelectUser(userId) {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  }

  function handleExport() {
    const csvContent = [
      ['ID', 'Nome', 'Email', 'Idade'],
      ...users.map((user) => [
        user.id,
        user.name,
        user.email,
        user.age,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'usuarios.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#374151"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        {isSidebarOpen && (
          <nav className="sidebar-nav">
            <Link to="/" title="Cadastro de Usuários">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </Link>
            <Link to="/tabela" title="Tabela de Usuários">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3h18v18H3z"></path>
                <path d="M21 9H3"></path>
                <path d="M9 21V3"></path>
              </svg>
            </Link>
          </nav>
        )}
      </aside>
      <div className="container">
        <h1>Tabela de Usuários</h1>
        <div className="table-actions">
          <Link to="/" className="action-button create">
            Criar
          </Link>
          <button
            onClick={deleteUsers}
            className="action-button delete"
            disabled={selectedUsers.length === 0}
          >
            Excluir
          </button>
          <button onClick={handleExport} className="action-button export">
            Exportar
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers(users.map((user) => user.id));
                      } else {
                        setSelectedUsers([]);
                      }
                    }}
                    checked={
                      users.length > 0 && selectedUsers.length === users.length
                    }
                  />
                </th>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                    />
                  </td>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      onClick={async () => {
                        await api.delete(`/usuarios/${user.id}`);
                        getUsers();
                      }}
                      className="delete-button"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;