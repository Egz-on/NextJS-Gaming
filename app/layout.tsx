// app/layout.tsx
import './globals.css'
import LayoutWrapper from './components/LayoutWrapper'
import { AuthProvider } from '@/hooks/useAuth'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-900 text-white antialiased'>
        
                <AuthProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  )
}

