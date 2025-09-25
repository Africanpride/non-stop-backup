import React, { useState, useEffect } from "react";
import BlockOne from "../components/block1";
import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Photobg from "../components/photobg";

import parse from 'html-react-parser';
import ctl from "@netlify/classnames-template-literals";
import ImagineHeader from '../components/Imagine'
import Imagine2 from "../components/Imagine2";

const About = () => {

const [offsetY, setOffsetY] = useState(0);

const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  const sectionCssBlock = ctl(` bg-slate-200 dark:bg-[#000000] md:py-16 rounded-neat m-2 md:m-5 font-[lato] block  min-h-[60vh]`)
  const sectionCssBlockWithImage = ctl(`flex justify-center items-center flex-col rounded-neat relative bg-yellow-500 dark:bg-yellow-800 md:py-16 rounded-neat m-2 md:m-5 font-[lato] block  min-h-[70vh]`)
  const overlay = ctl(`absolute inset-0 bg-blue-600 opacity-25 z-10  rounded-neat	`)
  const squareBoxes = ctl(`relative aspect-square box-border w-24 md:w-28 h-24 md:h-28 p-2 flex justify-center items-center`)
  const topTitleCss = ctl(`mt-6 text-md  text-slate-500 dark:text-yellow-500 font-[montserrat] uppercase`)
  const miniTitle = parse(`For Participation  <span className='text-yellow-500 font-bold'>Information</span> And Other Matters.`)

  const gridImages = [
    { imgageSrc: 'pastorAbu.jpg' },
    { imgageSrc: '144.jpg' },
    { imgageSrc: 'egypt.jpg' },
    { imgageSrc: 'freeman.jpg' },
    { imgageSrc: 'mama_pat.jpg' },
    { imgageSrc: 'mettle.jpg' },
    { imgageSrc: 'jerry2.jpg' },
    { imgageSrc: '68_square.jpg' },
    { imgageSrc: 'uche.jpg' },
  ]

  const topTitle = parse(`About The Series &#8212; Non-Stop Praise & Worship  `)

  return (
  <>
    <section>
      {/* <ImagineHeader bigtitle={`About the Series`} smallTitle={miniTitle} /> */}
      <Imagine2 topTitle={topTitle} bigTitle={'About The Non-Stop Series'} hidden={''} paragraph={`For the past 22 years , the Logos-Rhema Foundation for Leadership Resource Development, based in Accra, Ghana, has organised and held under its auspices, a series of non-stop praise & worship programmes. The series began with 24-hour sessions which   progressed to 48 hours, 72 hours, 96 hours, 120 hours, and now 144 hours; the first session of which was held 2021.`} />
    </section>

    <section className={sectionCssBlock}>

      <div className='flex flex-col md:flex-row gap-4 '>
        <div className="text-left px-5 py-10 text-gray-900 dark:text-white md:flex-row w-full 
        md:w-8/12"   style={{ transform: `translateY(-${offsetY * 0.001}px)` }}>
          <div className='aspect-square  h-20  w-20  relative '>
            <Image
              src='/images/delivery-time.png'
              layout='fill'
              className=''
              alt='The Non-Stop Series'
            />
          </div>
          <h2 className={topTitleCss}>{'Understanding "The Terbanacle of David"'}</h2>

          <h2 className={`mt-2 text-slate-900 text-4xl tracking-tight font-extrabold  dark:text-white 
          colored_header`}>{`Why "Recovery, Revival and the Restoration"`} <br />{`of the Tabernacle of David?`}
          </h2>
          <figure>
            <blockquote>
              <div className='mt-4 max-w-max  text-lg'>
                <p className='mt-4 max-w-3xl space-y-6 font-[montserrat]  
dark:text-greyed' >
                  In the Old Testament days, there was one saint, David, tasted the fruits of the truth of the word of God and the powers of the world to come, he also tasted salvation and experienced the Holy Spirit (Psalm 51). He was able to experience all that because he understood how to touch the heart of the Father (Acts 13:22). Regardless of his weaknesses and many flaws, David genuinely, was out all time to please God and to give Him pleasure. Because the purpose of everyone’s creation as found in Revelations 4:11 is to please and give the Lord, pleasure.</p>
              </div>
            </blockquote>
          </figure>
        </div>
        <div className='md:py-2 w-full md:w-4/12 aspect-square flex justify-center items-center '>
          <div className="grid grid-cols-3 gap-2" style={{ transform: `translateY(-${offsetY * 0.01}px)` }}>
            
            {gridImages.map(({ imgageSrc }) => (

              <div key={imgageSrc} className={squareBoxes}>
                <Image
                  layout='fill'
                  src={`/images/${imgageSrc}`}
                  alt={`The Non-Stop Series`}
                  className={`object-cover object-top rounded-neat `}
                />
              </div>
            )

            )}



          </div>

        </div>
      </div>
    </section>
    <section className={sectionCssBlockWithImage} >
      <div className={overlay}></div>

      <Image
        layout='fill'
        src={`/images/landing_parallax1.jpg`}
        className={`object-cover object-top rounded-neat `}
        alt={`144 HOurs Non-Stop Praise and Worship`}
      />

      <div className='py-16 px-5 max-w-8xl text-center  text-xl md:text-3xl text-white z-20  '>
        <h2 className=" text-lg md:text-4xl font-bold text-slate-400 font-[lato] uppercase">
          {parse('Why the time 6pm &#8212; to &#8212; 6 pm?')}</h2>

        <p className={`mt-4 max-w-3xl space-y-6 font-[montserrat]  dark:text-greyed `}>
          {`As per God’s own reckoning in Genesis Chapter 1, the complete day is evening to evening. The Jews of today still reckon days in this manner. Any one who will be on top and be a high achiever, must follow God’s frame of reckoning time.`}</p>

      </div>
    </section>
    <section className={sectionCssBlock}>

      <div className='flex flex-col md:flex-row gap-4 '>
        <div className=" order-2 px-5 py-10 text-gray-900 dark:text-white md:flex-row w-full 
        md:w-8/12">
          {/* <div className='aspect-square  h-16  w-16  relative '>
            <Image
              src='/images/time.png'
              layout='fill'
              className=''
              alt='The Non-Stop Series'
            />
          </div> */}
          <h2 className={topTitleCss}>Every Nation’s purpose</h2>

          <h2 className="mt-2 text-slate-900 text-4xl tracking-tight font-extrabold  dark:text-white 
          colored_header">{`Why The Involvement Of The Nations?`}
          </h2>
          <figure>
            <blockquote>
              <div className='mt-4 max-w-max  text-lg'>
                <p className='mt-4 max-w-3xl space-y-6 font-[montserrat]  
dark:text-greyed'>
                  Every nation’s purpose in creation is to worship God and to give Him glory. In fact, when it comes to nations, Acts 17: 26-28, vs 26 says “From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands.
                </p>
                <br />
                <p className='mt-4 max-w-3xl space-y-6 font-[montserrat] dark:text-greyed'>
                  Why did He make it so? Vs 27 sates : “God did this so that they would seek him and reach out for him and find him, though he is not far from any one of us” A nation that is not seeking God is not fulfilling the original purpose of it being created in the first place. Vs 28 “For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring.”</p>
              </div>
            </blockquote>
          </figure>
        </div>
        <div className='md:py-2 w-full md:w-4/12 aspect-square flex justify-center items-center '>
          <div className="grid grid-cols-3 gap-2">
            {gridImages.map(({ imgageSrc }) => (

              <div key={imgageSrc} className={squareBoxes}>
                <Image
                  layout='fill'
                  src={`/images/${imgageSrc}`}
                  alt={`The Non-Stop Series`}
                  className={`object-cover object-top rounded-neat`}
                />
              </div>
            )

            )}



          </div>

        </div>
      </div>
    </section>


    <section className={sectionCssBlock}>

      <div className='flex flex-col md:flex-row gap-4 '>
        <div className="text-left px-5 py-10 text-gray-900 dark:text-white md:flex-row w-full 
        md:w-8/12">
          {/* <div className='aspect-square  h-16  w-16  relative '>
            <Image
              src='/images/time.png'
              layout='fill'
              className=''
              alt='The Non-Stop Series'
            />
          </div> */}
          <h2 className={topTitleCss}>Fruitfulness and Security</h2>

          <h2 className="mt-2 text-slate-900 text-4xl tracking-tight font-extrabold  dark:text-white 
          colored_header">{`Continuous "Praise and Worship" of the Lord.`} </h2>
          <figure>
            <blockquote>
              <div className='mt-6 max-w-max  text-lg'>
                <p className='mt-4 max-w-3xl space-y-6 font-[montserrat]  
dark:text-greyed'>
                  {`So, Nations are supposed to be worshiping God. Why? Because according to Psalm 67:3-7, all peoples must praise Him. In vs 6 it says, "then the earth shall yield her increase".

                  So, one of the reasons why certain nations don’t have the kind of fruitfulness and security they should have is because they are not praising God enough. Many people are engaged in continuous praise and worship of the Lord. In fact, the City of Kansas has been doing 24/7 for some years now. We commend and acknowledge those who have also been engaged in things like that.`}</p>
              </div>
            </blockquote>
          </figure>
        </div>
        <div className='md:md:py-2 w-full md:w-4/12 aspect-square flex justify-center items-center '>
          <div className="grid grid-cols-3 gap-2">
            {gridImages.map(({ imgageSrc }) => (

              <div key={imgageSrc} className={squareBoxes}>
                <Image
                  layout='fill'
                  src={`/images/${imgageSrc}`}
                  alt={`The Non-Stop Series`}
                  className={`object-cover object-top rounded-neat`}
                />
              </div>
            )

            )}



          </div>

        </div>
      </div>
    </section>


  </>
)}
export default About