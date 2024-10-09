import './home.scss'
import Header from '../../containers/header/header'
import Projects from '../../containers/projects/projects'
import Biography from '../../containers/biography/biography'
import Skills from '../../containers/skills/skills'
import Annex from '../../containers/annex/annex'
import Carousel from '../../containers/carousel/carousel'
import Footer from '../../containers/footer/footer'
import ArrowBackground from '../../components/arrowBackground/arrowBackground'

export default function Home() {
  return (
    <>
      <ArrowBackground/>
      <Header/>
      <main>
        <Projects/>
        <Biography/>
        <Skills/>
        <Annex/>
        <section className='carousel__height'>
          <Carousel/>
        </section>
      </main>
      <Footer/>
    </>
  )
}
