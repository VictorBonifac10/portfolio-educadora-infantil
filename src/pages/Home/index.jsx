import { Header } from "../../components/Header";
import { LinkButton } from "../../components/LinkButton";
import { contact } from "../../data/contact";
import { images } from "../../data/images";

import { TopContainer, Banner, GradientEffect, Main, AboutContainer, AboutContent, LearnContainer, LearnContent, PhraseContainer } from "./styles"

import banner from "../../assets/banner.jpg"
import person from "../../assets/person.png"
import about from "../../assets/about.png"
import { Cards, Footer, Title } from "../../components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

export function Home() {

    const text = "Nubia Carraro";

    return (
        <>
            <Header />
            <TopContainer>
                <img id="person" src={person} alt="Educadora Infantil" />
                <Banner>
                    <img src={banner} alt="Brinquedos Infantis" />
                    <div id="mask"></div>
                    <section id="firstContent">
                        <div>
                            <h1 className="jump">
                                {text.split("").map((char, i) =>
                                    char === " " ? (
                                        <span key={i} className="space">
                                            &nbsp;
                                        </span>
                                    ) : (
                                        <span key={i} style={{ "--i": i }}>
                                            {char}
                                        </span>
                                    )
                                )}
                            </h1>
                            <span>Pedagoga e especialista em cuidado infantil</span>
                        </div>
                        <p>Atividades pedagógicas pensadas para estimular a criatividade e a autonomia do seu pequeno!</p>
                        <article>
                            <LinkButton variant="secondary">veja mais</LinkButton>
                            <LinkButton>contato</LinkButton>
                        </article>
                    </section>
                    {contact.map((data) => (
                        <section id="secondContent" key={data.instagram}>
                            <a href={data.instagram} target="_blank" rel="noreferrer">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href={data.whatsapp} target="_blank" rel="noreferrer">
                                <i className="ri-whatsapp-line"></i>
                            </a>
                            <a href={data.forms} target="_blank" rel="noreferrer">
                                <i className="ri-information-line"></i>
                            </a>
                        </section>
                    ))}
                </Banner>
            </TopContainer>
            <GradientEffect />
            <Main>
                <AboutContainer>
                    <AboutContent>
                        <Title icon={<i className="ri-plant-fill"></i>}>
                            Sobre mim
                        </Title>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, molestiae. Vitae facilis veritatis fugiat pariatur, distinctio qui commodi architecto, dolorem voluptatem delectus eius. Beatae excepturi aliquam iste vero voluptatem possimus! <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint doloremque dicta sapiente deleniti praesentium quis provident consequuntur beatae illum expedita vero rem illo, animi magni soluta et exercitationem ad!</p>
                        <img src={about} className="aboutImage" alt="Mulher segurando criança" />
                    </AboutContent>
                </AboutContainer>
                <Title icon={<i className="ri-plant-fill"></i>}>
                    Atividades
                </Title>
                <Cards />
                <LearnContainer>
                    <LearnContent>
                        <Title icon={<i className="ri-plant-fill"></i>}>
                            Aprendizado
                        </Title>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, molestiae. Vitae facilis veritatis fugiat pariatur, distinctio qui commodi architecto, dolorem voluptatem delectus eius. Beatae excepturi aliquam iste vero voluptatem possimus! <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint doloremque dicta sapiente deleniti praesentium quis provident consequuntur beatae illum expedita vero rem illo, animi magni soluta et exercitationem ad!</p>

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
                    </LearnContent>
                </LearnContainer>
                <PhraseContainer>
                    <div>
                        <i className="ri-globe-fill"></i>
                    </div>
                    <p>“A criança não é um vaso que se deve encher, mas uma fonte que deve ser deixada brotar.”</p>
                    <h3>Maria Montessori (educadora)</h3>
                </PhraseContainer>
            </Main>
            <Footer />
        </>
    )
}
