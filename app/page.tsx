// app/page.tsx
import TerminalLoader from './components/TerminalLoader';
import Chat from './components/Chat';

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Luma</h1>
      <div className="flex">
        <div className="w-1/2">
          <Chat />
        </div>
        <div className="w-1/2">
          <TerminalLoader />
        </div>
      </div>
    </div>
  );
}
