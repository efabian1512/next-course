'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status, data: session} = useSession();
  
  return (
     <nav className="bg-slate-200 p-5"><ul className="flex space-x-3">
          <li className="mr-5"><Link href="/">Next.js</Link></li>
          <li className="mr-5"><Link href="/users">Users</Link></li>
          { status === 'loading' && <li>...Loading</li>}
          { status === 'authenticated' && <li>
            {session.user!.name}
            <Link className="ml-3" href="/api/auth/signout">Sign Out</Link>
          </li> }
          { status === 'unauthenticated' && <li className="mr-5"><Link href="/api/auth/signin">Login</Link></li>}
        </ul></nav>
  )
}

export default NavBar
