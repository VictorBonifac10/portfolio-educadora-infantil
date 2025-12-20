//Tags from Styles
import { ContainerFooter, Text } from "./styles";

//Datas
import { contact } from "../../data/contact";


export function Footer() {


    return (
        <ContainerFooter>
            <Text>
                Educar é cuidar com presença, respeito e propósito.
            </Text>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="">Sobre mim</a>
                </li>
                <li>
                    <a href="">Aprendizado</a>
                </li>
                <li>
                    <a href="">Atividades</a>
                </li>
                <li>
                    <a href="">Outros</a>
                </li>
            </ul>
            {contact.map(data => (
                <section>
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
            <Text>
                © 2025 Nubia Carraro • Todos os direitos reservados <br />Desenvolvido por Victor Bonifácio
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