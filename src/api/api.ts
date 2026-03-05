import type { User, post } from "../types/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}

export async function fetchPosts(UserId: number): Promise<post[]> {
    const response = await fetch(`${BASE_URL}/posts?userId=${UserId}`);

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    return response.json();
}
