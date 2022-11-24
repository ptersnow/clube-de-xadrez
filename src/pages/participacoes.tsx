import { Navbar } from "../components/Navbar";
import { ImageBackground } from "../components/ImageBackground";
import { Footer } from "../components/Footer";

export default function Participacoes () {
    return (
        <ImageBackground isHome={false}>
            <Navbar isActive='participacoes' />
            <div className=''>
                <h2 className='text-white text-4xl font-bold'>
                    Participações
                </h2>
            </div>
            <Footer />
        </ImageBackground>
    )
}