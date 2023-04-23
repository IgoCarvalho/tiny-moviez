import { SearchInput } from '../SearchInput/SearchInput';
import { SliderShow } from '../SliderShow/SliderShow';

import {
  Container,
  HeaderContainer,
  HeaderNav,
  HeaderNavLink,
} from './MainContent.styles';

export function MainContent() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderNav>
          <HeaderNavLink href="/">Movies</HeaderNavLink>
          <HeaderNavLink href="/" $current>
            TV Shows
          </HeaderNavLink>
          <HeaderNavLink href="/">Anime</HeaderNavLink>
        </HeaderNav>

        <SearchInput />
      </HeaderContainer>

      <SliderShow />
    </Container>
  );
}
