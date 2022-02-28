import { useQuery } from "react-query";
import { api } from "../services/api";
import { formatDate } from "../util/formatDate";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  users: User[],
  totalCount: number
}

interface UsersData {
  users: User[]
}

export async function getUsers(currentPage: number = 1): Promise<GetUsersResponse> {
  const { data, headers } = await api.get<UsersData>('/users', {
    params: {
      page: currentPage
    }
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map(({ id, name, email, createdAt }) => ({
    id,
    name,
    email,
    createdAt: formatDate(createdAt)
  }))

  return { users, totalCount };

}

export function useUsers(currentPage: number) {
  return useQuery(['users', currentPage], () => getUsers(currentPage), {
    staleTime: 1000 * 5 // 5 seconds
  })
}