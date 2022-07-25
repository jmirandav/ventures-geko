import logo from './assets/images/logo.svg';
import bannerWave from './assets/images/banner-wave.svg'
import circleFillAccent from './assets/images/circle-fill-accent.svg'
import circleFillPrimary from './assets/images/circle-fill-primary.svg'
import accentWaveTop from './assets/images/accent-wave-top.svg'
import redFormula from './assets/images/red-formula.svg'
import unknow from './assets/images/unknow.svg'
import './App.css';
import Title from './components/Title';
import wave2 from './assets/images/wave2.svg'
import wave3 from './assets/images/wave3.svg'
import wave4 from './assets/images/wave4.svg'

import BannerWave from './components/WaveBanner';
import meet from './assets/images/meeting.png'
import traning from './assets/images/traning.png'
import OpportunityItem, { OpportunityItemDesk } from './components/OportunitiesItem';
import i1 from './assets/images/Asset3.svg'
import i2 from './assets/images/Asset4.svg'
import i3 from './assets/images/Asset5.svg'
import red from './assets/images/red.svg'
import MarcasGrid from './components/MarcasGrid';
import m1 from './assets/images/marca1.svg'
import m2 from './assets/images/marca2.svg'
import m3 from './assets/images/marca3.svg'
import m4 from './assets/images/marca9.png'
import m5 from './assets/images/marca5.svg'
import m6 from './assets/images/marca8.png'
import TeamGrid from './components/TeamGrid';
import mail from './assets/images/Mail.svg'
import minired from './assets/images/mimired.svg'
import Footer from './components/Footer';
import NavigationMobile from './components/NavigationMobile';
import NavigationDesktop from './components/NavigationDesktop';

const marcas = [m4, m1, m2, m6, m3, m5]
const partners = [m4, m1, m2, m6, m3, m5]

const gridItems = [
  {
    image: i1,
    text: <>Digital <br /> Solutions</>,
    frame: false
  },
  {
    image: i2,
    text: <>Technology <br className='break'/> powered <br className='break'/> companies</>,
    frame: true
  },
  {
    image: i3,
    text: "Fintech",
    frame: false
  },
]

function App() {
  return (
    <div>
      <section className='banner-header'>
        <div className='blue-layer'></div>
        <nav>
          <img className='brand md:hidden' src={logo} />
          <NavigationDesktop />
        </nav>
        <div className='header-container'>
          <div className='md:flex md:justify-center'>
            <div className="md:hidden">
              <NavigationMobile />
            </div>
            <div className='large-title-container'>
              <h1 className='title md:text-lg'>
                We love a great idea, but we live to build on good opportunities
              </h1>
              <p className='text-center'>
                Geko ventures is about welding the right dots
              </p>
            </div>
          </div>

        </div>
        <img className='banner-wave' src={bannerWave} />
        <img className='circle-fill-accent' src={circleFillAccent} />
      </section>
      <section className='formula-section flex flex-col md:flex-row-reverse'>
        <div className='pt-24'>
          <Title title={
            <>
              <span className='md:text-6xl'>Adding</span> <br /> the right formula
            </>
          } />
        </div>
        <div id="formula-image-container">
          <img src={redFormula} />
        </div>
        <img className='circle-fill-primary' src={circleFillPrimary} />

        <img className='accent-wave-top' src={accentWaveTop} />
      </section>

      <section id="union-w-m">
        <section>
          <section id="what-we-do-section">
            <Title title="What we do" dark />
            <div className='mt-10 lg:mb-24'>
              <p className='cp'>
                Building businesses requires more than capital, be it gathering the necessary support, or finding the best people to lead, we aid in pitching and knocking on the right doors to lead and manage your intended growth strategy.
              </p>
            </div>
          </section>
          <div className='accent-bg md:flex md:pt-8 relative'>
            <div className='flex items-center'>
              <p className='text-white pt-8 md:pt-0 text-center md:text-left md:text-xl pb-8 md:pr-24 md:pl-10'>
                <b className='md:text-2xl'>At Geko Ventures we pour over 20 years of knowledge in technology,</b>awesome contacts, keen investors, and proven business methodologies to gear up for a winning and lasting solutions.
              </p>
            </div>
            <div>
              <BannerWave image={meet} bottomWave={wave2} />
            </div>
            <img id="shape-middle" src={unknow} />
          </div>

        </section>

      </section>
      <div className='md:flex md:flex-row-reverse md:items-end'>
        <section className="idk mt-24 md:mt-0">
          <p id="personal-inspiration">
            Linking the dots of necessary elements, from <b>Creative thinking to international expansion.</b>
          </p>
        </section>
        <BannerWave image={traning} topWave={wave3} bottomWave={wave2} />
      </div>
      <section className='relative mt-24 op-container'>
        <Title
          title={<>
            We aim to enable <br className='md:hidden' /> opportunities in:
          </>}
        />
        <div className='mt-24 grid grid-cols-2 ml-12 mr-12 gap-y-24 md:hidden'>
          {
            gridItems.map(el => <OpportunityItem {...el} />)
          }
        </div>
        <div className='mt-24 grid grid-cols-2 ml-12 mr-12 gap-y-24 md:grid-cols-3 gridDesk'>
          {
            gridItems.map(el => <OpportunityItemDesk {...el} />)
          }
        </div>
        <img id="circle-fill-accent-desk" className='opacity-30 circle-fill-accent ' src={circleFillPrimary} />
        <img className='red-float md:hidden' src={red} />
      </section>

      <section className='mt-48 relative marcas-container'>
        <Title title={"Key Projects"} />
        <div className='ml-14 mr-14 mt-8'>
          <p className='opacity-70 text-center md:text-xl'>
            We have Worked alongside these projects and companies:
          </p>
          <MarcasGrid images={marcas} card />
        </div>
        <img src={red} className="red-rotated" />
        <img className='circle-fill-primary' src={circleFillAccent} />

      </section>
      <section className='mt-16 partners-container' >
        <img className='w-full' src={wave4} />
        <div className='ml-12 mr-12 mt-10'>
          <Title title={"Partners"} />
          <p className='opacity-70 text-center mt-8 md:text-xl'>
            Nobody knows how long it took to build Rome, but we would bet it was done by teaming up.
          </p>

          <MarcasGrid images={partners} />

        </div>
        <img className='w-full' src={wave2} />
      </section>
      <section className='overflow-x-hidden overflow-y-visible lg:relative'>
        <div className='flex justify-end relative'>
          <img src={red} className="red-rotated-2 md:absolute" />
          <img className='circle-fill-accent' src={circleFillPrimary} />
        </div>
        <div className='ml-4 mr-4'>
          <Title title={"The team"} />
          <div className='mt-10'>
            <TeamGrid />
          </div>
        </div>
        <section className='mt-32 relative'>
          <Title title={"Contact us"} />
          <div className='flex justify-center mt-24 mb-24'>
            <div className='flex flex-row items-center gap-4'>
              <img src={mail} className="w-8 h-8 md:w-16 md:h-16" />
              <span className="text-sm opacity-70 md:text-xl">Letsbuild@gekoventures.com</span>
            </div>
          </div>
          <img className='circle-fill-primary-top' src={circleFillPrimary} />
          <img className='minired-top' src={minired} />
          <img className='circle-fill-accent' src={circleFillAccent} />

        </section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
