import { styled } from "styled-components";
import TabBar, { Tab } from "./TabBar";
import { ReactComponent as LogoSvg } from "../DS/icons/Lion.svg";

interface HeaderProps {
  onClickLogo: () => void;
  tabs: Tab[];
}

const Header = ({ onClickLogo, tabs }: HeaderProps) => {
  return (
    <Container>
      <InnerContainer>
        <Logo onClick={onClickLogo} />
        <TabBar tabs={tabs} />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  width: 100%;
`;

const Logo = styled(LogoSvg)`
  cursor: pointer;
`;

export default Header;
