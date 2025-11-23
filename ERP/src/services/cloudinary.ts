const CLOUD_NAME = "dfs5i76if";
const UPLOAD_PRESET = "autotop_upload"; // O nome exato que você escreveu no site

export const uploadImageToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Erro ao fazer upload");
    }

    // Retorna o link seguro da imagem (https)
    return data.secure_url; 
  } catch (error) {
    console.error("Erro no upload:", error);
    throw error;
  }
};