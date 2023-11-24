export const GetFetcher = async (url: string) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`);
  const data = await response.json();
  return data;
};
