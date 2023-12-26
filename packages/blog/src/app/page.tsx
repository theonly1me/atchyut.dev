'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import ComingSoon from './components/ComingSoon';

export default function Home() {
  return (
    <div className="bg-white">
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <Navbar />
          <div className="flex items-center justify-center">
            <ComingSoon />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
