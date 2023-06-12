import React from 'react'
import { useState } from 'react'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Faq from '@/components/Faq'

  export default function Reviews() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
        <Header pagename={'reviews'} />
        <Nav />

        {/*Hero for secondary pages*/}
        <div className="bg-primary-100 pt-2 lg:pt-5">
            <div className="relative px-6  lg:px-8">
                <div className="mx-auto max-w-2xl py-12 lg:py-24">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-800 md:text-4xl lg:text-6xl">How can we help?</h1>
                        <p className="mt-6 text-lg leading-8 text-neutral-800">We're here to provide the answers you need. Our team is dedicated to ensuring your satisfaction and addressing any concerns you may have. We're committed to open and transparent communication.</p>
                    </div>
                </div>
            </div>
        </div>

        <Faq />    
        <Footer/>
        </>
    )
}