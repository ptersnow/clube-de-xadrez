import Image from 'next/image'
import Link from 'next/link'

import LogoImg from '../assets/logo.svg'

interface NavbarProps {
    isActive: string
}

export function Navbar({ isActive }: NavbarProps) {
    return (
        <nav>
            <div className="flex flex-1 items-center justify-center">
                <Image className='block h-20' src={LogoImg} alt='logo do clube de xadrez'/>
                
                <div className="ml-6 block">
                    <div className="flex space-x-4">
                        <Link
                            href='/'
                            className={`px-3 py-2 rounded-md text-sm font-medium ${isActive === 'home' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' }`}
                        >
                            Home
                        </Link>
                        <Link
                            href='/regras'
                            className={`px-3 py-2 rounded-md text-sm font-medium ${isActive === 'regras' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                        >
                            Regras
                        </Link>
                        <Link
                            href='/participacoes'
                            className={`px-3 py-2 rounded-md text-sm font-medium ${isActive === 'participacoes' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                        >
                            Participações
                        </Link>
                        <Link
                            href='/enxadristas'
                            className={`px-3 py-2 rounded-md text-sm font-medium ${isActive === 'enxadristas' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                        >
                            Enxadristas
                        </Link>
                    </div>
                </div>
            </div>
           
        </nav>
    )
}