import { notFound } from 'next/navigation';
import { DUMMY_NEWS } from '@/data/dummyNews';

function NewsImage({ params }: { params: { newsslug: string } }) {
  const newsItemSlug = params.newsslug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

  if (!newsItem) {
    return notFound();
  }
  return (
    <div className="fullScreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

export default NewsImage;
