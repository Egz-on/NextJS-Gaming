    import Link from 'next/link'
    import { CiStar } from "react-icons/ci";
import React from 'react'

    function Sidebar() {
    return (
        <>
            <div>
<Link
  href="/Latest"
  className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
>
  <CiStar size={20} />
  <span>Latest Games</span>
</Link>
            </div>
            
        </>
    )
    }

    export default Sidebar