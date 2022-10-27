import { DarkModeButton } from './DarkModeButton';

export const Layout = ({ children }: { children: React.ReactNode }) => <div>
  <div className="absolute top-0 right-0 p-2">
    <DarkModeButton />
  </div>

  <div className='w-screen h-screen dark:bg-slate-500'>
    <div>

    </div>
    <div>
      <main>
        {children}
      </main>
    </div>
  </div>

</div>;
