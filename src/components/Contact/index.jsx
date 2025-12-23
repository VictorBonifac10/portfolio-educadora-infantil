import childreen from '../../assets/childreen.jpg'
import { Title } from '../Title'

import { ContactContainer } from './styles'

export function Contact() {
    return (
        <ContactContainer>
            <img id="person" src={childreen} alt="Educadora Infantil" />
            <div id="mask"></div>
            <section>
                <Title>
                    Se interessou?
                </Title>
                <p>Entre em contato pelo (16)99716-1628 <br /> <br /> ou <a href='#'>clique aqui</a></p>
            </section>
        </ContactContainer>
    )
}