import { useQuery } from "react-query";
import { api } from "../services/api";
import { formatDate } from "../util/formatDate";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface UsersData {
  users: User[]
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get<UsersData>('/users');

  const users = data.users.map(({ id, name, email, createdAt }) => ({
    id,
    name,
    email,
    createdAt: formatDate(createdAt)
  }))

  return users;

}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 // 5 seconds
  })
}