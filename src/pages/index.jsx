import React, { useEffect } from 'react'

import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ReviewHero from '../components/ReviewHero'
import Services from '@/components/Service'
import Header from '@/components/Header'
import Faq from '@/components/Faq'
import USP from '@/components/USP'
import Testimonials from '../components/Testimonials'
import HeroFullBG from '../components/HeroFullBG'

export default function Home() {
    return (
        <>
            <Header pagename={'index'} />
            <Nav />
            <HeroFullBG />
            <Hero />
            <ReviewHero />
            <USP />
            <Services />
            <Testimonials />
            <Faq />
            <CallToAction />
            <Footer />
        </>
    )
}
