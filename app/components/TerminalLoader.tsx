// app/components/TerminalLoader.tsx
'use client';

import dynamic from 'next/dynamic';

const TerminalComponent = dynamic(() => import('./Terminal'), {
  ssr: false,
});

export default function TerminalLoader() {
  return <TerminalComponent />;
}
