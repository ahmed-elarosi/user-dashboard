import type { User, post } from "../types/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}
