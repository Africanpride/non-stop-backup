/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin,faTiktok, faYoutubeSquare, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"
import BlockCardInner from "../components/blockCardInner";
import BlockOne from "../components/block1";
import parse from 'html-react-parser';
import ctl from "@netlify/classnames-template-literals";
import ImageBlock from '../components/imageBlock';
import ImageBlockXL from '../components/imageBlockBig';
import AspectVideo from '../components/aspectVideo';
import CSMessage from '../components/CSMessage';
import Weather from '../components/weather';
import { faGlobe, faPlay } from "@fortawesome/free-solid-svg-icons";
import GridImages from '../components/gridImages';
import ReactPlayer from 'react-player';
import { motion, Variants } from "framer-motion";
import Twenty from '../components/twenty';
import Message from '../components/message';
import Choir from '../components/Choir'
import LiveFrame from '../components/liveFrame';
import LiveStream from '../components/liveStream';



export default function LiveJs() {


  const topTitleCss = ctl(`mt-6 text-md  text-slate-500 dark:text-yellow-500 font-[montserrat] uppercase`)
  const innertextRender = parse(`Come let us worship the Lord boldly in the spirit of togetherness because we were created to worship and give Him pleasure. To those who have discovered and those who are discovering and also, those who are yet to discover this original purpose of life, We invite you with excitement to join hearts, hands and voices in giving glory and adoration to the Lord in one place. This is the one activity we will not stop doing in Heaven as well as during the millennial reign of Christ on earth. `);

  const sectionCssBlock = ctl(` bg-slate-200 dark:bg-[#000000] md:py-16 rounded-neat m-2 md:m-5 font-[lato] block  min-h-[60vh] break-normal`)
  const miniTitleCss1 = ctl(`mt-8  text-[14px] text-slate-500 dark:text-yellow-400 uppercase font-[montserrat] break-normal`);
  const sectionCss = ctl(`overflow-hidden flex flex-col gap-4 my-5 px-2 md:px-5  md:flex-row justify-center items-center h-auto  break-normal`);
  const sectionCssHome = ctl(`flex flex-col  justify-center items-start text-antoncolor bg-yellow-500  `)
  const squareBoxes = ctl(`relative aspect-square box-border w-24 md:w-28 h-24 md:h-28 p-3 flex justify-center items-center break-normal`)



  const mapLink = <Link href='https://www.google.com.gh/maps?q=logos+rhema+foundation+map&client=ubuntu&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiju6mI__jjAhWJHRQKHek_BtYQ_AUIEigC'><a className='cursor-pointer'> Click For Direction<br />To Location</a></Link>

  const twitterLink = <Link href='https://twitter.com/thenonstopserie'><a className='cursor-pointer'> Follow us Live<br />On Twitter</a></Link>

  const faceBookLink = <Link href='https://www.facebook.com/nonstopseries/'>
    <a className='cursor-pointer'> Follow us Live<br />On FaceBook </a></Link>

const tiktokLink = <Link href='https://www.tiktok.com/@thenonstopseries'><a className='cursor-pointer'> Follow us Live<br />On TikTok </a></Link>


  const youtubeLink = <Link href='https://www.youtube.com/channel/UCszsGdub8qkbJOz_rdx-5IA'>
    <a className='cursor-pointer'>Follow us Live<br />On Youtube </a>
  </Link>


  const gridImages = [
    { imgageSrc: 'mama_pat.jpg' },
    { imgageSrc: 'mama-t.jpg' },
    { imgageSrc: 'flags2.jpg' },
    { imgageSrc: 'marion.jpg' },
    { imgageSrc: 'cs.jpg' },
    { imgageSrc: 'b-singer.jpg' },
    { imgageSrc: 'mettle.jpg' },
    { imgageSrc: 'jerry2.jpg' },
    { imgageSrc: '68_square.jpg' },
  ]

  const liveMinistration = [
    { minister: '24 Elders', time: '6PM - 7PM', image: '24elders.jpg' },
    { minister: '144 Mass Choir', time: '7PM - 8PM', image: '144masschoir.jpg' },
    { minister: 'Dr. Panam', time: '8PM - 9PM', image: 'panam.jpg' },
    { minister: 'Min. Calvin Hammond', time: '9PM - 10PM', image: 'calvin.jpg' }
  ]

  // const sectionCssBlock = ctl(`py-16 rounded-neat m-5 bg-slate-200 dark:bg-slate-800 font-[lato] block  min-h-[60vh]`)
  return <>

    <section className="hidden snap-y relative md:h-[90vh] h-auto w-full  flex-col md:justify-between justify-center gap-4  py-5 md:py-10 ">
      <Image
        layout={`fill`}
        src={`/images/comm.jpg`}
        className={`object-cover object-center overflow-hidden box-border  backdrop-opacity-10	`}
        alt={`Non-Stop Series to the World`}

      />

      <div className='bg-black opacity-30 inset-0 z-10 w-full h-full absolute overlay2'></div>


      <div className=' px-8 z-20 relative '>

        <button type="button" className="bg-black dark:focus:ring-gray-600 dark:hover:bg-black/40 flex focus:ring-4 focus:ring-black/50 font-medium hover:bg-black/80 items-center mb-2 md:w-content mr-2 px-5 py-2.5 rounded-lg text-center text-sm text-white">

          <FontAwesomeIcon icon={faGlobe} className=" text-lg text-yellow-400 h-6 w-6"></FontAwesomeIcon>
          <div className='px-2'>6PM, 31st October - 6PM, 6th November, 2022</div>
        </button>
      </div>

      <div className='flex flex-col items-center justify-between md:flex-row md:items-center overflow-hidden px-8 relative text-clip w-full z-30'>
        <motion.div
          initial={{ translateX: -50, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          // transition={{ staggerChildren: 0.5,
          //     delay: i * 0.5 }}
          transition={{
            ease: [0, 0.1, 0.3, 0.9],
            duration: 5
          }}

          className='relative z-20 font-[anton]  text-2xl md:text-6xl uppercase text-white dark:text-white leading-tight'>
          A Gathering of  Nations For 144 <br />Hours Non-Stop Praise & Worship
        </motion.div>


        <div className='text-gray-900 dark:text-white'>
          <LiveFrame />
          

        </div>
      </div>

      <div className="w-full flex md:flex-row items-center md:items-start justify-start z-30 px-8">
        <h5 className="text-xl font-bold leading-tight text-gray-100 dark:text-white text-left">20th Anniversary Edition<br />@Accra, GH</h5>
      </div>
    </section>
    {/* <Twenty /> */}
    <section className='bg-lightcolor2 dark:bg-gray-900 md:py-32 relative overflow-hidden'>
      <div className='absolute hidden md:block right-0 h-72 w-72 top-0' >
        <Image
          src={`/images/section2.png`}
          alt={`CS Message`}
          layout={`fill`}
          className=''
        />
      </div>

      {/* <CSMessage /> */}
      <LiveStream />

    </section>


    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // transition={{ staggerChildren: 0.5,
      //     delay: i * 0.5 }}
      transition={{
        ease: [0, 0.3, 0.5, 1],
        staggerChildren: 1,
        duration: 3,
        delay: 0.2
      }}
      viewport={{ once: true }}
      className={sectionCss}>

      <ImageBlock imgSrc='/images/john2.jpg' />

      <BlockOne>
        <BlockCardInner
          title={'Youtube'}
          fonts={'font-bold'}
          innerText={youtubeLink}
          displayBottom={true} icon={faYoutubeSquare} />
      </BlockOne>
      <BlockOne>
        <BlockCardInner
          title={'TikTok'}
          fonts={'font-bold'}
          innerText={tiktokLink}
          displayBottom={true} icon={faTiktok} />
      </BlockOne>

      {/* <ImageBlock imgSrc='/images/24hours.jpg' /> */}
      <BlockOne><BlockCardInner fonts={'font-bold'} title={'facebook'} innerText={faceBookLink} icon={faFacebookF} displayBottom={true} /></BlockOne>
      <BlockOne><BlockCardInner title={'Twitter'} fonts={'font-bold'} innerText={twitterLink} icon={faTwitter} numbers={'6 K'} displayBottom={true} /></BlockOne>
      {/* <ImageBlock imgSrc='/images/footerblock.jpg' /> */}
      <Weather />

    </motion.section>
  </>
}