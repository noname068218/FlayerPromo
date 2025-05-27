export interface Message {
  nome: string;
  email: string;
  telefono: string;
  servizio: string;
  messaggio?: string;
}

export const sendMessage = async (message: Message) => {
  const response = await fetch("http://localhost:5183/api/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    throw new Error("Errore nell'invio del messaggio");
  }

  return response.json();
};

export const deleteMessage = async (id: number) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`http://localhost:5183/api/messages/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Errore nella cancellazione del messaggio");
};
