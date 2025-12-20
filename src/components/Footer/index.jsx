//Tags from Styles
import { ContainerFooter, Text } from "./styles";

//Datas
import { contact } from "../../data/contact";


export function Footer() {


    return (
        <ContainerFooter>
            <Text>
                Construindo aplicações modernas, performáticas e funcionais.
            </Text>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#services">Habilidades</a>
                </li>
                <li>
                    <a href="#technologies">Tecnologias</a>
                </li>
                <li>
                    <a href="#portfolio">Projetos</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
            </ul>
            {contact.map(data => (
                <section>
                    <a href={data.instagram} target="_blank">
                        <i className="ri-whatsapp-line"></i>
                    </a>
                    <a href={data.whatsapp} target="_blank">
                        <i className="ri-google-line"></i>
                    </a>
                    <a href={data.forms} target="_blank">
                        <i className="ri-github-line"></i>
                    </a>
                </section>
            ))}
            <Text>
                © 2025 Victor Bonifácio Portfólio. Todos os direitos reservados.
            </Text>
            <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use href="#gentle-wave" x="48" y="0" />
                    <use href="#gentle-wave" x="48" y="3" />
                    <use href="#gentle-wave" x="48" y="5" />
                    <use href="#gentle-wave" x="48" y="7" />
                </g>
            </svg>
        </ContainerFooter>

    )
}