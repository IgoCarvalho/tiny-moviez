import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled.aside`
  min-height: 100vh;
  width: 100%;
  max-width: 248px;
  padding: 48px 38px;
  padding-right: 0;
  border-right: 2px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
`;

export const SideNav = styled.nav`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
export const NavSection = styled.div``;

export const NavSectionTitle = styled.strong`
  color: ${({ theme }) => theme.colors.secondaryTitle};
  font-size: 18px;
  font-weight: 700;
`;

export const NavSectionLinksContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

type NavLinkProps = {
  $current?: boolean;
};

export const NavLink = styled(Link)<NavLinkProps>`
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  position: relative;
  transition: color 200ms;

  ${({ $current, theme }) =>
    $current &&
    css`
      color: ${theme.colors.primary};

      &::after {
        content: '';
        position: absolute;
        right: -2px;
        width: 2px;
        height: 42px;
        border-radius: 10px;
        background-color: ${theme.colors.primary};
      }
    `}
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SideBarFooter = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;
