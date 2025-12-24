//Styles
import { Container } from './styles'

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

//Data
import { images } from "../../data/images";

export function SwiperCarousel() {
    return (
        <Container>
            <Swiper
                onSwiper={(swiper) => swiper.autoplay.start()}
                modules={[Autoplay, FreeMode]}
                slidesPerView="auto"
                spaceBetween={24}
                loop={true}
                speed={6000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                freeMode={true}
                freeModeMomentum={false}
                grabCursor={false}
                allowTouchMove={false}   // 👈 impede clique/drag
                simulateTouch={false}   // 👈 impede interação por mouse
            >
                {images.map((img, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ width: "260px" }} // largura fixa das imagens
                    >
                        <img
                            src={img.src}
                            alt="Atividade"
                            style={{
                                width: "100%",
                                height: "190px",
                                borderRadius: "8px",
                                display: "block",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}