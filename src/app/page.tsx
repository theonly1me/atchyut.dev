'use client';

import Head from 'next/head';
import Image from 'next/image';
import { MdOutlinePersonPin } from 'react-icons/md';
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareGithub,
  FaLinkedin,
} from 'react-icons/fa6';
import atchyut from '../../public/atchyut.jpeg';
import genpact from '../../public/genpact.png';
import postman from '../../public/postman.png';
import auditLogs from '../../public/audit-logs.jpg';
import secretScanner from '../../public/secret-scanner.jpg';
import sap from '../../public/sap.png';
import apm from '../../public/apm.png';

import Button from './button';
import Link from './link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>atchyut.dev</title>
        <meta name="description" content="Atchyut Pulavarthi's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between items-center">
            <h1 className="text-xl text-black">atchyut.dev</h1>
            <ul className="flex items-center">
              <li>
                <Button
                  heading="Résumé"
                  href="https://www.icloud.com/iclouddrive/0cb1xJia0vNIPXnDY7e6eGG-A#Atchyut%5FResume"
                >
                  <MdOutlinePersonPin className="text-xl" />
                </Button>
              </li>
            </ul>
          </nav>
          <div className="relative mx-auto rounded-3xl w-60 h-60 mt-20 overflow-hidden pointer-events-none border-4">
            <Image
              src={atchyut}
              alt="Atchyut"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-black p-10 font-medium">
            <h2 className="text-5xl py-2 ">Hey there, I&apos;m Atchyut 👋🏼</h2>
            <h3 className="text-2xl py-2">
              A fullstack software engineer with over{' '}
              {new Date().getFullYear() + 1 - 2017} years of experience.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-4xl">
              I embarked on my professional journey at{' '}
              <Link
                href="https://www.genpact.com"
                text="Genpact"
                image={genpact}
                tooltipPlacement="top"
              />
              , collaborating with diverse Fortune 500 clients in building their
              products, then transitioned to{' '}
              <Link
                text="SAP"
                href="https://www.sap.com"
                tooltipPlacement="top"
                image={sap}
              />{' '}
              where I marked another chapter by working on multiple products
              from the
              <Link
                text="Intelligent Asset Management"
                href="https://www.sap.com/india/products/scm/apm.html"
                image={apm}
                tooltipPlacement="top"
              />{' '}
              portfolio before landing at{' '}
              <Link
                image={postman}
                text="Postman Inc."
                href="https://www.postman.com"
                tooltipPlacement="bottom"
              />
              , where I currently contribute to exciting endeavors such as the{' '}
              <Link
                text="Secret Scanner"
                href="https://go.pstmn.io/secret-scanner"
                image={secretScanner}
                tooltipPlacement="bottom"
              />{' '}
              and the{' '}
              <Link
                image={auditLogs}
                text="Audit Logs"
                tooltipPlacement="bottom"
              />
              .
            </p>
          </div>
          <div className="text-5xl mx-9 mt-15 grid grid-cols-2 md:flex md:gap-16 py-5 justify-center mx-32">
            <a
              href="https://linkedin.com/in/atchyutpulavarthi"
              target="_blank"
              className="hover:scale-105 active:scale-95 transform transition-transform duration-300"
            >
              <FaLinkedin className="fill-blue-600" />
            </a>
            <a
              href="https://github.com/theonly1me"
              target="_blank"
              className="hover:scale-105 active:scale-95 transform transition-transform duration-300"
            >
              <FaSquareGithub className="fill-gray-800" />
            </a>
            <a
              href="https://twitter.com/@tchyut_p"
              target="_blank"
              className="hover:scale-105 active:scale-95 transform transition-transform duration-300"
            >
              <FaSquareXTwitter className="fill-black" />
            </a>
            <a
              href="https://instagram.com/theonly1me"
              target="_blank"
              className="hover:scale-105 active:scale-95 transform transition-transform duration-300"
            >
              <FaSquareInstagram className="fill-rose-500" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
