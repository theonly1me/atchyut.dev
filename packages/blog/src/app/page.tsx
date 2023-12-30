'use client';
import React, { useState, useEffect, ReactElement } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import _ from 'lodash';
import { Page } from '@/types';
import Spinner from './components/Spinner';

export default function Home() {
  const [blogs, setBlogs] = useState<Page[]>();

  useEffect(() => {
    console.log('USE EFFECT TRIGGERED');
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
          {(blogs && blogs.length && (
            <div className="flex flex-col items-center gap-y-8 p-12 pb-14">
              {blogs.map(
                ({
                  pageId,
                  imageUrl,
                  pageName,
                  pageSummary,
                  tags,
                  publishedOn,
                }) => {
                  return (
                    <Card
                      key={pageId}
                      pageId={pageId}
                      pageName={pageName}
                      pageSummary={pageSummary}
                      imageUrl={imageUrl}
                      tags={tags}
                      publishedOn={publishedOn}
                    />
                  );
                }
              )}
            </div>
          )) || (
            <div className="flex justify-center">
              <Spinner />
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
