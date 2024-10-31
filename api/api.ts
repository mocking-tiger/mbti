import axios from "axios";

const BASE_URL = "https://learn.codeit.kr/api/";

type ErrorType = {
  response: {
    data: string;
    status: number;
  };
};

export const instance = axios.create({
  timeout: 5000,
  baseURL: BASE_URL,
});

export async function getSurveys(limit: number) {
  try {
    const response = await instance.get(
      `${BASE_URL}color-surveys?limit=${limit}`
    );
    return response.data;
  } catch (e) {
    const Error = e as ErrorType;
    alert(Error.response.data);
  }
}

export async function sendSurvey(mbti: string, colorCode: string) {
  try {
    const response = await instance.post(`${BASE_URL}color-surveys`, {
      mbti,
      colorCode,
      password: "1234",
    });
    console.log(response);
    return response;
  } catch (e) {
    const Error = e as ErrorType;
    alert(Error.response.data);
  }
}
