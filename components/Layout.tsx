import { tags } from 'mustreads';
import { DarkModeButton } from './DarkModeButton';
import { Menu } from './Menu';

export const Layout = ({ children }: { children: React.ReactNode }) => <div>
  <div className="absolute top-0 right-0 p-2">
    <DarkModeButton />
  </div>

  <div className='w-screen h-screen dark:bg-slate-700 grid grid-cols-4'>
    <Menu tags={tags} />
    <div className='md:col-span-3 col-span-4 p-4'>
      <main>
        {children}
      </main>
    </div>
  </div>

</div>;
