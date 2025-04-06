import './style.css';
import Trash from '../../assets/trash.svg';

// Renomeei o componente de "Home" para "UserManagement" para refletir melhor o propósito
function UserManagement() {
  // Lista de usuários (ajustei os nomes das propriedades para corresponder ao que está sendo usado no map)
  const users = [
    {
      id: '1',
      name: 'Lucas', // Alterei "nome" para "name" para corresponder ao uso em user.name
      age: '22',    // Alterei "idade" para "age" para corresponder ao uso em user.age
      email: 'cas@gmail.com',
    },
    {
      id: '5',
      name: 'Joao', // Alterei "nome" para "name"
      age: '18',    // Alterei "idade" para "age"
      email: 'joaope@gmail.com',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Formulário para cadastro de usuários */}
      <form className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold mb-4">Cadastro de Usuários</h1>
        <div className="mb-4">
          <input
            name="name"
            type="text"
            placeholder="Nome"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            name="age"
            type="number"
            placeholder="Idade"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>

      {/* Lista de usuários */}
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id} // Adicionei a prop "key" para evitar warnings no React
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <div>
              <p className="text-lg">
                <span className="font-semibold">Nome:</span> {user.name}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Idade:</span> {user.age}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
            </div>
            <button className="text-red-600 hover:text-red-800">
              <img src={Trash} alt="Deletar" className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserManagement;