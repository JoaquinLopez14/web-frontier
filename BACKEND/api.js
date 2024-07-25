const API_URL = import.meta.env.VITE_API_URL;

export async function fetchUsers() {
  try {
    const response = await fetch(`${API_URL}user_data`);
    if (!response.ok) {
      throw new error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user_data", error);
    throw error;
  }
}
