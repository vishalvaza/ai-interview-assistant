import axios from "axios";

const API_URL = "http://localhost:8000";

export async function uploadResume(
  file: File
) {

  const formData = new FormData();

  formData.append("file", file);

  const response = await axios.post(
    `${API_URL}/api/resume/upload`,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
}

export async function analyzeResume(
  text: string
) {

  const response = await axios.post(
    `${API_URL}/api/resume/analyze`,
    {
      text,
    }
  );

  return response.data;
}

export async function generateBlueprint(
  analysis: any
) {

  const response = await axios.post(
    `${API_URL}/api/resume/blueprint`,
    {
      analysis,
    }
  );

  return response.data;
}