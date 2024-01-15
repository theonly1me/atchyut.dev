import Blog from '@/app/components/Blog';
import { TiArrowBack } from 'react-icons/ti';
import Link from 'next/link';
import { BlogpostProps } from '@/types';

export default function Home({
  params,
  searchParams,
}: Readonly<BlogpostProps>) {
  return (
    <div className="bg-white">
      <main className="px-10 flex flex-col items-center my-10">
        <section className="min-h-screen max-w-4xl">
          <div className="flex flex-col items-center gap-y-6">
            <Link
              href="/"
              className="text-neutral-700 hover:text-blue-500 flex flex-col items-center gap-2 transition-all duration-200"
            >
              <TiArrowBack className="text-xl " />{' '}
              <span className="hover:underline">Back to all blogs</span>
            </Link>
            <div className="flex flex-col items-center gap-y-12">
              <Blog
                pageId={params.id}
                title={searchParams?.title}
                publishedOn={searchParams.publishedOn}
                imageUrl={searchParams.imageUrl}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
