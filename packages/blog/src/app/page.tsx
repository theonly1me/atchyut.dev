'use client';
import React, { useState, useEffect, ReactElement } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import notionJSX from 'notion-jsx';
import _ from 'lodash';
import { Page } from '@/types';
import Spinner from './components/Spinner';

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
          <div className="flex flex-col items-center gap-y-12">
            {(blogs && blogs.length && (
              <div className="flex flex-col items-center gap-y-8">
                {blogs.map(({ pageId, imageUrl, pageName, pageSummary }) => {
                  return (
                    <Card
                      key={pageId}
                      pageId={pageId}
                      pageName={pageName}
                      pageSummary={pageSummary}
                      imageUrl={imageUrl}
                    />
                  );
                })}
              </div>
            )) || (
              <div className="flex h-screen items-center justify-center">
                <Spinner />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
