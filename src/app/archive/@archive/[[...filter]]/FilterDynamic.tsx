import Link from 'next/link';
import { notFound } from 'next/navigation'
import NewsList from '@/components/NewsList';
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from '@/lib/news';

function FilterDynamic({ params }: { params: { filter: string[] } }) {
  const filterParams = params.filter;
  const selectedYear = filterParams?.[0];
  const selectedMouth = filterParams?.[1];

  let news;
  let links = getAvailableNewsYears();
  if (selectedYear && !selectedMouth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMouth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMouth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !(getAvailableNewsYears() as number[]).includes(+selectedYear)) ||
    (selectedMouth && !(getAvailableNewsMonths(selectedYear) as number[]).includes(+selectedMouth))
  ) {
    throw new Error('Invalid Filter.')
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}

export default FilterDynamic;
