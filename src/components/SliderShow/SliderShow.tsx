import Image from 'next/image';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NextIcon, PlusIcon, PreviousIcon } from '../icons';

import {
  Container,
  FooterButton,
  NavigationButtonsContainer,
  SliderContainer,
  SliderItem,
  SliderNavigationButton,
  SliderOverlay,
  SliderOverlayFooter,
  SliderPaginationContainer,
} from './SliderShow.styles';

export function SliderShow() {
  return (
    <Container>
      <SliderContainer>
        <Swiper
          slidesPerView={1}
          loop
          pagination={{
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <SliderItem>
              <p>The Crown</p>
              <Image
                src="/images/movie-preview.jpg"
                width="770"
                height={350}
                alt="Movie Preview"
                priority
              />
            </SliderItem>
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem>
              <p>Rick and Morty</p>
              <Image
                src="/images/movie-preview-2.jpg"
                width="770"
                height={350}
                alt="Movie Preview"
                priority
              />
            </SliderItem>
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem>
              <p>Loki</p>
              <Image
                src="/images/movie-preview-3.jpg"
                width="770"
                height={350}
                alt="Movie Preview"
                priority
              />
            </SliderItem>
          </SwiperSlide>
        </Swiper>

        <SliderOverlay>
          <NavigationButtonsContainer>
            <SliderNavigationButton
              type="button"
              className="swiper-button-prev"
            >
              <PreviousIcon />
            </SliderNavigationButton>
            <SliderNavigationButton
              type="button"
              className="swiper-button-next"
            >
              <NextIcon />
            </SliderNavigationButton>
          </NavigationButtonsContainer>

          <SliderOverlayFooter>
            <FooterButton variant="secondary">
              <PlusIcon />
              Watchlist
            </FooterButton>

            <SliderPaginationContainer className="swiper-pagination" />

            <FooterButton horizontalSpacing={47}>Watch Now</FooterButton>
          </SliderOverlayFooter>
        </SliderOverlay>
      </SliderContainer>
    </Container>
  );
}
