import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: {
    default: 'Next13 - App',
    template: '%s | Next 13 - App',
  },
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <h1>App</h1>
      {children}
    </div>
  )
}
