export interface LoginRequest {
  username: string;
  password: string;
}

export const login = async (credentials: LoginRequest): Promise<string> => {
  const response = await fetch("http://localhost:5183/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("LOgin fallito");
  }

  const data = await response.json();
  return data.token; // JWT
};
