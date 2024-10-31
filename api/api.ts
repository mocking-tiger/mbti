import axios from "axios";

const BASE_URL = "https://learn.codeit.kr/api/";

export const instance = axios.create({
  timeout: 5000,
  baseURL: BASE_URL,
});

export async function getSurveys(limit: number) {
  const response = await instance.get(
    `${BASE_URL}color-surveys?limit=${limit}`
  );
  return response.data;
}

export async function sendSurvey(mbti: string, colorCode: string) {
  const response = await instance.post(`${BASE_URL}color-surveys`, {
    mbti,
    colorCode,
    password: "0000",
  });
  console.log(response);
  return response;
}
