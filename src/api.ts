const BASE_URL = "/api";

const fetchAsJson = async (url: RequestInfo | URL, init?: RequestInit) => {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

const API = {
  fetchProducts: async () => await fetchAsJson(`${BASE_URL}/products`),
};

export default API;
