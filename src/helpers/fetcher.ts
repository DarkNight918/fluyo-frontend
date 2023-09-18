// change with your ip address
const baseURL = "http://192.168.1.123:5000/v1";

const GET = async (endpoint: string, token?: string) => {
  const response = await fetch(`${baseURL}${endpoint}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    return;
  }

  return data;
};

const fetcher = {
  GET,
};

export default fetcher;
