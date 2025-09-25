import React from 'react'
import BlockOne from "../components/block1";
import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Photobg from "../components/photobg";
import Imagine2 from "../components/Imagine2"

import parse from 'html-react-parser';
import ctl from "@netlify/classnames-template-literals";
import ImagineHeader from '../components/Imagine'

const History = () => {

    const sectionCssBlock = ctl(`bg-slate-200 dark:bg-[#000000] font-[lato] m-2 md:m-5 min-h-[60vh] md:py-16 rounded-neat`)
    const sectionCssBlockWithImage = ctl(`flex justify-center items-center flex-col rounded-neat relative 
    bg-yellow-500 dark:bg-yellow-800 py-16 rounded-neat m-2 md:m-5 font-[lato] block  min-h-[70vh]`)
    const overlay = ctl(`absolute inset-0 bg-blue-600 opacity-25 z-10  rounded-neat	`)
    const squareBoxes = ctl(`relative aspect-square box-border w-24 md:w-28 h-24 md:h-28 p-3 flex justify-center items-center`)
    const miniTitle = parse(`Thank you in  <span className='text-yellow-500 font-bold'>Advance</span> For Your Contributions.`)
    const paragraph = parse(`The 24-hour sessions ran for 11 years mostly at the auditorium of Logos-Rhema Foundation For Leadership Resource Development, and also at venues including the  Trade Fair Conference Centre, La Palm Royal Beach Hotel and at the National Theatre in Accra. `)
    const topTitle = parse(`The Upward Journey`)


    const gridImages = [
        { imgageSrc: 'pastorAbu.jpg' },
        { imgageSrc: 'mama_pat.jpg' },
        { imgageSrc: 'egypt.jpg' },
        { imgageSrc: 'freeman.jpg' },
        { imgageSrc: 'mettle.jpg' },
        { imgageSrc: 'jerry2.jpg' },
        { imgageSrc: 'david.jpg' },
        { imgageSrc: '68_square.jpg' },
        { imgageSrc: '144.jpg' },
    ]

    return (
        <>
    <section>
      {/* <ImagineHeader bigtitle={`About the Series`} smallTitle={miniTitle} /> */}
      <Imagine2 topTitle={topTitle} bigTitle={'19+ Years Non-Stop & More'} hidden={''} paragraph={`For the past 22 years , the Logos-Rhema Foundation for Leadership Resource Development, based in Accra, Ghana, has organised and held under its auspices, a series of non-stop praise & worship programmes. The series began with 24-hour sessions which   progressed to 48 hours, 72 hours, 96 hours, 120 hours, and now 144 hours; the first session of which was held 2021.`} />
    </section>

            <section className={sectionCssBlock}>

                <div className='flex flex-col md:flex-row md:justify-between md:items-center md:space-x-5 px-5 py-5 space-y-10'>
                    <div className="dark:text-white text-gray-900 text-left w-full md:w-9/12">
                        <div className='aspect-square  h-20  w-20  relative '>
                            <Image
                                src='/images/time2.svg'
                                layout='fill'
                                className=''
                                alt='The Non-Stop Series'
                            />
                        </div>
                        <h2 className="mt-3 text-md font-bold text-slate-500 dark:text-yellow-500 font-[montserrat]">{`We Appreciate your Donations`}</h2>

                        <h2 className="mt-2 text-slate-900 text-4xl tracking-tight font-extrabold  dark:text-white 
            colored_header">
                {`Beginnings - 11 years of 24-hour Sessions`}
                        </h2>
                        <figure>
                            <blockquote>
                                <div className='mt-4 max-w-max  text-lg'>
                                    <p className='mt-4 max-w-3xl space-y-6 font-[montserrat]  dark:text-greyed'>
                                        {`The 24-hour sessions ran for 11 years mostly at the auditorium of Logos-Rhema Foundation For Leadership Resource Development, and also at venues including the  Trade Fair Conference Centre, La Palm Royal Beach Hotel and at the National Theatre in Accra. `} </p>
                                        <br />

                                </div>
                                <div className='mt-4 max-w-max  text-lg'>
                                    <p className='mt-4 max-w-3xl space-y-6 font-[montserrat]  dark:text-greyed'>
                                        {`Then, in 2014 and 2015, the duration of the praise and worship programme  duration grew by 24 hours each year, being held for 48 and 72 hours respectively. Both the 2014 and 2015 programmes took place at the auditorium of the Logos-Rhema Foundation for Leadership Resource Development, and since then, subsequent sessions have been held there till date.`} </p>
                                        <br />

                                </div>
                            </blockquote>
                        </figure>
                    </div>
                    <div className=' w-full md:w-3/12  '>
                    <article className="rounded-xl border border-gray-900   p-4 hidden md:invisible">
                        <div className="flex items-center">
                            <div className='w-24 h-24 relative shadow-xl'>
                            <Image 
                            src={'/images/144-scaled.jpg'}
                            layout='fill'
                            alt='144 Non Stop Praise and Worship'
                            objectFit='fit'
                            className='object-cover object-center absolute rounded-neat  '
                            />
                            </div>

                            <div className="ml-3">
                                <h5 className="text-lg font-medium text-slate-900 dark:text-white">144 Non-Stop Praise & Worship</h5>

                                <div className="hidden">
                                    <ul className="-m-1 flex flex-wrap">
                                        <li className="p-1 leading-none">
                                            <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
                                        </li>

                                        <li className="p-1 leading-none">
                                            <a href="#" className="text-xs font-medium text-gray-300"> GitHub </a>
                                        </li>

                                        <li className="p-1 leading-none">
                                            <a href="#" className="text-xs font-medium text-gray-300">Website</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ul className="mt-4 space-y-2 dark:text-white text-slate-900" >
                            <li>
                                <a href="#" className="block h-full rounded-lg border hover:bg-teal-400 hover:text-white dark:hover:text-black border-teal-700 p-4 ">
                                    <h5 className="font-medium ">Ecobank Account Details</h5>

                                    <p className="mt-1 text-xs font-medium ">
                                    <div>Account Name: LOGOS-RHEMA FOUNDATION (SWN)</div>
                                    <div>Branch: Ecobank Main Branch Accra.</div>
                                    <div>GHS: 1441001094374</div>
                                    <div>USD FX: 3441001094375</div>
                                    <div>SWIFT CODE: ECOCGHAC</div>
                                    </p>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="block h-full rounded-lg border hover:bg-yellow-400 hover:text-white dark:hover:text-black border-gray-700 p-4 hover:border-yellow-500">
                                    <h5 className="font-medium">MTN MoMo Details</h5>

                                    <p className="mt-1 text-xs font-medium ">
                                    <div>Merchant ID: 555461</div>
                                    <div>MTN Momo: 0248739685</div>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </article>

                    </div>
                </div>
            </section>
            <section className={sectionCssBlock}>

                <div className='flex flex-col md:flex-row md:justify-between md:items-center md:space-x-5 px-5 py-5 space-y-10'>
                    <div className="dark:text-white text-gray-900 text-left">
                        <div className='aspect-square  h-20  w-20  relative '>
                            <Image
                                src='/images/musical-notes3.png'
                                layout='fill'
                                className=''
                                alt='The Non-Stop Series'
                            />
                        </div>
                    <h2 className="mt-3 text-md font-bold text-slate-500 dark:text-yellow-500 font-[montserrat]">{parse(`Kingdom Impact in Fruitful Dimensions`)}</h2>

                        <h2 className="mt-2 text-slate-900 text-4xl tracking-tight font-extrabold  dark:text-white 
            colored_header">
                {parse(`HIS Government&#8212;Upon the Nations`)}
                        </h2>
                        <figure>
                            <blockquote>
                                <div className='mt-4 max-w-max  text-lg'>
                                    <p className='mt-4 max-w-3xl space-y-6 font-[montserrat]  dark:text-greyed'>
                                        {`From 2016, the session grew yet again by 24 hours, now spanning a total of 96 hours and this occurred for three consecutive years. In the year 2019, the first 120 hours non-stop praise and worship event was held with a second one in 2020. And then in 2021, the first-ever 144-hour session of the non-stop series was held in 2021.`} </p>
                                        <br />

                                </div>
                                <div className='mt-4 max-w-max  text-lg'>
                                    <p className='mt-4 max-w-3xl space-y-6 font-[montserrat]  dark:text-greyed'>
                                        {`These non-stop praise and worship programmes have so far, all been held in Ghana, by and through the diligent efforts of ministries and music ministers from various nations, partnering together in promoting kingdom impact in fruitful dimensions, through the platforms of Music, Bible-Reading and Prayer. We understand and believe that in giving the Almighty God this platform on the earth, we literally bring His government to bear upon nations of the earth as it is in Heaven!`} </p>
                                        <br />

                                </div>
                            </blockquote>
                        </figure>
                    </div>
                    <div className=' w-full md:w-3/12  '>
                    <article className="rounded-xl border border-gray-900   p-4 hidden md:invisible">
                        <div className="flex items-center">
                            <div className='w-24 h-24 relative shadow-xl'>
                            <Image 
                            src={'/images/144-scaled.jpg'}
                            layout='fill'
                            alt='144 Non Stop Praise and Worship'
                            objectFit='fit'
                            className='object-cover object-center absolute rounded-neat  '
                            />
                            </div>

                            <div className="ml-3">
                                <h5 className="text-lg font-medium text-slate-900 dark:text-white">144 Non-Stop Praise & Worship</h5>

                                <div className="hidden">
                                    <ul className="-m-1 flex flex-wrap">
                                        <li className="p-1 leading-none">
                                            <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
                                        </li>

                                        <li className="p-1 leading-none">
                                            <a href="#" className="text-xs font-medium text-gray-300"> GitHub </a>
                                        </li>

                                        <li className="p-1 leading-none">
                                            <a href="#" className="text-xs font-medium text-gray-300">Website</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ul className="mt-4 space-y-2 dark:text-white text-slate-900" >
                            <li>
                                <a href="#" className="block h-full rounded-lg border hover:bg-teal-400 hover:text-white dark:hover:text-black border-teal-700 p-4 ">
                                    <h5 className="font-medium ">Ecobank Account Details</h5>

                                    <p className="mt-1 text-xs font-medium ">
                                    <div>Account Name: LOGOS-RHEMA FOUNDATION (SWN)</div>
                                    <div>Branch: Ecobank Main Branch Accra.</div>
                                    <div>GHS: 1441001094374</div>
                                    <div>USD FX: 3441001094375</div>
                                    <div>SWIFT CODE: ECOCGHAC</div>
                                    </p>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="block h-full rounded-lg border hover:bg-yellow-400 hover:text-white dark:hover:text-black border-gray-700 p-4 hover:border-yellow-500">
                                    <h5 className="font-medium">MTN MoMo Details</h5>

                                    <p className="mt-1 text-xs font-medium ">
                                    <div>Merchant ID: 555461</div>
                                    <div>MTN Momo: 0248739685</div>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </article>

                    </div>
                </div>
            </section>
            <section className={sectionCssBlockWithImage} >
      <div className={overlay}></div>

      <Image
        layout='fill'
        src={`/images/comm.jpg`}
        className={`object-cover object-top rounded-neat z-0`}
        alt={`144 HOurs Non-Stop Praise and Worship`}
      />

      <div className='py-16 px-5 max-w-8xl text-center  text-xl md:text-4xl z-10  '>
        {/* <h2 className=" text-xl md:text-4xl font-bold text-yellow-400 font-[lato] uppercase">
          {parse('Why the time 6pm &#8212; to &#8212; 6 pm?')}</h2> */}

        <p className={` max-w-5xl space-y-6 font-[montserrat] text-lightcolor  dark:text-greyed font-bold leading-tight`}>
          {`The idea of ascribing to the Lord, the glory, praise, worship and adoration rightfully due Him is solely hinged on the desire to touch the heart of our Maker. The Psalmist, King David, was described by God Himself as “a man after my own heart” simply because he never failed to do the one thing that gladdens the heart of our Maker – praising and worshipping.`}</p>

      </div>
    </section>




        </>
    )
}
export default History