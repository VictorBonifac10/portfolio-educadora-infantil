import childreen from '../../assets/childreen.jpg'

import { ContactContainer } from './styles'

export function Contact() {
    return (
        <ContactContainer>
            <img id="person" src={childreen} alt="Educadora Infantil" />
            <div id="mask"></div>
        </ContactContainer>
    )
}