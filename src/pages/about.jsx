import React from 'react'
import { useState } from 'react'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Header from '@/components/Header'

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
                        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-800 md:text-4xl lg:text-6xl">Let's work together!</h1>
                        <p className="mt-6 text-lg leading-8 text-neutral-800"> With a passion for delivering exceptional service and a commitment to customer satisfaction, we take pride in keeping your windows sparkling and your views crystal clear.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="overflow-hidden py-24 bg-neutral-100 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Image */}
                    <div className="flex items-start justify-start lg:order-last">
                        <img className="object-cover min-h-full max-h-[300px] w-[64rem] max-w-none rounded-xl shadow-xl ring-neutral-400/10 sm:w-[57rem]" src="/images/Cleaning-a-window-in-Aurora-CO.webp" alt="Cleaning a window in Aurora, CO"/>
                    </div>
                    <div className="lg:mr-auto lg:pr-4">
                        <div className="lg:max-w-lg">
                            {/* Taglines */}
                            <h2 className="text-base font-bold leading-7 text-primary-800 uppercase tracking-wide">About Us</h2>
                            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-neutral-800 md:text-3xl lg:text-4xl ">Your locally owned window cleaning company.</h2>
                            {/* Service Content */}
                            <p className="text-lg text-neutral-800 mt-6 leading-7">Joe and Jennifer DeJulio have worked in the window cleaning industry since 2003. In the fall of 2022, Joe and Jennifer assumed responsibility from Alex, Grace Brunner, and Will Van Der Meer. We promise to bring the same standards that Alex and Will brought to each and every customer.</p>
                            <p className="text-lg text-neutral-800 mt-6 leading-7">Joe uses the latest high-quality equipment available in the window cleaning industry, such as purified water cleaning technology, soaps designed for window cleaning that leaves no film behind, and tools that cannot be bought at home improvement stores.</p>
                            {/* Regular CTA */}
                            <div className="mt-10 flex items-center justify-left">
                                <div className="flex items-center">
                                    <a className="nj-lead font-heading text-white shadow-sm focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:transparent font-bold rounded-2xl bg-primary-700 hover:bg-primary-600 transition-all ease-in text-base py-3 px-4" href="#">
                                        Get my free quote!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="editable-component relative isolate overflow-hidden bg-primary-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
  
          {/*Header Medium and Stars*/}
          <div className="text-center">
              <h2 className="mt-2 text-2xl tracking-tight text-white font-bold sm:text-3xl sm:leading-tight">Recommend your experience!</h2>
          </div>
  
  
          {/*Bold Review*/}

            <blockquote className="mt-10 text-center text-xl leading-8 text-white sm:text-2xl sm:leading-9">
              <p>Tell your family and friends about us after experiencing our fantastic work firsthand. We rely on word-of-mouth advertising to grow our business and are always happy to help.</p>
            </blockquote>


          
  
          {/* Regular CTA*/}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center">
              <a className="nj-recommendation font-heading text-neutral-800 shadow-sm focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:transparent font-bold rounded-2xl bg-white hover:bg-neutral-300 transition-all ease-in text-base py-3 px-4" href="#">Recommend us!</a>
            </div>
          </div>
  
        </div>

      </section>
                    
        <Footer/>
        </>
    )
}