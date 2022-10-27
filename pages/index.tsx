import type { NextPage } from 'next';
import Head from 'next/head';
import { Article, Layout } from '@components';
import { mustreads } from 'mustreads';

const Home: NextPage = () => {
  return <div>
    <Head>
      <title>{'h0b0\'s mustreads'}</title>
    </Head>

    <Layout>
      {mustreads.map((m) => <Article key={m.url} data={m} />)}
    </Layout>
  </div>;
};

export default Home;
