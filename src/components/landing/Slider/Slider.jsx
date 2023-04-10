import { useContext } from "react";
import { NftCollectionContext } from "../../../context/context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import {
  NftInfoText,
  NftName,
  NftSectionHeader,
  NftSubDetail,
  NftSubDetailItem,
  SliderContainer,
  SliderDetailContainer,
  SliderItem,
  SwiperStyle,
} from "./SliderElements";

const Slider = () => {
  const { nftCollection, setNftCollection } = useContext(NftCollectionContext);
  return (
    <>
      <SliderContainer>
        <NftSectionHeader>Trending NFTs</NftSectionHeader>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          spaceBetween={100}
          className="mySwiper"
          style={SwiperStyle}
        >
          {nftCollection &&
            nftCollection.slice(0, 9).map((element, index) => {
              const name = element.creatorName.split(" ")[0];
              return (
                <>
                  <SwiperSlide key={"sliderItem" + index}>
                    <SliderItem bg={element.ImageURL}>
                      <SliderDetailContainer>
                        <NftName>{element.NftName}</NftName>
                        <NftSubDetail>
                          <NftSubDetailItem>
                            <NftInfoText>
                              <b style={{ fontSize: "0.9rem" }}>{"By:- "}</b>
                              {name}
                            </NftInfoText>
                          </NftSubDetailItem>
                          <NftSubDetailItem
                            style={{ border: "0.5px solid black" }}
                          ></NftSubDetailItem>
                          <NftSubDetailItem style={{ fontSize: "0.9rem" }}>
                            {element.tradeCurrency}&nbsp; - &nbsp;
                            <b style={{ fontSize: "0.9rem" }}>
                              {element.currentBid}
                            </b>
                          </NftSubDetailItem>
                        </NftSubDetail>
                      </SliderDetailContainer>
                    </SliderItem>
                  </SwiperSlide>
                </>
              );
            })}
        </Swiper>
      </SliderContainer>
    </>
  );
};

export default Slider;
