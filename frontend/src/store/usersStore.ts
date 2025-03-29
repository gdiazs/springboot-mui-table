// src/store/usersStore.ts
import { create } from 'zustand';
import { User } from '../types/user';
import { fetchUsers, UsersResponse } from '../services/userService';

interface UserState {
  users: User[];
  totalElements: number;
  page: number;
  pageSize: number;
  sortField: string;
  sortOrder: string;
  fetchUsers: (
    page?: number,
    pageSize?: number,
    sortField?: string,
    sortOrder?: string
  ) => Promise<void>;
  setPagination: (page: number, pageSize: number) => void;
  setSorting: (sortField: string, sortOrder: string) => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [],
  totalElements: 0,
  page: 0,
  pageSize: 10,
  sortField: 'firstName',
  sortOrder: 'asc',
  fetchUsers: async (
    page = get().page,
    pageSize = get().pageSize,
    sortField = get().sortField,
    sortOrder = get().sortOrder
  ) => {
    try {
      const data: UsersResponse = await fetchUsers(page, pageSize, sortField, sortOrder);
      set({ users: data.content, totalElements: data.totalElements, page, pageSize, sortField, sortOrder });
    } catch (error) {
      console.error('Error fetching users', error);
    }
  },
  setPagination: (page: number, pageSize: number) => set({ page, pageSize }),
  setSorting: (sortField: string, sortOrder: string) => set({ sortField, sortOrder }),
}));
