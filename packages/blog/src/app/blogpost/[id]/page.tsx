'use client';
import React, { useState, useEffect, ReactElement } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import _ from 'lodash';
import { Page } from '@/types';
import Blog from '@/app/components/Blog';
import { TiArrowBack } from 'react-icons/ti';
import Link from 'next/link';

export default function Home() {
  const elements: ReactElement[] = [];
  const [blogs, setBlogs] = useState<Page[]>();
  const [page, setPage] = useState<ReactElement[]>(elements);

  useEffect(() => {
    fetch('/api/fetchBlogs')
      .then(res => res.json())
      .then((d: Page[]) => {
        setBlogs(d);
      });
  }, []);

  return (
    <div className="bg-white">
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <Navbar />
          <div className="flex flex-col items-center gap-y-6">
            <Link
              href="/"
              className="text-neutral-700 hover:text-blue-500 flex flex-col items-center gap-2 transition-all duration-200"
            >
              <TiArrowBack className="text-xl " />{' '}
              <span className="hover:underline">Back to all blogs</span>
            </Link>
            <div className="flex flex-col items-center gap-y-12">
              <Blog />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
