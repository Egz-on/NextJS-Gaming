    // components/LayoutWrapper.tsx
    "use client"

    import { usePathname } from 'next/navigation'
    import Navbar from './Navbar'

    export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isHome = pathname === "/"

    return (
        <>
        {!isHome && <Navbar />}
        {children}
        </>
    )
    }
    // This component wraps the children components and conditionally renders the Navbar based on the current path.