'use client';
import { useState, useEffect } from 'react';
import NewsList from '@/components/NewsList';
import { DUMMY_NEWS } from '@/data/dummyNews';

function NewsPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    (async () => {
      setIsLoading((pre) => !pre);

      const response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setErrorMessage('Failed to fetch news.');
        setIsLoading((pre) => !pre);
      }

      const news = await response.json();
      setIsLoading((pre) => !pre);
      setNews(news);
    })();
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return <>{newsContent}</>;
}

export default NewsPage;
