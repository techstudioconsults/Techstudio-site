import React from 'react'
import PropTypes from 'prop-types'
import style from './AboutSection4.module.scss'
import TeamCard from '../../../../../components/global/cards/teamCard/TeamCard'
import { Container } from '../../../../../layout'

const AboutSection4 = ({ content }) => {
    const { header, cards } = content
    const cardsDisplay = cards.map((card, index) => {
        return <TeamCard key={index} content={card} />
    })
    return (
        <Container>
            <section className={style.aboutSectionFour}>
                <h1 className={style.header}>{header.title}</h1>
                <div className={style.teamCardGroup}>{cardsDisplay}</div>
            </section>
        </Container>
    )
}

AboutSection4.propTypes = {
    content: PropTypes.object,
}

export default AboutSection4
