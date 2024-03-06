import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
    searchParams: {sortBy: string}
}

const UsersPage = ({searchParams: {sortBy}}: Props) => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}});
  
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">New user</Link>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <Suspense fallback={<p>Loading...</p>}>
          <UserTable sortBy={sortBy}/>
      </Suspense>
    </>
  )
}

export default UsersPage
