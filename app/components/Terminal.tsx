// app/components/Terminal.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { WebContainer } from '@webcontainer/api';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

const TerminalComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webcontainer, setWebcontainer] = useState<WebContainer | null>(null);

  useEffect(() => {
    const init = async () => {
      if (containerRef.current && !webcontainer) {
        const wc = await WebContainer.boot();
        setWebcontainer(wc);

        const terminal = new Terminal({
          convertEol: true,
        });

        terminal.open(containerRef.current);

        const shellProcess = await wc.spawn('jsh');

        shellProcess.output.pipeTo(
          new WritableStream({
            write(data) {
              terminal.write(data);
            },
          })
        );

        const input = shellProcess.input.getWriter();
        terminal.onData((data) => {
          input.write(data);
        });
      }
    };

    init();
  }, [webcontainer]);

  return <div ref={containerRef} style={{ height: '500px', width: '100%' }} />;
};

export default TerminalComponent;
