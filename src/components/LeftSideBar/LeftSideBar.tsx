import Image from 'next/image';

import {
  HomeIcon,
  DiscoverIcon,
  CelebritiesIcon,
  AwardsIcon,
  RecentIcon,
  TopRatedIcon,
  DownloadedIcon,
  PlaylistsIcon,
  WatchListIcon,
  CompletedIcon,
  SettingsIcon,
  LogOutIcon,
} from '../icons';

import logoImg from '@/assets/images/logo.png';

import {
  Container,
  NavLink,
  NavSection,
  NavSectionLinksContainer,
  NavSectionTitle,
  SideNav,
  SideBarFooter,
} from './LeftSideBar.styles';

export function LeftSideBar() {
  return (
    <Container>
      <Image src={logoImg} width={70} alt="Tiny Moviez logo" priority />

      <SideNav>
        <NavSection>
          <NavSectionTitle>Menu</NavSectionTitle>

          <NavSectionLinksContainer>
            <NavLink href="/" $current>
              <HomeIcon />
              Home
            </NavLink>

            <NavLink href="/discover">
              <DiscoverIcon />
              Discover
            </NavLink>

            <NavLink href="/">
              <AwardsIcon />
              Awards
            </NavLink>

            <NavLink href="/">
              <CelebritiesIcon />
              Celebrities
            </NavLink>
          </NavSectionLinksContainer>
        </NavSection>

        <NavSection>
          <NavSectionTitle>Library</NavSectionTitle>

          <NavSectionLinksContainer>
            <NavLink href="/">
              <RecentIcon />
              Recent
            </NavLink>

            <NavLink href="/">
              <TopRatedIcon />
              Top Rated
            </NavLink>

            <NavLink href="/">
              <DownloadedIcon />
              Downloaded
            </NavLink>

            <NavLink href="/">
              <PlaylistsIcon />
              Playlists
            </NavLink>

            <NavLink href="/">
              <WatchListIcon />
              Watchlist
            </NavLink>

            <NavLink href="/">
              <CompletedIcon />
              Completed
            </NavLink>
          </NavSectionLinksContainer>
        </NavSection>
      </SideNav>
      <SideBarFooter>
        <NavSection>
          <NavSectionTitle>General</NavSectionTitle>

          <NavSectionLinksContainer>
            <NavLink href="/">
              <SettingsIcon />
              Settings
            </NavLink>

            <NavLink href="/">
              <LogOutIcon />
              Log Out
            </NavLink>
          </NavSectionLinksContainer>
        </NavSection>
      </SideBarFooter>
    </Container>
  );
}
