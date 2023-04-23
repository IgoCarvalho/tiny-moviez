import { LeftSideBar } from '@/components/LeftSideBar/LeftSideBar';

import { Container } from './HomeLayout.styles';
import { MainContent } from '@/components/MainContent/MainContent';

export function HomeLayout() {
  return (
    <Container>
      <LeftSideBar />
      <MainContent />
    </Container>
  );
}
