import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import {TbBrowser} from 'react-icons/tb'
import Image from 'next/image'
import pfp from '/public/newpfp2bg.png'
import lexicon from '/public/lexicon.png'
import popin from '/public/popin.png'
import meme from '/public/meme.png'
import tinyblog from '/public/tinyblog.png'
import portfolio from '/public/portfolio.png'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>claudia&apos;s portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-24 px-5 bg-four font-quicksand">
        <section className="h-screen">
          {/* <nav className="mb-1 flex justify-between">
            <h1 className=" text-lg">welcome :)</h1>
            <ul className=" flex items-center">
              <li><BsFillMoonStarsFill className=" cursor-pointer text-xl"/></li>
              <li>
                <a href="#" className=" text-sm px-5 py-2 bg-three rounded ml-5">resume</a>
                </li>
            </ul>
          </nav> */}
          <div className='relative mx-auto bg-five rounded-full shadow-lg w-64 h-64 overflow-hidden md:h-80 md:w-80'>
            <Image src={pfp} alt="pfp" layout="fill" objectFit='cover'/>
          </div>
          <div className=" text-center p-5 text-one">
            <h2 className=" text-2xl font-bold md:text-4xl">claudia pereira carion</h2>
            <h3 className=" text-xl py-2 md:text-2xl">fullstack javascript developer</h3>
            <p className='text-md md:text-lg'>educator turned developer with a passion for creativity</p>
          </div>
          <div className='text-4xl flex justify-center gap-20 py-3 text-one'>
            <a href="https://www.linkedin.com/in/claudia-pereira-carion/"><AiFillLinkedin className='cursor-pointer hover:text-two hover:text-5xl'/></a>
            <a href="https://github.com/claudiacarion"><AiFillGithub className='cursor-pointer hover:text-two hover:text-5xl'/></a>
            <a href="mailto:claudia.carion@appliedtechnology.se"><MdEmail className='cursor-pointer hover:text-two hover:text-5xl'/></a>
          </div>
        </section>

        <section className="text-one mb-24">
        <div className=" text-center p-5">
        <h2 className=" text-2xl font-bold text-center py-5">about me</h2>
        <p className='text-md text-left md:mx-12 lg:mx-48 border-2 border-black'>
        For as long as I can remember, I&#39;ve been fascinated by computers.
        It amazed me that with a few clicks here and there, the computer would do things I wanted it to do.
        So I&#39;m not exaggerting when I say my mind was blown the first time I was introduced to HTML.
        What?! I typed a bunch of of things on Notepad and it turned into a website?! That was the Y2K.
        <br/>
        <br/>
        Since then, no matter what I was studying or which field I was working in, I was always led back to computers.
        After working in education for many years, I decided to combine my passion for creativity with my interest in computers and become a developer.
        The opportunity to join a bootcamp at School of Applied Technology in Stockholm came up and I jumped at the chance.
        After an intensive 3-month course as one of over 1000 applicants, I graduated as a fullstack Javascript developer.
        </p>
          </div>
        </section>

        <section className="bg-three py-5 px-5 rounded-lg text-one md:mx-12 lg:mx-48">
          <h2 className=" text-2xl font-bold text-center">my projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-5">
            <div className=" bg-five w-full rounded-lg shadow-lg p-5 h-96">
              <h3 className=" text-lg font-bold text-center pb-3 md:text-xl">the friendly lexicon</h3>
              <p className=" text-center text-sm h-1/4 md:text-md">frontend project created with react and typescript, styled with tailwindcss</p>
              <div className='w-full h-1/2'>
              <Image src={lexicon} alt="lexicon" className='relative mx-auto shadow-lg w-full h-auto md:w-2/3 rounded-lg'/>
              </div>
              <div className="flex justify-center gap-12">
              <a href="https://the-friendly-lexicon.netlify.app/"><TbBrowser className='text-2xl mt-5 cursor-pointer hover:text-two'/></a>
              <a href="https://github.com/claudiacarion/the-friendly-lexicon"><AiFillGithub className='text-2xl mt-5 cursor-pointer hover:text-two'/></a>
            </div>
            </div>
            <div className=" bg-five w-full rounded-lg shadow-lg p-5 h-96">
              <h3 className="text-lg font-bold text-center pb-3 md:text-xl">pop-in</h3>
              <p className=" text-center text-sm h-1/4 md:text-md">final project at school of applied technology, fullstack app created with nextjs, nextauth and mongodb, styled with css</p>
              <div className='w-full h-1/2'>
              <Image src={popin} alt="lexicon" className='relative mx-auto shadow-lg rounded-lg w-full h-auto md:w-2/3'/>
              </div>
              <div className="flex justify-center gap-12">
              <a href="https://dashing-taffy-506794.netlify.app/"><TbBrowser className='text-2xl mt-5 cursor-pointer hover:text-two'/></a>
            </div>
            </div>
            <div className=" bg-five w-full rounded-lg shadow-lg p-5 h-96">
              <h3 className="text-lg font-bold text-center pb-3 md:text-xl">golden (meme) retriever</h3>
              <p className=" text-center text-sm h-1/4 md:text-md">my first fullstack project at school of applied technology, created with react and express, styled with css</p>
              <div className='w-full h-1/2'>
              <Image src={meme} alt="lexicon" className='relative mx-auto shadow-lg w-full h-auto rounded-lg md:w-2/3'/>
          </div>
              <div className="flex justify-center gap-12">
              <a href="https://github.com/claudiacarion/goldenmemeretriever"><AiFillGithub className='text-2xl mt-5 cursor-pointer hover:text-two'/></a>
            </div>
            </div>
            <div className=" bg-five w-full rounded-lg shadow-lg p-5 h-96">
              <h3 className="text-lg font-bold text-center pb-3 md:text-xl">my portfolio</h3>
              <p className=" text-center text-sm h-1/4 md:text-md">frontend app created with nextjs and typescript, styled with tailwindcss</p>
              <div className='w-full h-1/2'>
              <Image src={portfolio} alt="lexicon" className='relative mx-auto shadow-lg w-full rounded-lg md:w-2/3'/>
              </div>
              <div className="flex justify-center gap-12">
              <a href="https://github.com/claudiacarion/claudiacarion-portfolio"><AiFillGithub className='text-2xl mt-5 cursor-pointer hover:text-two'/></a>
            </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
