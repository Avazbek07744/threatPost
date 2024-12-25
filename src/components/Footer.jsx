import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-white.png'
import facebook from '../assets/facebook-white.svg'
import twitter from '../assets/twitter-white.svg'
import linkidin from '../assets/linkedin-white.svg'
import youtube from '../assets/youtube-white.svg'
import feedly from '../assets/feedly-white.svg'
import instagram from '../assets/instagram-white.svg'
import wifi from '../assets/wifi-white.svg'

const Footer = () => {
    return (
        <div>
            <section className='h-12 border-y-2'></section>
            <div className='h-[223px] pt-7 pb-2 bg-[#222222] '>
                <div className='flex justify-between bace-container'>
                    <div>
                        <Link className='flex items-center w-[615px] text-white font-semibold px-4 mb-2'>
                            <img src={logo} className='my-1 me-4' alt="Logo image" width={175} height={45} />
                            <h2 className='text-sm'>The First Stop For Security News</h2>
                        </Link>
                        <div className='px-4 mt-10 w-[615px]'>
                            <ul className='flex gap-8 text-[#ffffff99] h-6 mb-2 text-xs'>
                                <li>Copyright © 2024 Threatpost</li>
                                <li className='list-disc'><Link className='p-0.5 hover:text-white transition-all duration-200'>Privacy Policy</Link></li>
                                <li className='list-disc'><Link className='p-0.5 hover:text-white transition-all duration-200'>Terms and Conditions</Link></li>
                            </ul>
                            <div className='flex gap-1'>
                                {[facebook, twitter, linkidin, youtube, feedly, instagram, wifi].map((icon, index) => (
                                    <Link
                                        key={index}
                                        className='h-8 flex justify-center w-max rounded-full opacity-75 border border-transparent hover:opacity-100 hover:border-white py-0.5 transition-all duration-300 ease-out'
                                    >
                                        <img src={icon} className='p-1' width={32} height={32} alt={`${icon} icon`} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <section>
                        <ul className='flex items-center justify-between text-sm w-[407px] mx-auto mr-0 h-[50px] mb-2'>
                            <li className='border-b-2 border-transparent font-bold text-[#ffffffcc] pb-1 hover:text-white hover:border-[#cfcfcf] transition-all duration-200'><Link to='/products'>Home</Link></li>
                            <li>
                                <Link to='/malware'
                                    className='flex gap-3 '>
                                    <p className='h-[14px] border-r-2 border-[#aaa] transform -skew-x-12'></p>
                                    <span className='border-b-2 border-transparent text-[#ffffffcc] font-bold pb-1 hover:text-white hover:border-[#cfcfcf] transition-all duration-200'>About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/vulnerabilities'
                                    className='flex gap-3'>
                                    <p className='h-[14px] border-r-2 border-[#aaa] transform -skew-x-12'></p>
                                    <span className='border-b-2 border-transparent text-[#ffffffcc] font-bold pb-1 hover:text-white hover:border-[#cfcfcf] transition-all duration-200'>Contact Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/infoSec Insiders'
                                    className='flex gap-3 '>
                                    <p className='h-[14px] border-r-2 border-[#aaa] transform -skew-x-12'></p>
                                    <span className='border-b-2 border-transparent text-[#ffffffcc] font-bold pb-1 hover:text-white hover:border-[#cfcfcf] transition-all duration-200'>RSS Feeds</span>
                                </Link>
                            </li>
                        </ul>
                        <div className='flex items-center h-6 justify-end gap-2 mx-auto mr-0 mb-2'>
                            <p className='border-b border-[#9EA5A7] h-[1px] w-full'></p>
                            <h4 className='text-[#ffffffb2] mb-1 font-semibold'>Topics</h4>
                        </div>
                        <div className='text-right max-w-[615px] pl-4'>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Black Hat</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Breaking News</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Cloud Security</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Critical Infrastructure</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Cryptography</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Facebook</Link><br />
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Government</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Hacks</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>IoT</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Malware</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Mobile Security</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Podcasts</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Privacy</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>RSAC</Link><br />
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Security Analyst Summit</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Videos</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Vulnerabilities</Link>
                            <Link className='text-sm pl-3 text-[#ffffff99] hover:text-white transition-all duration-200' to={'/'}>Web Security</Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Footer
