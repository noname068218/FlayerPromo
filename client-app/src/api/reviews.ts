export interface Review {
  id: number;
  nome: string;
  commento: string;
  valutazione: number;
  foto?: string;
}

export const getReviews = async (): Promise<Review[]> => {
  const response = await fetch("http://localhost:5183/api/reviews");
  return response.json();
};
