interface PostUserForm {
  email: string;
  password: string;
  username: string;
}

export const PostFetcher = async (
  url: string,
  { arg }: { arg: PostUserForm }
) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  console.log(response);
  return response;
};
