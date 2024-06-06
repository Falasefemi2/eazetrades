import localFont from 'next/font/local'
import SearchBar from './Search';
import { NavigationMenuDemo } from './NavMenu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from "../../public/images/eazetrades-logo-3 3.png"
import Container from './Container';


const btnfont = localFont({ src: '../../public/fonts/AnekBangla-Medium.ttf' })
const textFont = localFont({ src: '../../public/fonts/AnekBangla_SemiCondensed-SemiBold.ttf' })



const Navbar = () => {
    return (
        <Container>
            <header className="w-full flex items-center justify-between px-4 py-[12px] lg:py-[40px]">
                <div className='flex items-center justify-center mr-[144px]'>
                    <Image src={logo} width={29.17} height={35} alt='logo' className='mr-[5px]' />
                    <span className={`${textFont.className} text-2xl font-semibold text-[#4F4F4F]`}>EAZETRADES</span>
                </div>
                <div className="flex items-center justify-end space-x-8 max-w-[978px] w-full">
                    <SearchBar className=" mr-20" /> {/* Added margin-left */}
                    <NavigationMenuDemo />
                    <Button size="default" className={`${btnfont.className} text-xl`}>Get Started</Button>
                </div>
            </header>
        </Container>

    );
}

export default Navbar;