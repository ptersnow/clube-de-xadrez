import { Navbar } from "../components/Navbar";
import { ImageBackground } from "../components/ImageBackground";
import { Footer } from "../components/Footer";

export default function Enxadristas () {
    return (
        <ImageBackground isHome={false}>
            <Navbar isActive='enxadristas'  />
            <div className=''>
                <h2 className='text-white text-4xl font-bold'>
                    Enxadristas
                </h2>
            </div>
            <Footer />
        </ImageBackground>
    )
}