import { useQuery } from "react-query";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export function useUsers() {
  return useQuery('users', async () => {
    const { data } = await api.get('/users');

    const users = data.users.map(({ id, name, email, createdAt }: User) => ({
      id,
      name,
      email,
      createdAt: new Date(createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }))

    return users;
  }, {
    staleTime: 1000 * 5
  });
}