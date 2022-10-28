import Link from 'next/link';

type Props = {
  tags: string[];
}

const Tag = (tag: string) => <li key={tag}
  className='text-xl dark:text-stone-100'>
  <Link href={`/?tag=${tag}`} className='hover:text-rose-500 dark:hover:text-rose-500'>
    - {tag}
  </Link>
</li>;

export const Menu = ({ tags }: Props) => <div className='p-4'>
  <ul className='border-r-2 border-r-slate-700 dark:border-r-stone-100'>
    {tags.map(Tag)}
  </ul>
</div>;
