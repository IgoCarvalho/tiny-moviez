import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled.main`
  flex: 1;
  max-width: 906px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 38px 68px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 46px;
  align-self: stretch;
  align-items: center;
`;

type HeaderNavLinkProps = {
  $current?: boolean;
};

export const HeaderNavLink = styled(Link)<HeaderNavLinkProps>`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  ${({ $current, theme }) =>
    $current &&
    css`
      color: ${theme.colors.primary};

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background-color: ${theme.colors.primary};
      }
    `}
`;
