import NewsList from '@/components/NewsList';
import { DUMMY_NEWS } from '@/data/dummyNews';

function NewsPage() {
  return (
    <>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

export default NewsPage;
