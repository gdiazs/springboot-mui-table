// src/services/userService.ts
import { User } from "../types/user";

const BASE_URL = "";

export interface UsersResponse {
    content: User[];
    totalElements: number;
}

export async function fetchUsers(
    page: number = 0,
    pageSize: number = 10,
    sortField: string = "email",
    sortOrder: string = "desc"
): Promise<UsersResponse> {
    const url = `${BASE_URL}/api/users?pageNumber=${page}&pageSize=${pageSize}&sortField=${sortField}&sortOrder=${sortOrder}`;
    const response = await fetch(url);
    try {
        return await response.json();
    } catch (err) {
        return { content: [], totalElements: 0 };
    }
}
