import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

import { TimelineContainer, TimelineElement } from './styles';

export function Timeline() {
    return (

        <TimelineContainer>
            <TimelineElement
                className="vertical-timeline-element--education"
                date="abr 2025 - set 2025"
                iconStyle={{ background: 'rgba(193, 128, 255, 1)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Professora Auxiliar</h3>
                <h4 className="vertical-timeline-element-subtitle">Colégio Madre Leônia, Matão</h4>
                <p>
                    Apoio ao desenvolvimento dos alunos, com identificação de dificuldades, aplicação de estratégias pedagógicas e colaboração para um ambiente de aprendizagem organizado e acolhedor.
                </p>
            </TimelineElement>
            <TimelineElement
                className="vertical-timeline-element--education"
                date="fev 2023 - nov 2027"
                iconStyle={{ background: 'rgba(193, 128, 255, 1)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Pedagogia</h3>
                <h4 className="vertical-timeline-element-subtitle">Anhaguera, Matão</h4>
                <p>
                    Desenvolvimento de habilidades para o planejamento e a execução de atividades pedagógicas alinhadas às necessidades e aos diferentes ritmos de aprendizagem dos alunos.
                </p>
            </TimelineElement>
            <TimelineElement
                className="vertical-timeline-element--education"
                date="jun 2021 - abr 2025"
                iconStyle={{ background: 'rgba(193, 128, 255, 1)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Cuidadora infantil</h3>
                <h4 className="vertical-timeline-element-subtitle">Antenor Carlos Nogueira Neto, Matão</h4>
                <p>
                    Atuação no cuidado e desenvolvimento integral da criança, com comunicação com os responsáveis e estímulo ao aprendizado, à autonomia e às habilidades socioemocionais por meio de atividades lúdicas adequadas à faixa etária.
                </p>
            </TimelineElement>
            <TimelineElement
                iconStyle={{ background: 'rgba(193, 128, 255, 1)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </TimelineContainer >

    );
}
