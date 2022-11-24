import Image from 'next/image'
import LogoImg from '../assets/logo.svg'


export function Footer() {
    return (
        <footer>
            <div className="flex flex-1 items-center justify-center">
                <Image className='block h-20' src={LogoImg} alt='logo do clube de xadrez'/>
                
                <div className="ml-6 block">
                    <p className='text-white'>Clube de Xadrez - Campus Jardim - © 2022</p>
                </div>
            </div>
        
        </footer>
    )
}