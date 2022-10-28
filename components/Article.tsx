import { Mustread } from 'mustreads';
import Link from 'next/link';

type HeadingProps = Pick<Mustread, 'title' | 'url'>;
type DescriptionProps = Pick<Mustread, 'description'>;
type TagsProps = Pick<Mustread, 'tags'>;

type Props = {
  data: Mustread;
}

const ArticleHeading = ({ title, url }: HeadingProps) =>
  <h1 className='mb-2 text-4xl font-semibold dark:text-stone-100'>
    <Link target={'_blank'} href={url} className='hover:text-rose-500 dark:hover:text-rose-500'>
      {title}
    </Link>
  </h1>;

const ArticleDescription = ({ description }: DescriptionProps) =>
  <p className='mb-2 text-xl dark:text-stone-100'>
    {description}
  </p>;

const ArticleTags = ({ tags }: TagsProps) => <div className='dark:text-stone-100'>
  tags: {tags.map((t) => <span key={t}>{t} </span>)}
</div>;

export const Article = ({ data: { title, description, url, tags } }: Props) => <div className='mb-8'>
  <ArticleHeading title={title} url={url} />
  <ArticleDescription description={description} />
  <ArticleTags tags={tags} />
</div>;
