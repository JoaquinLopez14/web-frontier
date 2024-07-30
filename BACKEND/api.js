const API_URL = import.meta.env.VITE_API_URL;

export async function fetchUsers() {
  try {
    const response = await fetch(`${API_URL}user_data`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user_data", error);
    throw error;
  }
}

export async function fetchLastUpdate() {
  try {
    const response = await axios.get(`${API_URL}last_update`);
    return response.data;
  } catch (error) {
    console.error("Error fetching last update:", error);
    throw error;
  }
}
