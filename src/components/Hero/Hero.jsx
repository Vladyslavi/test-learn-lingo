import React from 'react'
import {
    ContainerHome,
    SectionGetStarted,
    SectionImg,
    TitelSectionHero,
    ContainerSpan,
    HeroTextScript,
    CatalogBtn
} from './Hero.styled'

const Hero = () => {
    return (
        <ContainerHome>
            <SectionGetStarted>
                <TitelSectionHero>
                    Unlock your potential with <br /> the best{' '}

                    <ContainerSpan>
                        <span>language</span>
                    </ContainerSpan>{' '}
                    tutors
                </TitelSectionHero>
                <HeroTextScript>
                    Embark on an Exciting Language Journey with Expert Language <br /> Tutors:
                    Elevate your language proficiency to new heights by <br /> connecting with
                    highly qualified and experienced tutors.
                </HeroTextScript>
                <CatalogBtn to="/teachers">Get started</CatalogBtn>
            </SectionGetStarted>
            <SectionImg />
        </ContainerHome>
    )
}

export default Hero