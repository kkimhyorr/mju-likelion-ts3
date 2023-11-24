import useSWR from "swr";
import { GetFetcher } from "../API/GetFetcher";
import { styled } from "styled-components";
import BigLion from "../DS/icons/BigLion.svg";

interface UserForm {
  email: string;
  username: string;
}

const UserList = () => {
  const { data, error } = useSWR("/api/users", GetFetcher);

  if (error) return <div>데이터를 불러오는 중 에러가 발생했습니다</div>;
  if (!data) return <div>데이터를 불러오는 중...</div>;

  return (
    <Container>
      <BigLionImg src={BigLion} alt="BigLion" />
      <CardContainer>
        {data.data.users.map((user: UserForm, index: number) => (
          <Card key={index}>
            <EmailText>{user.email}</EmailText>
            <UsernameText>{user.username}</UsernameText>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default UserList;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  margin: 60px 0 10px 0;
`;

const BigLionImg = styled.img`
  display: flex;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 26px;
`;

const Card = styled.div`
  width: 1200px;
  padding: 14px 16px;
  box-shadow: 0px 0px 8px 0px #e5e8f0;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
`;

const EmailText = styled.p`
  color: ${({ theme }) => theme.color.gray2};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const UsernameText = styled.p`
  color: ${({ theme }) => theme.color.gray1};
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
`;
