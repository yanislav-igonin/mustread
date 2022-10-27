import { tags } from 'mustreads';
import { DarkModeButton } from './DarkModeButton';
import { Menu } from './Menu';

export const Layout = ({ children }: { children: React.ReactNode }) => <div>
  <div className="absolute top-0 right-0 p-2">
    <DarkModeButton />
  </div>

  <div className='w-screen h-screen dark:bg-slate-500 grid grid-cols-4'>
    <div>
      <Menu tags={tags} />
    </div>
    <div className='col-span-3'>
      <main>
        {children}
      </main>
    </div>
  </div>

</div>;
