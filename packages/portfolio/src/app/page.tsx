'use client';

import genpact from '../../public/genpact.png';
import postman from '../../public/postman.png';
import auditLogs from '../../public/audit-logs.jpg';
import secretScanner from '../../public/secret-scanner.jpg';
import sap from '../../public/sap.png';
import apm from '../../public/apm.png';
import godfather from '../../public/godfather.webp';

import Link from './components/Link';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <Navbar origin="home" />
          <div className="flex flex-col items-center gap-y-4">
            <Carousel />
            <div className="p-10 font-normal">
              <h2 className="text-4xl md:text-5xl text-neutral-900 font-bold  pb-2 ">
                Hey there <span className="wave">👋🏼</span>, I&apos;m{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Atchyut
                </span>
                <span className="text-purple-400">.</span>
              </h2>
              <h3 className="text-xl py-2 text-neutral-800 max-w-3xl">
                A fullstack software engineer with over{' '}
                {new Date().getFullYear() - 2017} years of experience building
                cloud-ready, scalable software systems.
              </h3>
              <p className="text-md md:text-justify py-3 leading-8 text-neutral-700 max-w-4xl">
                I currently work at{' '}
                <Link
                  image={postman}
                  text="Postman Inc."
                  href="https://www.postman.com"
                  tooltipPlacement="bottom"
                />
                , where I contribute to exciting endeavors such as the{' '}
                <Link
                  text="Secret Scanner"
                  href="https://go.pstmn.io/secret-scanner"
                  image={secretScanner}
                  tooltipPlacement="bottom"
                />
                ,{' '}
                <Link
                  image={auditLogs}
                  text="Audit Logs"
                  href="https://learning.postman.com/docs/administration/managing-your-team/audit-logs/"
                  tooltipPlacement="bottom"
                />{' '}
                and more. I&apos;ve primarily owned the Secret Scanner, added
                several core features for users including the Postman Enterprise
                customers and scaled the microservice from around 200 requests
                per minute (rpm) to handle throughputs upto 80,000 requests per
                minute (rpm) in order to effectively scan all the realtime user
                events that happen on Postman with its 30 million strong
                userbase. I&apos;ve also had the opportunity to work very
                closely with several Postman Enterprise customers to enhance our
                features that enable them to secure their API workflows.
              </p>
              <p className="text-md py-3 md:text-justify leading-8 text-neutral-700 max-w-4xl">
                Prior to that, up until July 2022, I was employed at{' '}
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
                Asset Management portfolio. I was the primary engineer for
                several microservices including the IoT synchronization engine,
                Alerting service that APM uses. Additionally, I&apos;ve worked
                with several customers to unblock them when they experienced
                issues with APM&apos;s predecessor, Performance Asset Insights.
              </p>
              <p className="text-md py-3 leading-8 md:text-justify text-neutral-700 max-w-4xl">
                Going back to the beginning, I embarked on my coding journey
                back in 2014, when I was still in college, it all started with
                Python and JavaScript, but I&apos;ve worked with a multitude of
                languages and technologies since. In 2017, I started working at{' '}
                <Link
                  href="https://www.genpact.com"
                  text="Genpact"
                  image={genpact}
                  tooltipPlacement="bottom"
                />
                . Over the next 4 years, I&apos;ve collaborated with diverse
                Fortune 500 clients in building their products using various
                technologies.
              </p>
              <p className="text-md py-3 leading-8 md:text-justify text-neutral-700 max-w-4xl">
                Apart from this, I&apos;m a father and also a dog father (yes,
                you read it right... I didn&apos;t mistype{' '}
                <Link
                  text="Godfather"
                  tooltipPlacement="bottom"
                  image={godfather}
                  href="https://en.wikipedia.org/wiki/The_Godfather"
                />
                ), a husband and lastly a lifelong gamer. To reach me, you can
                mail me at{' '}
                <a
                  href="mailto:pulavarthi.preetham@gmail.com"
                  className="underline transition-colors duration-300 hover:text-blue-500"
                >
                  pulavarthi.preetham@gmail.com
                </a>{' '}
                or{' '}
                <a
                  href="mailto:hello@atchyut.dev"
                  className="underline transition-colors duration-300 hover:text-blue-500"
                >
                  hello@atchyut.dev
                </a>
                . You can also reach out to me on any of the social media
                platforms listed below.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
