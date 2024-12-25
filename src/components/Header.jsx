import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkidin from '../assets/linkidin.svg'
import youtube from '../assets/youtube.svg'
import feedly from '../assets/feedly.svg'
import instagram from '../assets/instagram.svg'
import wifi from '../assets/wifi.svg'
import './style.css'

const Header = () => {
    const [inp, setInp] = useState(false)
    const [menu, setMenu] = useState(false)

    function hendelInp(e) {
        e.preventDefault()
        setInp((prev) => !prev)
    }

    function hendelMenu(e) {
        e.preventDefault()
        setMenu((prev) => !prev)
    }

    return (
        <div className='bg-[#f8f8f8] fixed w-full z-50 transition-all duration-300'>
            <nav className='bace-container mt-2.5'>
                <div className='flex justify-between items-center h-20'>
                    <div className='flex gap-8 items-center'>
                        <div className='flex items-center gap-10'>
                            <div className='flex justify-center items-center'>
                                <button
                                    onClick={hendelMenu}
                                    className='group w-9 h-9 pl-[9px] border border-transparent hover:border-gray-400 rounded-full transition-all duration-300 ease-in-out'
                                >
                                    {menu ? (
                                        <div className="relative w-4 h-4 top-2">
                                            <span className="absolute top-0 left-0 w-4 border-b-[3px] rounded-xl border-black rotate-45 group-hover:border-red-700 transition-transform duration-500"></span>
                                            <span className="absolute top-0 left-0 w-4 border-b-[3px] rounded-xl border-black -rotate-45 group-hover:border-red-700 transition-transform duration-500"></span>
                                        </div>
                                    ) : (
                                        <div>
                                            <span className='block border-b-[3px] rounded-xl w-4 mb-1 border-black group-hover:border-red-700 transition-all duration-300'></span>
                                            <span className='block border-b-[3px] rounded-xl w-4 mb-1 border-black group-hover:border-red-700 transition-all duration-300'></span>
                                            <span className='block border-b-[3px] rounded-xl w-3 border-black group-hover:border-red-700 transition-all duration-300'></span>
                                        </div>
                                    )}
                                </button>
                            </div>
                            <Link to='/'>
                                <img src={logo} width={175} height={45} alt="" />
                            </Link>
                        </div>
                        {menu ? <p></p> :
                            <ul className='flex items-center justify-between text-sm w-[507px] '>
                                <li className='border-b-2 border-transparent font-bold pb-1 hover:text-[#E2211C] hover:border-[#cfcfcf] transition-all'><Link to='/products'>Products</Link></li>
                                <li>
                                    <Link to='/malware'
                                        className='flex gap-2 '>
                                        <p className='h-[15px] border-r-2 transform -skew-x-12'></p>
                                        <span className='border-b-2 border-transparent font-bold pb-1 hover:text-[#E2211C] hover:border-[#cfcfcf] transition-all'>Malware</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/vulnerabilities'
                                        className='flex gap-2'>
                                        <p className='h-[15px] border-r-2 transform -skew-x-12'></p>
                                        <span className='border-b-2 border-transparent font-bold pb-1 hover:text-[#E2211C] hover:border-[#cfcfcf] transition-all'>Vulnerabilities</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/infoSec Insiders'
                                        className='flex gap-2 w-[134px]'>
                                        <p className='h-[15px] border-r-2 transform -skew-x-12'></p>
                                        <span className='border-b-2 border-transparent font-bold pb-1 hover:text-[#E2211C] hover:border-[#cfcfcf] transition-all'>InfoSec Insiders</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/webinars'
                                        className='flex gap-2'>
                                        <p className='h-[15px] border-r-2 transform -skew-x-12'></p>
                                        <span className='border-b-2 border-transparent font-bold pb-1 hover:text-[#E2211C] hover:border-[#cfcfcf] transition-all'>Webinars</span>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>

                    <div className={`w-[360px] flex ${menu ? 'justify-end' : 'justify-between'} transition-all duration-500`}>
                        {!inp && (
                            <div className='flex gap-1'>
                                {[facebook, twitter, linkidin, youtube, feedly, instagram, wifi].map((icon, index) => (
                                    <Link
                                        key={index}
                                        className='h-8 flex justify-center w-max rounded-full opacity-30 border hover:opacity-100 hover:border-black py-0.5 transition-all duration-300 ease-out'
                                    >
                                        <img src={icon} className='p-1' width={32} height={32} alt={`${icon} icon`} />
                                    </Link>
                                ))}
                            </div>
                        )}
                        {menu ? <p></p> :
                            <form className={`${inp ? 'w-[360px]' : 'w-[85px]'} relative transition-all duration-500 ease-in-out`}>
                                {inp && (
                                    <input
                                        className='outline-none rounded-full p-1.5 ps-3 py-2.5 text-sm w-full bg-white transition-all duration-500 ease-in-out'
                                        type="text"
                                        placeholder='Search'
                                    />
                                )}
                                <button
                                    onClick={hendelInp}
                                    className={`w-[85px] h-8 border absolute right-0 rounded-full font-semibold text-sm transition-all duration-300 ${inp ? 'bg-black text-white mt-1' : 'bg-transparent hover:text-gray-900 hover:border-black text-[#4D4D4D]'
                                        }`}
                                >
                                    Search
                                </button>
                            </form>
                        }
                    </div>
                </div>

                {
                    menu ?
                        <div className='border-t-2 h-[100vh] w-full'>
                            <div className='flex items-start justify-between pt-10'>
                                <ul className='flex flex-col gap-3'>
                                    <li className='font-semibold text-[#A5A5A5] mb-3'>Topics</li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Cloud Security</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Vulnerabilities</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Black Hat</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Cryptography</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Featured</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Hacks</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Mobile Security</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>RSAC</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Slideshow</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Web Security</Link></li>
                                </ul>
                                <ul className='flex flex-col gap-3'>
                                    <li className='mt-12'><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Malware</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Privacy</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Critical Infrastructure</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Facebook</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Government</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>IoT</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Podcasts</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Security Analyst Summit</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Videos</Link></li>
                                </ul>
                                <ul className='flex flex-col gap-3'>
                                    <li className='font-bold text-[#A5A5A5] mb-3'>Authors</li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Elizabeth Montalbano</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Nate Nelson</Link></li>
                                </ul>
                                <ul className='flex flex-col gap-3'>
                                    <li className='font-bold text-[#A5A5A5] mb-3'>Threatpost</li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Home</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>About Us</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>Contact Us</Link></li>
                                    <li><Link className='font-bold hover:text-[#E2231E] transition-all duration-300'>RSS Feeds</Link></li>
                                </ul>
                            </div>
                            <form className='max-w-[492px] mx-auto mt-10 relative transition-all duration-500 ease-in-out'>
                                <input
                                    className='outline-none rounded-full px-4 border-2 py-3 text-sm w-full bg-white transition-all duration-500 ease-in-out'
                                    type="text"
                                    placeholder='Search'
                                />
                                <button
                                    className='w-[85px] h-8 border absolute right-1.5 top-2 rounded-full font-semibold text-sm opacity-75 hover:opacity-100 transition-all duration-300 bg-black text-white'
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                        : <p></p>
                }
            </nav>
        </div>
    )
}

export default Header
