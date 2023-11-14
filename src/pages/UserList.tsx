import useSWR from "swr";

const fetchData = async (url: string) => {
  const response = await fetch(
    `https://simple-login-server-one.vercel.app${url}`
  );
  const data = await response.json();
  console.log();
  return data;
};

const UserList = () => {
  const { data, error } = useSWR("/api/users", fetchData);

  if (error) return <div>데이터를 불러오는 중 에러가 발생했습니다</div>;
  if (!data) return <div>데이터를 불러오는 중...</div>;

  return (
    <div>
      <h1>UserList</h1>
      <div>
        {data.data.users.map((user: any, index: any) => (
          <div key={index}>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
