import { Header } from "../../components/Header";
import { LinkButton } from "../../components/LinkButton";
import { contact } from "../../data/contact";
import { images } from "../../data/images";

import { TopContainer, Banner, GradientEffect, Main, AboutContainer, AboutContent, LearnContainer, LearnContent } from "./styles"

import banner from "../../assets/banner.jpg"
import person from "../../assets/person.png"
import about from "../../assets/about.png"
import { Title } from "../../components";

import { carouselFunction } from "../../utils/carouselFunction";
import { useEffect } from "react";

export function Home() {

    useEffect(() => {
        //Utils Init
        carouselFunction();
    }, []);

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
                <LearnContainer>
                    <LearnContent>
                        <Title icon={<i class="ri-puzzle-2-fill"></i>}>
                            Aprendizado
                        </Title>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, molestiae. Vitae facilis veritatis fugiat pariatur, distinctio qui commodi architecto, dolorem voluptatem delectus eius. Beatae excepturi aliquam iste vero voluptatem possimus! <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint doloremque dicta sapiente deleniti praesentium quis provident consequuntur beatae illum expedita vero rem illo, animi magni soluta et exercitationem ad!</p>

                        <article className="imageCarousel" id="photos">
                            {images.map(data => (
                                <img src={data.src} width="200px" alt="Atividades" />
                            ))
                            }
                        </article>

                    </LearnContent>
                </LearnContainer>
            </Main>
        </>
    )
}
