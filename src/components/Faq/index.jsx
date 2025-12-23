import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { AccordionContainer, AccordionCard } from './styles'

import { Title } from '../Title';

export function Faq() {
    return (
        <>
            <AccordionContainer>
                <AccordionCard>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className='question'>
                            <span className='indice'>1</span>
                            <h4>Quais faixas etárias atende</h4>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Atendo crianças de 2 a 10 anos.</p>
                    </AccordionDetails>
                </AccordionCard>

                <AccordionCard>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className='question'>
                            <span className='indice'>2</span>
                            <h4>Quais são seus horários de atendimento?</h4>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Atendimento em dias úteis das 8h às 10h e finais de semana com horários flexíveis ou período integral.</p>
                    </AccordionDetails>
                </AccordionCard>

                <AccordionCard>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className='question'>
                            <span className='indice'>3</span>
                            <h4>Você realiza cuidados básicos como alimentação e higiene?</h4>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Sim, realizo cuidados básicos com atenção, responsabilidade e segurança.</p>
                    </AccordionDetails>
                </AccordionCard>

                <AccordionCard>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className='question'>
                            <span className='indice'>4</span>
                            <h4>As atividades são adequadas para a idade da criança?</h4>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Sim, as atividades são planejadas conforme a faixa etária e o desenvolvimento infantil.</p>
                    </AccordionDetails>
                </AccordionCard>

                <AccordionCard>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className='question'>
                            <span className='indice'>5</span>
                            <h4>Como lida com birras, frustrações e momentos de choro?</h4>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Atuo com paciência, acolhimento e estratégias adequadas à idade da criança.</p>
                    </AccordionDetails>
                </AccordionCard>

                <AccordionCard>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className='question'>
                            <span className='indice'>6</span>
                            <h4>Você trabalha com mais de uma criança ao mesmo tempo?</h4>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Sim, possuo experiência no cuidado simultâneo de mais de uma criança.</p>
                    </AccordionDetails>
                </AccordionCard>

                <AccordionCard>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className='question'>
                            <span className='indice'>7</span>
                            <h4>Como é feita a comunicação com os responsáveis?</h4>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>A comunicação é constante, clara e alinhada às necessidades da família.</p>
                    </AccordionDetails>
                </AccordionCard>

                <AccordionCard>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className='question'>
                            <span className='indice'>8</span>
                            <h4>É possível alinhar atividades de acordo com as orientações e rotinas da família?</h4>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Totalmente. As atividades são sempre adaptadas às orientações, valores e rotina familiar.</p>
                    </AccordionDetails>
                </AccordionCard>
            </AccordionContainer>
        </>
    )
}