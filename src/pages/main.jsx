import React from 'react'
import SearchNav from './sections/search-nav'
import Webbuilder from './sections/web-builder'
import Tools from '../components/tools-used'
import Home from '../components/home'
import HeroSection from './sections/hero-section'
import RelatedDeals from './sections/related-deals'
import Footer from './sections/footer'

const Main = () => {
  return (
    <div>
        <SearchNav />
        <Webbuilder />
        <Tools />
        <Home />
        <HeroSection />
        <RelatedDeals />
        <Footer />
    </div>
  )
}

export default Main