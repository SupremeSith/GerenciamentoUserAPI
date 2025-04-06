import './style.css';
import Trash from '../../assets/trash.svg';

function Home() {
  const users = [
    {
      id: '234567',
      age: 23,
      name: 'John Doe',
      email: 'werty@gmail.com'
    },
    {
      id: '7654567',
      age: 25,
      name: 'JohnPedroo',
      email: 'joaowoof@gmail.com'
    },
    {
      id: '000875678',
      age: 14,
      name: 'Pedro',
      email: 'pedrojpp@gmail.com'
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro usuarios</h1>
        <input name="nome" type="text" placeholder="Nome" />
        <input name="idade" type="number" placeholder="Idade" />
        <input name="email" type="email" placeholder="Email" />
        <button type="button">Cadastrar</button>
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