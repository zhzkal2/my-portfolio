

import { ReactNode } from 'react';
import Dock from './components/Dock';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Dock />
        {children}

      </body>
    </html>
  );
}