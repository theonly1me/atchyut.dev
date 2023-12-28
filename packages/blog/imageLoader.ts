import { ImageLoaderProps } from 'next/dist/shared/lib/image-config';

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
