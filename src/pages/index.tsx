import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ImageBackground } from '../components/ImageBackground'

export default function Home() {
  return (
    <ImageBackground isHome={true}>
        <Navbar isActive='home' />
        <div className=''>
            <h2 className='text-white text-6xl font-bold'>
                Clube de Xadrez IFMS - Campus Jardim
            </h2>
        </div>
        <Footer />
    </ImageBackground>
  )
}
