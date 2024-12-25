import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css'
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Main = () => {
    const [active, setActive] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    function hendelClick() {
        setActive(true)
        setActive2(false)
        setActive3(false)
    }
    function hendelClick2() {
        setActive(false)
        setActive2(true)
        setActive3(false)
    }
    function hendelClick3() {
        setActive(false)
        setActive3(true)
        setActive2(false)
    }

    return (
        <div className='bace-container'>
            <div className='flex items-center mb-4'>
                <h4 className='text-xs font-bold text-[#999] pe-3 w-[125px] uppercase'>Featured news</h4>
                <p className='w-full border'></p>
            </div>

            <div className='flex justify-between mb-32'>
                <div className='border-r-2 w-max pe-5'>
                    <div className='w-64 border-b-2 pb-4'>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/06/02111030/octopus-570x285.jpg"
                            className='border-none opacity-75 transition-all hover:opacity-100' width={258} height={129} alt="image" />
                        <h2 className='text-lg text-[#333] font-bold cursor-pointer hover:text-red-800'>Tentacles of ‘0ktapus’ Threat Group Victimize 130 Firms</h2>
                        <p className='mb-1.5 text-sm'>Over 130 companies tangled in sprawling phishing campaign that spoofed a multi-factor authentication system.</p>
                        <div className='text-sm mb-1.5 flex gap-1 items-center'>
                            <i className='text-[#aaa] text-sm'>by</i>
                            <Link to="https://threatpost.com/author/natenelson/">Nate Nelson</Link>
                        </div>
                        <time datetime="2022-08-29T10:56:19-04:00" className='mb-1.5 text-[11px] text-[#aaa]'>August 29, 2022</time>
                    </div>
                    <div className='w-64 pt-7'>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/12/24125329/Ransomware_700_420-570x285.png"
                            className='border-none opacity-75 transition-all hover:opacity-100' width={258} height={129} alt="image" />

                        <h2 className='text-lg text-[#333] font-bold'>
                            <Link
                                className='hover:text-red-800'
                                to='https://threatpost.com/ransomware-attacks-are-on-the-rise/180481/'>
                                Ransomware Attacks are on the Rise
                            </Link>
                        </h2>
                        <p className='mb-1.5 text-sm'>Lockbit is by far this summer’s most prolific ransomware group, trailed by two offshoots of the Conti group.</p>
                        <div className='text-sm mb-1.5 flex gap-1 items-center'>
                            <i className='text-[#aaa] text-sm'>by</i>
                            <Link to="https://threatpost.com/author/natenelson/">Nate Nelson</Link>
                        </div>
                        <time datetime="2022-08-29T10:56:19-04:00" className='mb-1.5 text-[11px] text-[#aaa]'>August 26, 2022</time>
                    </div>
                </div>
                <div className='border-r-2 w-max pe-5'>
                    <div className='w-[546px] border-b-2 pb-4'>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2015/02/07005821/data-570x285.jpg"
                            className='border-none opacity-75 transition-all hover:opacity-100' width={546} height={273} alt="image" />

                        <h2 className='text-2xl text-[#333] font-bold'>
                            <Link
                                className='hover:text-red-800'
                                to='https://threatpost.com/student-loan-breach-exposes-2-5m-records/180492/'>
                                Student Loan Breach Exposes 2.5M Records
                            </Link>
                        </h2>
                        <p className='mb-1.5 text-sm'>2.5 million people were affected, in a breach that could spell more trouble down the line.</p>
                        <div className='flex items-center justify-between'>
                            <div className='text-sm mb-1.5 flex gap-1 items-center'>
                                <i className='text-[#aaa] text-sm'>by</i>
                                <Link to="https://threatpost.com/author/natenelson/">Nate Nelson</Link>
                            </div>
                            <time datetime="2022-08-31T08:57:48-04:00" className='mb-1.5 text-[11px] text-[#aaa]'>August 31, 2022</time>
                        </div>
                    </div>
                    <div className='w-[546px] pt-7 flex '>
                        <div className='w-[288px] px-4'>
                            <h2 className='text-lg text-[#333] font-bold'>
                                <Link
                                    className='hover:text-red-800'
                                    to='https://threatpost.com/watering-hole-attacks-push-scanbox-keylogger/180490/'>
                                    Watering Hole Attacks Push ScanBox Keylogger
                                </Link>
                            </h2>
                            <p className='mb-1.5 text-sm'>Researchers uncover a watering hole attack likely carried out by APT TA423, which attempts to plant the ScanBox JavaScript-based reconnaissance tool.</p>
                            <div className='text-sm mb-1.5 flex gap-1 items-center'>
                                <i className='text-[#aaa] text-sm'>by</i>
                                <Link to="https://threatpost.com/author/natenelson/">Nate Nelson</Link>
                            </div>
                            <time datetime="2022-08-30T12:00:43-04:00" className='mb-1.5 text-[11px] text-[#aaa]'>August 30, 2022</time>
                        </div>
                        <Link className='px-4'>
                            <img
                                src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/03/31170116/watering-hole-570x285.jpg"
                                className='border-none opacity-75 transition-all hover:opacity-100' width={258} height={129} alt="image" />
                        </Link>
                    </div>
                </div>
                <div className='w-max pe-5'>
                    <div className='w-[336px] pb-4'>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/09/05095106/cybersecurity_336_300x2.jpg"
                            className='border-none' width={336} height={300} alt="image" />
                    </div>
                    <div className="w-[336px] h-[445px]">
                        <div className='w-[210px] flex bg-black rounded-t-2xl'>
                            <button
                                onClick={hendelClick}
                                className={`px-[15px] pb-2 pt-2.5 font-semibold text-sm rounded-t-xl transition-all ${active ? 'bg-[#f8f8f8]' : 'bg-black text-[#ccc] hover:text-[#f8f8f8]'}`}>
                                Podcasts
                            </button>
                            <button
                                onClick={hendelClick2}
                                className={`px-[15px] pb-2 pt-2.5 font-semibold text-sm rounded-t-xl transition-all ${active2 ? 'bg-[#f8f8f8]' : 'bg-black text-[#ccc] hover:text-[#f8f8f8]'}`}>
                                Webinars
                            </button>
                            <button
                                onClick={hendelClick3}
                                className={`px-[15px] pb-2 pt-2.5 font-semibold text-sm rounded-t-xl transition-all ${active3 ? 'bg-[#f8f8f8]' : 'bg-black text-[#ccc] hover:text-[#f8f8f8]'}`}>
                                eBooks
                            </button>
                        </div>
                        <div>
                            {
                                active &&
                                <div className='w-[336px] p-[15px] pb-[1px] bg-[#f8f8f8] shadow rounded-xl'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-[#4d4d4d] hover:border-gray-400 hover:text-black transition-all'>Listen Now</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>Inside the Hackers’ Toolkit – Podcast</h2>
                                            <time className='text-sm' datetime="2022-08-10T20:00:00-04:00">August 11, 2022</time>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/06/22110611/threatpost-64x64.jpg"
                                            width={56}
                                            alt="image" />
                                    </div>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-[#4d4d4d] hover:border-gray-400 hover:text-black transition-all'>Listen Now</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>Being Prepared for Adversarial Attacks – Podcast</h2>
                                            <time datetime="2022-06-01T20:00:00-04:00">June 2, 2022</time>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/06/02163615/podcast-64x64.jpg"
                                            width={56}
                                            alt="image" />
                                    </div>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-[#4d4d4d] hover:border-gray-400 hover:text-black transition-all'>Listen Now</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>The State of Secrets Sprawl – Podcast</h2>
                                            <time datetime="2022-05-08T20:00:00-04:00">May 9, 2022</time>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/05/10082012/GitGuardian-Podcast-64x64.png"
                                            width={56}
                                            alt="image" />
                                    </div>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-[#4d4d4d] hover:border-gray-400 hover:text-black transition-all'>Listen Now</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>A Blockchain Primer and a Bored Ape Headscratcher – Podcast</h2>
                                            <time datetime="2022-03-30T20:00:00-04:00">March 31, 2022</time>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/03/30220205/confused-monkey-64x64.jpeg"
                                            width={56}
                                            alt="image" />
                                    </div>
                                </div>
                            }
                            {
                                active2 &&
                                <div className='w-[336px] p-[15px] pb-[1px] bg-[#f8f8f8] shadow rounded-xl'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-red-600 hover:border-gray-400 hover:text-gray-600 transition-all'>On-Demand Webinar</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>Security Innovation: Secure Systems Start with Foundational Hardware</h2>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/06/12164149/intel_1200x627_watch-64x64.jpg"
                                            width={56}
                                            alt="image" />
                                    </div>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-red-600 hover:border-gray-400 hover:text-gray-600 transition-all'>On-Demand Webinar</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>Securely Access Your Machines from Anywhere – Presented by Keeper Security</h2>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/05/22150658/keeper_1500x1500_watch-64x64.jpg"
                                            width={56}
                                            alt="image" />
                                    </div>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-red-600 hover:border-gray-400 hover:text-gray-600 transition-all'>On-Demand Webinar</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>Log4j Exploit: Lessons Learned and Risk Reduction Best Practices</h2>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/02/15091552/Sonatype_1200x627_video-64x64.jpg"
                                            width={56}
                                            alt="image" />
                                    </div>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-red-600 hover:border-gray-400 hover:text-gray-600 transition-all'>On-Demand Webinar</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>How to ID and Protect Sensitive Cloud Data: The Secret to Keeping Secrets</h2>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/02/24152545/keeper_1200x627_video-64x64.jpg"
                                            width={56}
                                            alt="image" />
                                    </div>
                                </div>
                            }
                            {
                                active3 &&
                                <div className='w-[336px] p-[15px] pb-[1px] bg-[#f8f8f8] shadow rounded-xl'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-[#4d4d4d] hover:border-gray-400 hover:text-black transition-all'>Download Your Free Copy</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>Cloud Security: The Forecast for 2022</h2>
                                            <time className='text-sm' datetime="2022-08-10T20:00:00-04:00">August 11, 2022</time>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/02/09093538/Threatpost_1200x627-64x64.jpg"
                                            width={56}
                                            alt="image" />
                                    </div>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-[#4d4d4d] hover:border-gray-400 hover:text-black transition-all'>Download Your Free Copy</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>2021: The Evolution of Ransomware</h2>
                                            <time datetime="2022-06-01T20:00:00-04:00">June 2, 2022</time>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/04/19125653/Threatpost-April-eBook-border-64x64.jpg"
                                            width={56}
                                            alt="image" />
                                    </div>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-[#4d4d4d] hover:border-gray-400 hover:text-black transition-all'>Download Your Free Copy</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>Healthcare Security Woes Balloon in a Covid-Era World</h2>
                                            <time datetime="2022-05-08T20:00:00-04:00">May 9, 2022</time>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/11/07144220/ZeroNorth_SponsoredeBook-1-64x64.jpg"
                                            width={56}
                                            alt="image" />
                                    </div>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='w-[238px]'>
                                            <Link className='inline-block text-[11px] rounded-full border px-2.5 py-1.5 mb-1.5 text-[#4d4d4d] hover:border-gray-400 hover:text-black transition-all'>Download Your Free Copy</Link>
                                            <h2 className='font-bold text-[15px] hover:text-[#e2211c] cursor-pointer transition-all'>2020 in Security: Four Stories from the New Threat Landscape</h2>
                                            <time datetime="2022-03-30T20:00:00-04:00">March 31, 2022</time>
                                        </div>
                                        <img
                                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/07/03072907/Border-64x64.png"
                                            width={56}
                                            alt="image" />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div className='h-10 border-y-2 mb-14'></div>

            <section className='px-4 pt-5 flex items-start'>
                <div>
                    <div className='flex items-center mb-4'>
                        <h4 className='text-xs font-bold text-[#999] pe-3 w-[105px] uppercase'>Latest news</h4>
                        <p className='w-full border'></p>
                    </div>
                    <div className='max-w-[864px] border-b-2 w-full flex items-start justify-between'>
                        <div className='w-[258px] px-[15px] pb-2'>
                            <h2 className='text-lg text-[#333] font-bold cursor-pointer hover:text-red-800'>
                                Cybercriminals Are Selling Access to Chinese Surveillance Cameras
                            </h2>
                            <div className='text-sm mb-1.5 flex gap-1 items-center'>
                                <i className='text-[#aaa] text-sm'>by</i>
                                <Link to="https://threatpost.com/author/natenelson/">Nate Nelson</Link>
                            </div>
                            <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                        </div>
                        <p className='mb-1.5 text-sm text-[#444] max-w-[288px] px-[15px] pb-2'>
                            Tens of thousands of cameras have failed to patch a critical, 11-month-old CVE, leaving thousands of organizations exposed.
                        </p>
                        <img
                            className='px-[15px] opacity-80 hover:opacity-100 cursor-pointer transition-all'
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/11/19110609/iot-540x270.jpg"
                            width={258}
                            alt="" />
                    </div>
                    <div className='max-w-[864px] pt-7 border-b-2 w-full flex items-start justify-between'>
                        <div className='w-[258px] px-[15px] pb-2'>
                            <h2 className='text-lg text-[#333] font-bold cursor-pointer hover:text-red-800'>
                                Twitter Whistleblower Complaint: The TL;DR Version
                            </h2>
                            <div className='text-sm mb-1.5 flex gap-1 items-center'>
                                <i className='text-[#aaa] text-sm'>by</i>
                                <Link to="https://threatpost.com/author/natenelson/">Nate Nelson</Link>
                            </div>
                            <time className='text-[11px] text-[#aaa]' datetime="2022-08-24T14:47:15-04:00">August 24, 2022</time>
                        </div>
                        <p className='mb-1.5 text-sm text-[#444] max-w-[288px] px-[15px] pb-2'>
                            Twitter is blasted for security and privacy lapses by the company’s former head of security who alleges the social media giant’s actions amount to a national security risk.
                        </p>
                        <img
                            className='px-[15px] opacity-80 hover:opacity-100 cursor-pointer transition-all'
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/08/24101017/Twitter-vulnerability-570x285.jpg"
                            width={258}
                            alt="" />
                    </div>
                    <div className='max-w-[864px] pt-7 border-b-2 w-full flex items-start justify-between'>
                        <div className='w-[258px] px-[15px] pb-2'>
                            <h2 className='text-lg text-[#333] font-bold cursor-pointer hover:text-red-800'>
                                Firewall Bug Under Active Attack Triggers CISA Warning
                            </h2>
                            <div className='text-sm mb-1.5 flex gap-1 items-center'>
                                <i className='text-[#aaa] text-sm'>by</i>
                                <Link to="https://threatpost.com/author/natenelson/">Nate Nelson</Link>
                            </div>
                            <time className='text-[11px] text-[#aaa]' datetime="2022-08-23T14:47:15-04:00">August 23, 2022</time>
                        </div>
                        <p className='mb-1.5 text-sm text-[#444] max-w-[288px] px-[15px] pb-2'>
                            CISA is warning that Palo Alto Networks’ PAN-OS is under active attack and needs to be patched ASAP.
                        </p>
                        <img
                            className='px-[15px] opacity-80 hover:opacity-100 cursor-pointer transition-all'
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2018/11/02102344/ddos-protection-title-570x285.jpg"
                            width={258}
                            alt='' />
                    </div>
                    <div className='max-w-[864px] pt-7 border-b-2 w-full flex items-start justify-between'>
                        <div className='w-[258px] px-[15px] pb-2'>
                            <h2 className='text-lg text-[#333] font-bold cursor-pointer hover:text-red-800'>
                                Fake Reservation Links Prey on Weary Travelers
                            </h2>
                            <div className='text-sm mb-1.5 flex gap-1 items-center'>
                                <i className='text-[#aaa] text-sm'>by</i>
                                <Link to="https://threatpost.com/author/natenelson/">Nate Nelson</Link>
                            </div>
                            <time className='text-[11px] text-[#aaa]' datetime="2022-08-22T14:47:15-04:00">August 22, 2022</time>
                        </div>
                        <p className='mb-1.5 text-sm text-[#444] max-w-[288px] px-[15px] pb-2'>
                            Fake travel reservations are exacting more pain from the travel weary, already dealing with the misery of canceled flights and overbooked hotels.
                        </p>
                        <img
                            className='px-[15px] opacity-80 hover:opacity-100 cursor-pointer transition-all'
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2018/05/02171204/traveling-1-540x268.jpg"
                            width={258}
                            alt="" />
                    </div>
                    <div className='max-w-[864px] pt-7 border-b-2 w-full flex items-start justify-between'>
                        <div className='w-[258px] px-[15px] pb-2'>
                            <h2 className='text-lg text-[#333] font-bold cursor-pointer hover:text-red-800'>
                                iPhone Users Urged to Update to Patch 2 Zero-Days
                            </h2>
                            <div className='text-sm mb-1.5 flex gap-1 items-center'>
                                <i className='text-[#aaa] text-sm'>by</i>
                                <Link to="https://threatpost.com/author/natenelson/">Nate Nelson</Link>
                            </div>
                            <time className='text-[11px] text-[#aaa]' datetime="2022-08-19T14:47:15-04:00">August 19, 2022</time>
                        </div>
                        <p className='mb-1.5 text-sm text-[#444] max-w-[288px] px-[15px] pb-2'>
                            Separate fixes to macOS and iOS patch respective flaws in the kernel and WebKit that can allow threat actors to take over devices and are under attack.
                        </p>
                        <img
                            className='px-[15px] opacity-80 hover:opacity-100 cursor-pointer transition-all'
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/07/27112232/zero-day-570x285.jpeg"
                            width={258}
                            alt="" />
                    </div>
                    <div className='max-w-[864px] py-5 flex justify-center'>
                        <button className='max-w-[192px] h-10 px-6 py-2.5 bg-[#e2211c] text-sm font-semibold text-white rounded-full hover:bg-red-700'>Load more latest news</button>
                    </div>
                </div>
                <img
                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/09/05095131/cybersecurity_336_500x2.jpg"
                    width={336}
                    height={500}
                    className='px-4 py-3'
                    alt="image" />
            </section>

            <section className='flex justify-between items-start pt-5 mt-5'>
                <div className='max-w-[379px] w-full'>
                    <div className='flex items-center mb-4'>
                        <h4 className='text-[11px] font-bold text-[#999] pe-3 w-[135px] uppercase'>Most popular</h4>
                        <p className='w-full border'></p>
                    </div>
                    <div className='mb-3 pe-[68px]'>
                        <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Is your Java up to date?</h2>
                        <time className='text-xs text-[#aaa]' datetime="2009-02-23T21:30:18-05:00">February 23, 2009</time>
                    </div>
                    <div className='mb-3 pe-[68px]'>
                        <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Top 5 Tips to Avoid Viruses and Spyware</h2>
                        <time className='text-xs text-[#aaa]' datetime="2009-02-23T21:30:18-05:00">February 23, 2009</time>
                    </div>
                    <div className='mb-3 pe-[68px]'>
                        <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>U.S. needs to investigate cyberweapons</h2>
                        <time className='text-xs text-[#aaa]' datetime="2009-02-24T21:30:18-05:00">February 24, 2009</time>
                    </div>
                    <div className='mb-3 pe-[68px]'>
                        <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Six months later, DNS still taking a hit</h2>
                        <time className='text-xs text-[#aaa]' datetime="2009-02-24T21:30:18-05:00">February 24, 2009</time>
                    </div>
                    <div className='mb-3 pe-[68px]'>
                        <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Pwn2Own 2009: Browsers and smart phones are targets</h2>
                        <time className='text-xs text-[#aaa]' datetime="2009-02-25T21:30:18-05:00">February 25, 2009</time>
                    </div>
                </div>
                <div className='max-w-[379px] w-full'>
                    <div className='flex items-center mb-4'>
                        <h4 className='text-[11px] font-bold text-[#999] pe-3 w-[245px] uppercase'>Newsmaker Interviews</h4>
                        <p className='w-full border'></p>
                    </div>
                    <div className='mb-3 flex items-start justify-between'>
                        <div>
                            <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Protecting Phones From Pegasus-Like Spyware Attacks</h2>
                            <time className='text-xs text-[#aaa]' datetime="2021-02-19T21:30:18-05:00">July 19, 2021</time>
                        </div>
                        <img
                            src='https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/12/22111955/spyware-mobile-64x64.jpg'
                            className='cursor-pointer'
                            width={56}
                            alt="image" />
                    </div>
                    <div className='mb-3 flex items-start justify-between'>
                        <div>
                            <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Telegram Fraudsters Ramp Up Forged <br /> COVID-19 Vaccine Card Sales</h2>
                            <time className='text-xs text-[#aaa]' datetime="2021-02-12T21:30:18-05:00">May 12, 2021</time>
                        </div>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/05/12145806/VaccineCard-64x64.jpg"
                            className='cursor-pointer'
                            width={56}
                            alt="image" />
                    </div>
                    <div className='mb-3 flex items-start justify-between'>
                        <div>
                            <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Spotlight on Cybercriminal Supply Chains</h2>
                            <time className='text-xs text-[#aaa]' datetime="2021-02-22T21:30:18-05:00">April 22, 2021</time>
                        </div>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/04/22125628/cybercrime-jugs-64x64.jpg"
                            className='cursor-pointer'
                            width={56}
                            alt="image" />
                    </div>
                    <div className='mb-3 flex items-start justify-between'>
                        <div>
                            <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Breaking Down Joe Biden’s $10B Cybersecurity ‘Down Payment’</h2>
                            <time className='text-xs text-[#aaa]' datetime="2021-02-25T21:30:18-05:00">January 25, 2021</time>
                        </div>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/01/25141502/Threatpost-Podcast-Promo-TEMPLATE-5-64x64.jpg"
                            className='cursor-pointer'
                            width={56}
                            alt="image" />
                    </div>
                    <div className='mb-3 flex items-start justify-between'>
                        <div>
                            <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>CISOs Prep For COVID-19 Exposure Notification in the Workplace</h2>
                            <time className='text-xs text-[#aaa]' datetime="2021-02-13T21:30:18-05:00">January 13, 2021</time>
                        </div>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/01/12152522/Threatpost-Podcast-Promo-TEMPLATE-4-64x64.jpg"
                            className='cursor-pointer'
                            width={56}
                            alt="image" />
                    </div>
                </div>
                <div className='max-w-[379px] w-full'>
                    <div className='flex items-center mb-4'>
                        <h4 className='text-[11px] font-bold text-[#999] pe-3 w-[285px] uppercase'>Most Recent ThreatLists</h4>
                        <p className='w-full border'></p>
                    </div>
                    <div className='mb-3 flex items-start justify-between'>
                        <div>
                            <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Cyber-Spike: Orgs Suffer 925 Attacks per Week, an All-Time High</h2>
                            <time className='text-xs text-[#aaa]' datetime="2021-02-10T21:30:18-05:00">January 10, 2021</time>
                        </div>
                        <img
                            src='https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/01/10111423/cyberattacks-64x64.jpeg'
                            className='cursor-pointer'
                            width={56}
                            alt="image" />
                    </div>
                    <div className='mb-3 flex items-start justify-between'>
                        <div>
                            <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>PYSA Emerges as Top Ransomware Actor in November</h2>
                            <time className='text-xs text-[#aaa]' datetime="2021-02-22T21:30:18-05:00">December 22, 2021</time>
                        </div>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/12/22133338/ransomware-victory-64x64.jpg"
                            className='cursor-pointer'
                            width={56}
                            alt="image" />
                    </div>
                    <div className='mb-3 flex items-start justify-between'>
                        <div>
                            <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Encrypted & Fileless Malware Sees Big Growth</h2>
                            <time className='text-xs text-[#aaa]' datetime="2021-02-4T21:30:18-05:00">October 4, 2021</time>
                        </div>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/04/22151137/ransomware4-64x64.png"
                            className='cursor-pointer'
                            width={56}
                            alt="image" />
                    </div>
                    <div className='mb-3 flex items-start justify-between'>
                        <div>
                            <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Innovative Proxy Phantom ATO Fraud Ring Haunts eCommerce Accounts</h2>
                            <time className='text-xs text-[#aaa]' datetime="2021-02-30T21:30:18-05:00">September 30, 2021</time>
                        </div>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/09/30125346/ghost-64x64.jpeg"
                            className='cursor-pointer'
                            width={56}
                            alt="image" />
                    </div>
                    <div className='mb-3 flex items-start justify-between'>
                        <div>
                            <h2 className='text-[15px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Women, Minorities Are Hacked More Than Others</h2>
                            <time className='text-xs text-[#aaa]' datetime="2021-02-27T21:30:18-05:00">September 27, 2021</time>
                        </div>
                        <img
                            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/02/25134709/cybercrime-partnerships-64x64.jpg"
                            className='cursor-pointer'
                            width={56}
                            alt="image" />
                    </div>
                </div>
            </section>

            <section className='flex items-start gap-5'>
                <div>
                    <section className='pt-5 flex items-start '>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={1}
                            modules={[Pagination]}
                            className="mySwiper ml-0"
                        >
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/06/22110611/threatpost-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Inside the Hackers’ Toolkit – Podcast</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    This edition of the Threatpost podcast is sponsored by Egress.</p>
                                <div className='w-[121px] py-1.5 mb-1.5 px-2.5 rounded-full text-[11px] text-[#282828bf] bg-[#ffbf00]'>Sponsored Content</div>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/06/02163615/podcast-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[19px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Being Prepared for Adversarial Attacks – Podcast</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    There is no question that the level of threats facing today’s businesses continues to change on a daily basis. So what are the trends that CISOs need to be on the lookout for? For this episode of the Threatpost podcast, I am joined by Derek Manky, Chief Security Strategist & VP Global Threat Intelligence, Fortinet’s […]
                                </p>
                                <div className='w-[121px] py-1.5 mb-1.5 px-2.5 rounded-full text-[11px] text-[#282828bf] bg-[#ffbf00]'>Sponsored Content</div>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-2T14:47:15-04:00">June 2, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/05/10082012/GitGuardian-Podcast-570x285.png"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[18px] text-[#333] font-bold cursor-pointer hover:text-red-800'>The State of Secrets Sprawl – Podcast</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    In this podcast, we dive into the 2022 edition of the State of Secrets Sprawl report with Mackenzie Jackson, developer advocate at GitGuardian. We talk issues that corporations face with public leaks from groups like Lapsus and more, as well as ways for developers to keep their code safe.
                                </p>
                                <div className='w-[121px] py-1.5 mb-1.5 px-2.5 rounded-full text-[11px] text-[#282828bf] bg-[#ffbf00]'>Sponsored Content</div>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/04/14144113/racecar-570x285.png"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Cyberattackers Put the Pedal to the Medal: Podcast</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    Fortinet’s Derek Manky discusses the exponential increase in the speed that attackers weaponize fresh vulnerabilities, where botnets and offensive automation fit in, and the ramifications for security teams.
                                </p>
                                <div className='w-[121px] py-1.5 mb-1.5 px-2.5 rounded-full text-[11px] text-[#282828bf] bg-[#ffbf00]'>Sponsored Content</div>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/03/31160106/apple-with-worm-570x285.jpeg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>MacOS Malware: Myth vs. Truth – Podcast</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    Huntress Labs R&D Director Jamie Levy busts the old “Macs don’t get viruses” myth and offers tips on how MacOS malware differs and how to protect against it.
                                </p>
                                <div className='w-[121px] py-1.5 mb-1.5 px-2.5 rounded-full text-[11px] text-[#282828bf] bg-[#ffbf00]'>Sponsored Content</div>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/03/30220205/confused-monkey-570x285.jpeg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>A Blockchain Primer and a Bored Ape Headscratcher – Podcast</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    Mystified? Now’s the time to learn about cryptocurrency-associated risks: Listen to KnowBe4’s Dr. Lydia Kostopoulos explain blockchain, NFTs and how to stay safe.
                                </p>
                                <div className='w-[121px] py-1.5 mb-1.5 px-2.5 rounded-full text-[11px] text-[#282828bf] bg-[#ffbf00]'>Sponsored Content</div>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/03/23160529/attack-robot-540x270.jpeg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Top 3 Attack Trends in API Security – Podcast</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    Bots & automated attacks have exploded, with attackers and developers alike in love with APIs, according to a new Cequence Security report. Hacker-in-residence Jason Kent explains the latest.
                                </p>
                                <div className='w-[121px] py-1.5 mb-1.5 px-2.5 rounded-full text-[11px] text-[#282828bf] bg-[#ffbf00]'>Sponsored Content</div>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/03/16150120/dirty-window-squeegee-570x285.jpeg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Reporting Mandates to Clear Up Feds’ Hazy Look into Threat Landscape – Podcast</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    It’s about time, AttackIQ’s Jonathan Reiber said about 24H/72H report deadlines mandated in the new spending bill. As it is, visibility into adversary behavior has been muck.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2022/03/14135557/salary-HR-bonus-calculator-570x285.jpeg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Staff Think Conti Group Is a Legit Employer – Podcast</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    The ransomware group’s benefits – bonuses, employee of the month, performance reviews & top-notch training – might be better than yours, says BreachQuest’s Marco Figueroa.
                                </p>
                                <div className='w-[121px] py-1.5 mb-1.5 px-2.5 rounded-full text-[11px] text-[#282828bf] bg-[#ffbf00]'>Sponsored Content</div>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                        </Swiper>
                    </section>

                    <section className='pt-5 flex items-start '>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={1}
                            modules={[Pagination]}
                            className="mySwiper ml-0"
                        >
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/07/22170321/oilrig-570x285.jpeg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Lyceum APT Returns, This Time Targeting Tunisian Firms</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    The APT, which targets Middle-Eastern energy firms & telecoms, has been relatively quiet since its exposure but not entirely silent. It’s kept up attacks through 2021 and is working on retooling its arsenal yet again.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/11/19110609/iot-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[19px] text-[#333] font-bold cursor-pointer hover:text-red-800'>National Surveillance Camera Rollout Roils Privacy Activists</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    TALON, a network of smart, connected security cameras developed by the Atlanta-based startup and installed by law enforcement around the country, raises surveillance-related privacy concerns.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-2T14:47:15-04:00">June 2, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/02/25134709/cybercrime-partnerships-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[18px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Malware Gangs Partner Up in Double-Punch Security Threat</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    From TrickBot to Ryuk, more malware cybercriminal groups are putting their heads together when attacking businesses.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/02/11095955/Business-Email-Compromise-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>How Email Attacks are Evolving in 2021</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    The money being wire transferred by business email compromise victims is on the rise, as cybersecurity criminals evolve their tactics.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/10/06094956/apple-mac-security-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Patrick Wardle on Hackers Leveraging ‘Powerful’ iOS Bugs in High-Level Attacks</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    Noted Apple security expert Patrick Wardle discusses how cybercriminals are stepping up their game in targeting Apple users with new techniques and cyberattacks.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/12/02155123/covid19-healthcare-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Ransomware and IP Theft: Top COVID-19 Healthcare Security Scares</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    From ransomware attacks that crippled hospitals, to espionage attacks targeting COVID-19 vaccine supply chain, Beau Woods discusses the top healthcare security risks.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/09/25150114/Bug-Bounty-Code_small-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>How the Pandemic is Reshaping the Bug-Bounty Landscape</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    Bugcrowd Founder Casey Ellis talks about COVID-19’s impact on bug bounty hunters, bug bounty program adoption and more.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2018/10/24152937/Magento_Ecomerce-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Experts Weigh in on E-Commerce Security Amid Snowballing Threats</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    How a retail sector reeling from COVID-19 can lock down their online systems to prevent fraud during the upcoming holiday shopping spike.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2020/08/20152536/voting-570x285.jpeg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Cybercriminals Step Up Their Game Ahead of U.S. Elections</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    Ahead of the November U.S. elections, cybercriminals are stepping up their offensive in both attacks against security infrastructure and disinformation campaigns – but this time, social media giants, the government and citizens are more prepared.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                        </Swiper>
                    </section>

                    <section className='pt-5 flex items-start '>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={1}
                            modules={[Pagination]}
                            className="mySwiper ml-0"
                        >
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/12/24125044/malware-2019_700-x-420-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Biggest Malware Threats of 2019</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    2019 was another banner year for bots, trojans, RATS and ransomware. Let’s take a look back.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/12/18105739/IoT-2019-disastors--570x285.png"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[19px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Top 10 IoT Disasters of 2019</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    From more widescale, powerful distributed denial of service (DDoS) attacks, to privacy issues in children’s connected toys, here are the top IoT disasters in 2019.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-2T14:47:15-04:00">June 2, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2018/12/11133718/malware-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[18px] text-[#333] font-bold cursor-pointer hover:text-red-800'>2019 Malware Trends to Watch</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>Here are 10 top malware trends to watch for in the New Year.</p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2018/12/19183445/Hacker-year-in-review-20182-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Top 2018 Security and Privacy Stories</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>The top cybersecurity and privacy trends that biggest impact in 2018.</p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2018/12/21120506/intro-570x285.png"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>2019: The Year Ahead in Cybersecurity</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>What are the top cyber trends to watch out for in 2019? Here’s what we’re hearing.</p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2015/02/07005821/data-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>2018: A Banner Year for Breaches</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>A look back at the blizzard of breaches that made up 2018. </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/12/30144352/2020_digital-570x285.png"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>2020 Cybersecurity Trends to Watch</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    Mobile becomes a prime phishing attack vector, hackers will increasingly employ machine learning in attacks and cloud will increasingly be seen as fertile ground for compromise.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/12/23174757/Mobile-threats-2019-570x285.jpg"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Top Mobile Security Stories of 2019</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    Cybercrime increasingly went mobile in 2019, with everything from Apple iPhone jailbreaks and rogue Android apps to 5G and mobile-first phishing dominating the news coverage. Here are Threatpost’s Top 10 mobile security stories of 2019.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                            <SwiperSlide className='max-w-[280px] w-full px-[15px]'>
                                <img
                                    src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/12/19132619/slideshow-fb-1-570x285.png"
                                    width={258}
                                    alt="image" />
                                <h2 className='text-[17px] text-[#333] font-bold cursor-pointer hover:text-red-800'>Facebook Security Debacles: 2019 Year in Review</h2>
                                <p className='mb-1.5 text-sm text-[#444] max-w-[288px] pb-2'>
                                    2019 was a tumultuous year for Facebook as it continued to grapple with privacy fallout after Cambridge Analytica, as well as dealing with a slew of security challenges.
                                </p>
                                <time className='text-[11px] text-[#aaa]' datetime="2022-08-25T14:47:15-04:00">August 25, 2022</time>
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </div>
                <img className='italic text-[#e2211c] text-lg cursor-pointer mt-5' src="" alt="Cybersecurity for your growing business" />
            </section>

        </div>
    )
}

export default Main
