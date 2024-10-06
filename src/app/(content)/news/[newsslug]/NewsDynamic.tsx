import Link from 'next/link';
import { DUMMY_NEWS } from '@/data/dummyNews';
import { notFound } from 'next/navigation';

function NewsDynamic({ params }: { params: { newsslug: string } }) {
  const newsSlug = params.newsslug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) {
    return notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default NewsDynamic;
