import { Providers } from '@/redux/provider'
import './globals.css'
import type { Metadata } from 'next'
import MemoryDetails from './my-cards/components/modals/MemoryDetails'

export const metadata: Metadata = {
  title: 'My Memories',
  description: 'Created by Ilwel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body selection:bg-high-med bg-base h-screen text-text">
        <Providers>
          <MemoryDetails/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
