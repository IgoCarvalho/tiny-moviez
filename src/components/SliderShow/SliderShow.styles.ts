import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #333;
  border-radius: 20px;
  overflow: hidden;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
`;

export const SliderOverlay = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SliderItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.previewOverlay};
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  p {
    font-size: 48px;
    font-weight: 800;
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 20;
  }

  img {
    object-fit: cover;
    object-position: center;
  }
`;

export const NavigationButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SliderNavigationButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryButton};
    color: ${theme.colors.text};
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.border};
    backdrop-filter: blur(5px);
    z-index: 10;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  `}
`;

export const SliderOverlayFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type FooterButtonProps = {
  variant?: 'primary' | 'secondary';
  horizontalSpacing?: number;
};

export const FooterButton = styled.button<FooterButtonProps>`
  ${({ theme, variant = 'primary', horizontalSpacing }) => css`
    padding: 20px 25px;
    font-size: 18px;
    font-weight: 800;
    border: none;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    z-index: 10;

    ${variant === 'primary'
      ? css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.background};
        `
      : css`
          background-color: ${theme.colors.secondaryButton};
          color: ${theme.colors.text};
          backdrop-filter: blur(5px);
        `}

    ${horizontalSpacing &&
    css`
      padding-left: ${horizontalSpacing}px;
      padding-right: ${horizontalSpacing}px;
    `}

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  `}
`;

export const SliderPaginationContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryButton};
    display: flex;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 5px;
    backdrop-filter: blur(5px);
    z-index: 10;

    span {
      width: 10px;
      height: 10px;
      background-color: ${theme.colors.text};
      border-radius: 10px;

      &.swiper-pagination-bullet-active {
        background-color: ${theme.colors.primary};
      }
    }
  `}
`;
