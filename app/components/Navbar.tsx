import localFont from 'next/font/local'
import SearchBar from './Search';
import { NavigationMenuDemo } from './NavMenu';
// import NavMenu from './NavMenu';

const myFont = localFont({ src: '../../public/fonts/AnekBangla-SemiBold.ttf' })



const Navbar = () => {
    return (
        <header className="w-full flex items-center justify-between px-4  lg:px-[72px] py-[12px] lg:py-[40px]">
            <div className='flex items-center'>
                <div className={`${myFont.className} text-2xl font-semibold`}>EAZETRADES</div>
            </div>
            <div className="flex items-center gap-20">
                <SearchBar />
                <NavigationMenuDemo />
            </div>
        </header>
    );
}

export default Navbar;