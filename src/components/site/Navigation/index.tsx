import React from "react";
import {User} from "@clerk/nextjs/server"
import Image from 'next/image'

type Props = {
    user?:null | User
}

const Navigation = (props: Props) =>    {
    return <div className="p-4 flex items-center justify-between relative bg-black">
        
        <aside className="flex items-center gap-2">
            <Image className=""
            src={"/assets/Logo.png"}
            alt="Logo"
            width={40}
            height={40}
            
            />
        </aside>
    </div>
}
export default Navigation