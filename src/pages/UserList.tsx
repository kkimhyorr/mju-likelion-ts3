import useSWR from "swr";

const fetchData = async (url: string) => {
  const response = await fetch(
    `http://ec2-13-125-247-33.ap-northeast-2.compute.amazonaws.com:3000${url}`
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
      <h1>API에서 가져온 데이터</h1>
      <div>{JSON.stringify(data.data.users)}</div>
    </div>
  );
};

export default UserList;
