import { EditButtomIcon, DeleteButtomIcon, CreateButtonIcon } from './assets/icons'

type User = {
  id: number;
  nome: string;
  email: string;
  rua: string;
  numero: number;
  bairro: string;
  complemento: string;
  cidade: string;
  estado: string;
  cep: string;
  status: string;
};



export default function Users({users, createUser, updateUser, deleteUser}: {users?: User[],  createUser?: () => {}, updateUser?: (data: any) => {}, deleteUser?: (data: any) => {}}) {
  
  const create = async () => {
    createUser && createUser()
  }

  const update = async (data: any) => {
    updateUser && updateUser(data)
  }

  const drop = async (data: any) => {
    deleteUser && deleteUser(data)
  }

  return (
    <div className='flex flex-col items-start'>
      <div className='flex flex-row bg-gray cursor-pointer mb-5' onClick={() => create()}><CreateButtonIcon />Criar Usuario</div>
      <table className="min-w-full border border-gray-900">
        <thead className="bg-gray-300">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Nome</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Rua</th>
            <th className="px-4 py-2 border">Número</th>
            <th className="px-4 py-2 border">Bairro</th>
            <th className="px-4 py-2 border">Complemento</th>
            <th className="px-4 py-2 border">Cidade</th>
            <th className="px-4 py-2 border">Estado</th>
            <th className="px-4 py-2 border">CEP</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Editar</th>
            <th className="px-4 py-2 border">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border">{user.id}</td>
              <td className="px-4 py-2 border">{user.nome}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.rua}</td>
              <td className="px-4 py-2 border">{user.numero}</td>
              <td className="px-4 py-2 border">{user.bairro}</td>
              <td className="px-4 py-2 border">{user.complemento}</td>
              <td className="px-4 py-2 border">{user.cidade}</td>
              <td className="px-4 py-2 border">{user.estado}</td>
              <td className="px-4 py-2 border">{user.cep}</td>
              <td className="px-4 py-2 border">{user.status}</td>
              <td className="px-4 py-2 border">
                <div onClick={() => update(user)} className='cursor-pointer'><EditButtomIcon /></div>
              </td>
              <td className="px-4 py-2 border">
                <div onClick={() => drop(user)} className='cursor-pointer'><DeleteButtomIcon /></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

