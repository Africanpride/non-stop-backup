/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram,faTiktok, faLinkedin, faYoutubeSquare, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"
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
import LiveStream from '../components/liveStream';



export default function Home() {


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


  // const sectionCssBlock = ctl(`py-16 rounded-neat m-5 bg-slate-200 dark:bg-slate-800 font-[lato] block  min-h-[60vh]`)
  return <>

    <section className="snap-y relative md:h-[90vh] h-auto w-full flex flex-col md:justify-between justify-center gap-4  py-5 md:py-10 ">
      <Image
        layout={`fill`}
        src={`/images/comm.jpg`}
        className={`object-cover object-center overflow-hidden box-border  backdrop-opacity-10	`}
        alt={`Non-Stop Series to the World`}

      />

      <div className='bg-black opacity-30 inset-0 z-10 w-full h-full absolute overlay2'></div>


      <div className=' px-8 z-20 relative '>

        <div className="bg-black dark:focus:ring-gray-600 dark:hover:bg-black/40  focus:ring-4 focus:ring-black/50 font-medium gap-6 hover:bg-black/80 inline-flex items-center mb-2 md:text-center px-5 py-2.5 rounded-lg text-sm text-white">

          <FontAwesomeIcon icon={faGlobe} className=" text-4xl text-yellow-400"></FontAwesomeIcon>
          <div className='px-2'>6PM, 29th October  -  8PM, 4th November, 2023</div>
        </div>
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

          className='relative z-20 font-[anton] text-xl md:text-6xl uppercase text-white dark:text-white leading-tight'>
          A Gathering of  Nations For 144 <br />Hours Non-Stop Praise & Worship
        </motion.div>


        <div className='text-gray-900 dark:text-white'>
          <GridImages />

        </div>
      </div>
<div className="flex flex-col md:flex-row md:justify-between gap-4 text-white text-4xl w-full z-10 px-8">
  <div className="md:text-5xl uppercase font-bold leading-loose  text-left gradient">2023 Edition</div>
  <div className="font-['anton'] leading-tight md:text-xl text-base text-left text-yellow-400 ">Logos-Rhema Foundation<br />La - Accra, Ghana</div>
  </div>

    </section>
    <Twenty />
    <section className='bg-lightcolor2 dark:bg-gray-900 md:py-32 relative overflow-hidden'>
      <div className='absolute hidden md:block right-0 h-72 w-72 top-0' >
        <Image
          src={`/images/section2.png`}
          alt={`CS Message`}
          layout={`fill`}
          className=''
        />
      </div>

      <LiveStream />

    </section>



    <section className={sectionCss}>
      <AspectVideo>

        <BlockCardInner
          title={'Recovery, Revival & Restoration'}
          titleColor={'dark:text-yellow-500 text-slate-500 text-base '}
          innerText={innertextRender}
          fonts={' md:text-xl dark:text-white md:text-justify animate-in fade-in-75'}
          displayBottom={true}
        />
      </AspectVideo>
      {/* <ImageBlock imgSrc='/images/non-stop-logo.jpg' /> */}

      <ImageBlockXL imgSrc={'/images/non-stop-logo.jpg'} innerText={parse('<div></div>')} />
    </section>

    <section className="overflow-hidden  px-2 md:px-5 ">
      <Choir />
    </section>

    <section className={sectionCssBlock}>

      <div className='flex flex-col md:flex-row text-darkcolor  dark:text-lightcolor gap-4 '>

        <div className=" my-10 px-10 pt-6">
          <div className='aspect-square  h-24  w-24  relative '>
            <Image
              src={'/images/sound-waves.png'}
              layout='fill'
              className=''
              alt='The Non-Stop Series'
            />
          </div>

          <h2 className={topTitleCss}>Every Nation’s purpose</h2>
          <p className="mt-4 text-3xl md:text-4xl text-darkcolor  dark:text-lightcolor  font-[lato] font-bold colored_header">
            Purpose? — The Involvement Of The Nations.</p>

          <p className="mt-4 max-w-3xl space-y-6 font-[montserrat] dark:text-greyed"><span className='italic'>Acts 17: 26-28, vs 26</span> {' '}says “From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands. Why did He make it so? Vs 27 sates : “God did this so that they would seek him and reach out for him and find him, though he is not far from any one of us” A nation that is not seeking God is not fulfilling the original purpose of it being created in the first place.</p>

          <div className='py-10'>
            <Link href={'/about'}><button type="button" className="py-2.5 px-10 mr-2 mb-2 text-sm font-medium text-slate-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-900 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn More</button>
            </Link>
          </div>
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
    <section className={sectionCss}>
      <div className="flex md:shadow my-16 md:space-x-5 md:mx-32 w-full max-w-7xl rounded-2xl bg-slate-200 dark:bg-darkcolor ">
        <img alt={'Subscribe to nonstop Series'} src="/images/email.jpg" className="w-0 md:w-1/4 object-cover rounded-l-neat" />

        <div className="px-4 py-5 flex flex-col justify-between w-full ">
          <h3 className="text-4xl text-gray-800 dark:text-gray-100 font-bold font-[montserrat]">Subscribe to newsletter</h3>
          <p className="text-xl text-gray-600 font-[lato]">We send latest news and posts often, fresh from the oven</p>

          <form action="https://thenonstop.us18.list-manage.com/subscribe/post?u=058b79e054f45463cc9ca30d3&id=0a0d474e40&f_id=005918e7f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate className="validate flex flex-col my-6 space-y-4 md:pr-4 w-full">

            <input type="email" name="EMAIL" id="mce-EMAIL" className="required email rounded dark:bg-gray-800 bg-gray-100 dark:text-white px-4 py-2 border focus:border-green-400" placeholder={'Email Address'} />
            <button className="px-4 py-2 rounded bg-slate-800 dark:hover:bg-slate-900 text-gray-100">
              Subscribe
              <i className="bx bx-right-arrow-alt" />
            </button>
          </form>
        </div>
      </div>
    </section>

    <motion.section className={sectionCss}>
      <ImageBlockXL imgSrc={'/images/footerblock.jpg'} innerText={parse('<div></div>')} />
      <AspectVideo>

        <BlockCardInner
          title={'Recovery, Revival & Restoration'}
          titleColor={'dark:text-yellow-500 text-slate-500 text-md '}
          innerText={innertextRender}
          fonts={'text-xl dark:text-white text-justify'}
          displayBottom={true}
        />
      </AspectVideo>
    </motion.section>


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
