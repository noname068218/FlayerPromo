export interface GalleryImage {
  id: number;
  fileName: string;
  title?: string;
  data: string;
}

export const uploadGalleryImage = async (
  file: File,
  title: string
): Promise<GalleryImage> => {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("file", file);
  formData.append("title", title);
  console.log("TOKEN:", token);
  const response = await fetch("http://localhost:5183/api/gallery/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Errore nel caricamento dell'immagine");
  }
  return response.json();
};

export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  const response = await fetch("http://localhost:5183/api/gallery");
  if (!response.ok) {
    throw new Error("Errore nel caricamento della galleria");
  }
  return response.json();
};
