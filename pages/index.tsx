import type { NextPage } from 'next';
import Head from 'next/head';
import { Article, Layout } from '@components';
import { mustreads } from 'mustreads';
import { useRouter } from 'next/router';

export const byTag = (tag: string) => tag === 'all'
  ? mustreads
  : mustreads.filter((m) => m.tags.includes(tag));

const Home: NextPage = () => {
  const router = useRouter();
  const { tag } = router.query;

  const articles = tag ? byTag(tag as string) : mustreads;

  return <div>
    <Head>
      <title>{'h0b0\'s mustreads'}</title>
    </Head>

    <Layout>
      {articles.map((m) => <Article key={m.url} data={m} />)}
    </Layout>
  </div>;
};

export default Home;
