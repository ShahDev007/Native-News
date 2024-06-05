import axios from "axios";

const api = axios.create({ baseURL: "https://newsapi.org/v2" });

export async function getNewsByCategory(category) {
  const res = await api.get(
    `/everything?q=${category}&apiKey=fd2ac018fe914a8582327620a5565928`
  );
  console.log("Res is upper", res.data);
  return res.data;
}

export async function getTopNewsByCountry(country) {
  const res = await api.get(
    `/top-headlines?country=${country}&apiKey=fd2ac018fe914a8582327620a5565928`
  );
  console.log("Res is lower", res.data);
  return res.data;
}

export async function getNewsByQuery(query) {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=fd2ac018fe914a8582327620a5565928`
  );
  return response.data;
}