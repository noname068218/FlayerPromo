export interface Message {
  id: number;
  nome: string;
  email: string;
  telefono: string;
  servizio: string;
  messaggio?: string;
  data: string;
}

export const fetchMessages = async (): Promise<Message[]> => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:5183/api/messages", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Errore nel caricamento dei messaggi");
  }

  return response.json();
};
