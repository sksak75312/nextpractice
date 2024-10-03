import NewsList from '@/components/NewsList';
import { getLatestNews } from '@/lib/news';

function LatestDefault() {
  const news = getLatestNews();
  return (
    <>
      <h2>Latest Page</h2>
      <NewsList news={news} />
    </>
  );
}

export default LatestDefault;
