import Link from 'next/link';

type Props = {
  tags: string[];
}

const Tag = (tag: string) => <li key={tag}
  className='text-xl dark:text-stone-100 hover:text-rose-500'>
  <Link href={`/?tag=${tag}`}>
    - {tag}
  </Link>
</li>;

export const Menu = ({ tags }: Props) => <div className='p-4'>
  <ul>
    {tags.map(Tag)}
  </ul>
</div>;
