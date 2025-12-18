import { Header } from "../../components/Header";

import { contact } from "../../data/contact";

import { TopContainer, Banner, Main } from "./styles"

import banner from "../../assets/banner.jpg"
import person from "../../assets/person.png"
import { LinkButton } from "../../components/LinkButton";

export function Home() {
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
                            <h1>Nubia Carraro</h1>
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
            <Main>
            </Main>
        </>
    )
}
