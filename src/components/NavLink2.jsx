'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink2 = ({href , children}) => {
const path = usePathname()
const isActive = href==path
    return (
        <div >
            <Link href={href} className={`${isActive? 'text-[#0E8388] bg-[#CBE4DE] ':''}  hover:text-[#0E8388] hover:bg-[#CBE4DE] text-[#CBE4DE] px-4 rounded-3xl hover:mb-4 border border-[#CBE4DE] text-lg text-center transition`}>{children}</Link>
        </div>
    );
};

export default Navlink2;