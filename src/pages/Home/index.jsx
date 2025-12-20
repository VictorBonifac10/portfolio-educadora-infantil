import { Header } from "../../components/Header";
import { LinkButton } from "../../components/LinkButton";
import { contact } from "../../data/contact";
import { images } from "../../data/images";

import { TopContainer, Banner, GradientEffect, Main, AboutContainer, AboutContent, LearnContainer, LearnContent, PhraseContainer, Container } from "./styles"

import banner from "../../assets/banner.jpg"
import person from "../../assets/person.png"
import about from "../../assets/about.png"
import { Cards, Footer, Title, WorkTimeline, } from "../../components";

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
                        <Title icon={<i className="ri-user-fill"></i>}>
                            Sobre mim
                        </Title>
                        <p>
                            Olá, meu nome é Núbia Carraro, pedagoga em formação e cuidadora infantil.<br /><br />
                            Com experiência no acompanhamento individualizado de crianças em ambientes escolares e familiares, trabalho com os pequenos de forma atenta e carinhosa, acreditando que o cuidado, o afeto e a escuta são fundamentais para o desenvolvimento de cada um deles.<br /><br />
                            Tenho vivência como professora auxiliar e babá, desenvolvendo rotinas educativas, atividades lúdicas e estratégias que estimulam a autonomia, o aprendizado e o desenvolvimento social e emocional, valorizando a diversidade e o potencial único de cada criança.
                        </p>
                        <img src={about} className="aboutImage" alt="Mulher segurando criança" />
                    </AboutContent>
                </AboutContainer>
                <Title icon={<i class="ri-shapes-fill"></i>}>
                    Aprendizado
                </Title>
                <Cards />
                <LearnContainer>
                    <LearnContent>
                        <Title icon={<i class="ri-star-smile-fill"></i>}>
                            Atividades
                        </Title>
                        <p>Abaixo estão alguns registros de atividades realizadas ao longo da rotina de trabalho, evidenciando propostas aplicadas em diferentes contextos e momentos. As imagens refletem práticas desenvolvidas com organização, intencionalidade e atenção às necessidades individuais, integrando cuidado, aprendizagem e convivência no cotidiano.</p>

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
                {/*
                    <Container>
                        <Title icon={<i className="ri-plant-fill"></i>}>
                            Experiências
                        </Title>
                        <WorkTimeline />
                    </Container>
                */}
            </Main>
            <Footer />
        </>
    )
}
