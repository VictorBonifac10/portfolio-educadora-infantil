//Styles
import { CardContainer, Card } from './styles'

//Icons
import PaletteIcon from '@mui/icons-material/Palette';
import EditIcon from '@mui/icons-material/Edit';
import CalculateIcon from '@mui/icons-material/Calculate';

//Midias
import img1 from '../../assets/learning-game6.jpeg'
import img2 from '../../assets/learning-game7.jpeg'
import img3 from "../../assets/learning-game3.jpeg"

export function PhotoSection() {
    return (
        <CardContainer>
            <Card>
                <div className="imageWrapper">
                    <img src={img1} alt="" />
                </div>

                <div className="iconWrapper">
                    <PaletteIcon />
                </div>

                <h3>Brincadeiras com Tinta</h3>

                <p>Atividade sensorial que estimula a criatividade, a coordenação motora e a expressão emocional por meio das cores e texturas.</p>
            </Card>
            <Card>
                <div className="imageWrapper">
                    <img src={img2} alt="" />
                </div>

                <div className="iconWrapper">
                    <EditIcon />
                </div>

                 <h3>Desenho Livre</h3>

                <p>Proposta que valoriza a imaginação e a autonomia da criança, favorecendo a expressão de ideias, sentimentos e percepções.</p>
            </Card>
            <Card>
                <div className="imageWrapper">
                    <img src={img3} alt="" />
                </div>

                <div className="iconWrapper">
                    <CalculateIcon />
                </div>

                <h3>Jogos Matemáticos</h3>

                <p>Atividade lúdica que desenvolve o raciocínio lógico, a noção de números e a resolução de problemas de forma prazerosa.</p>
            </Card>
        </CardContainer>
    )
}