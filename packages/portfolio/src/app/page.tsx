import postman from '../../public/postman.png';
import secretScanner from '../../public/secret-scanner.jpg';
import postmanVault from '../../public/postman-vault.png';
import sap from '../../public/sap.png';
import apm from '../../public/apm.png';
import godfather from '../../public/godfather.webp';

import Link from './components/Link';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <div className="bg-white">
      <main className="px-10 flex flex-col items-center">
        <section className="min-h-screen max-w-4xl">
          <div className="flex flex-col items-center gap-y-4">
            <Carousel />
            <div className="p-10 font-normal">
              <h2 className="text-4xl md:text-5xl text-neutral-900 font-bold pb-2">
                Hey there <span className="wave">👋🏼</span>, I&apos;m{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Atchyut
                </span>
                <span className="text-purple-400">.</span>
              </h2>
              <h3 className="text-xl py-2 text-neutral-800 max-w-3xl">
                A senior fullstack engineer and technical lead with expertise in
                architecting scalable software systems and leading high-impact
                engineering teams
              </h3>
              <p className="text-md md:text-justify py-3 leading-8 text-neutral-700 max-w-4xl">
                Welcome to my website and thanks for visiting! This is probably
                my largest personal slice of the internet (and my favourite one
                too)! Since you are here, I&apos;d like to take a quick moment
                to introduce myself, my skills and how I may be useful to you in
                your SaaS, start up or computer science learning journey.
                I&apos;ve been coding for about 10 years now and been a software
                engineer for over {new Date().getFullYear() - 2017}. It has been
                quite a wonderful journey so far and I have picked up a ton of
                knowledge and skills along the way and if you are interested in
                learning more about my exact skillset you can{' '}
                <Link
                  text="view my up to date résumé"
                  href="https://drive.google.com/file/d/1Kr7MmTc3FAN7a-2xV_pttmjiFoRAAFon/view"
                  tooltipPlacement="bottom"
                />
                .
              </p>
              <p className="text-md py-3 md:text-justify leading-8 text-neutral-700 max-w-4xl">
                I currently work as a senior engineer and technical lead at{' '}
                <Link
                  image={postman}
                  text="Postman"
                  href="https://www.postman.com"
                  tooltipPlacement="bottom"
                />
                , the world&apos;s leading API platform with over 30 million
                users. Here, I&apos;ve had the opportunity to sovle some really
                interesting challenges and build features that are critical in
                enabling our users to build and test their APIs securely. One of
                such features is the{' '}
                <Link
                  text="Postman Secret Scanner"
                  href="https://go.pstmn.io/secret-scanner"
                  image={secretScanner}
                  tooltipPlacement="bottom"
                />
                , which detects leaked secrets, api keys and other sensitive
                data across Postman, helps users remove & revoke these serets
                and protect themselves. More recently, I&apos;ve architected the{' '}
                <Link
                  text="Postman Vault"
                  href="https://go.pstmn.io/vault"
                  image={postmanVault}
                  tooltipPlacement="bottom"
                />{' '}
                which is a secure local storage for users to store and use their
                secrets, it also allows users to fetch secrets from their other
                vaults such as the Azure Key Vault, HashiCorp Vault at runtime
                to use their secrets while working with their APIs. In addition
                to these, I have also worked in developing several other
                features that all integrate together seamlessly to provide our
                users with an intuitive and secure experience while using
                Postman. Prior to that, I was employed at{' '}
                <Link
                  text="SAP"
                  href="https://www.sap.com"
                  tooltipPlacement="bottom"
                  image={sap}
                />{' '}
                where I marked another chapter as one of the core engineers on{' '}
                <Link
                  text="Asset Performance Management"
                  href="https://www.sap.com/india/products/scm/apm.html"
                  image={apm}
                  tooltipPlacement="bottom"
                />{' '}
                which is a vanguard product from the SAP&apos;s Intelligent
                Asset Management portfolio.
              </p>

              <p className="text-md py-3 leading-8 md:text-justify text-neutral-700 max-w-4xl">
                Getting back to the subject, here are some ways I can be of help
                to you:
                <ul className="ml-8 text-left">
                  <li className="list-decimal">
                    I&apos;m always looking to work on challenging projects, so
                    if you have a technical problem that needs solving, you
                    could hire me as a technical advisor or as a a part-time
                    contractor / full-time employee.
                  </li>
                  <li className="list-decimal">
                    I write a{' '}
                    <Link
                      text="blog"
                      href="https://blog.atchyut.dev"
                      tooltipPlacement="bottom"
                    />{' '}
                    where I discuss the challenges I&apos;ve solved, my
                    interests in technology and about programming and computer
                    science in general, so if you&apos;re a fellow software
                    engineer or a student or someone who&apos;s just learning to
                    code, feel free to check it out, I&apos;m sure you&apos;ll
                    learn something new.
                  </li>
                  <li className="list-decimal">
                    If you are looking for advise in tech, your career as a
                    software engineer or just looking to pick my brain, feel
                    free to{' '}
                    <Link
                      text="schedule a meeting"
                      tooltipPlacement="bottom"
                      href="https://cal.com/atchyut"
                    />{' '}
                    with me.
                  </li>
                </ul>
              </p>
              <p className="text-md py-3 md:text-justify leading-8 text-neutral-700 max-w-4xl">
                Now, before you go back to your busy day, I also want to add a
                personal touch by talking about my life and interests. I&apos;m
                a father, dog father (yes, you read it right... I didn&apos;t
                mistype{' '}
                <Link
                  text="Godfather"
                  tooltipPlacement="bottom"
                  image={godfather}
                  href="https://en.wikipedia.org/wiki/The_Godfather"
                />
                ), a husband and also a passionate gamer. I sometimes read books
                (and listen to audiobooks) too, mostly computer science related.
                You can mail me at{' '}
                <a
                  href="mailto:hello@atchyut.dev"
                  className="underline transition-colors duration-300 hover:text-blue-500"
                >
                  hello@atchyut.dev
                </a>
                . You can also follow me or reach out to me on any of the social
                media platforms by clicking the respective icons below.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
