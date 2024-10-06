'use client'
import { notFound, useRouter } from 'next/navigation';
import { DUMMY_NEWS } from '@/data/dummyNews';

function InterceptingNewsImage({ params }: { params: { newsslug: string } }) {
  const router = useRouter();
  const newsItemSlug = params.newsslug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

  if (!newsItem) {
    return notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back}/>
      <dialog className='modal' open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

export default InterceptingNewsImage;
