import { CardContainer, Card } from './styles'

import img1 from '../../assets/learning-game6.jpeg'

export function PhotoSection() {
    return (
        <CardContainer>
            <Card>
                <img src={img1} alt="" />
                <p>Brincadeiras com Tinta</p>
            </Card>
            <Card>
                <img src={img1} alt="" />
                <p>Brincadeiras com Tinta</p>
            </Card>
            <Card>
                <img src={img1} alt="" />
                <p>Brincadeiras com Tinta</p>
            </Card>
        </CardContainer>
    )
}