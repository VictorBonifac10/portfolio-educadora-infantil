//Styles
import { ContainerFooter, Text } from "./styles";

//Data
import { contact } from "../../data/contact";

//Icons
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Footer() {


    return (
        <ContainerFooter>
            <Text>
                Educar é cuidar com presença, respeito e propósito!
            </Text>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#about">Sobre mim</a>
                </li>
                <li>
                    <a href="#learn">Aprendizado</a>
                </li>
                <li>
                    <a href="#experences">Atividades</a>
                </li>
                <li>
                    <a href="#faq">Perguntas</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
            {contact.map(data => (
                <section>
                    <a href={data.instagram} target="_blank" rel="noreferrer">
                        <InstagramIcon />
                    </a>
                    <a href={data.whatsapp} target="_blank" rel="noreferrer">
                        <WhatsAppIcon />
                    </a>
                    <a href={data.forms} target="_blank" rel="noreferrer">
                        <InfoIcon />
                    </a>
                </section>
            ))}
            <Text>
                <p>
                    © 2025 Nubia Carraro • Todos os direitos reservados <br />Desenvolvido por <a href="https://victorbonifacio.netlify.app/" target="_blank">Victor Bonifácio</a>
                </p>
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