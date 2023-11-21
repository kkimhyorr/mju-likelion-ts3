import { PropsWithChildren } from "react";
import { styled } from "styled-components";

interface TabProps {
  isActive?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}
export const Tab = ({
  isActive = false,
  children,
  onClick,
}: PropsWithChildren<TabProps>) => {
  return (
    <Button $isActive={isActive} onClick={onClick}>
      {children}
    </Button>
  );
};

const Button = styled.button<{ $isActive: boolean }>`
  padding: ${({ $isActive }) => ($isActive ? " 22px 0 18px 0" : "22px 0")};
  border-bottom: ${({ $isActive, theme }) =>
    $isActive && `4px solid ${theme.color.green}`};
  ${({ theme }) => theme.typography.title1};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.color.green : theme.color.gray1};
  transition: all 0.2s ease-in-out;

  &:hover {
    padding: 22px 0 18px 0;
    color: ${({ theme }) => theme.color.green};
    border-bottom: 4px solid ${({ theme }) => theme.color.green};
  }
`;
