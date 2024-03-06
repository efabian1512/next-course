import React  from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';




interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortBy: string;
}

const UserTable = async({sortBy}: Props) => {
    console.log('redenring');

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
  const users: User[] = await res.json();

//   useEffect(() => {
    const sortedUsers = sort(users).asc(u => u[sortBy as keyof typeof u]);
//   },[sortBy])

//   const navigate = useNavigate();

    
//   const onSort = (query: string) => {
    
//   }


  return (
      <table className="table table-bordered">
          <thead>
              <tr>
                  <th>
                  	<Link href='/users?sortBy=name'>Name</Link>
                  </th>
                  <th>
                      <Link href="/users?sortBy=email">Email</Link>
                  </th>
              </tr>
          </thead>
          <tbody>
             {sortedUsers.map(user => <tr key={user.id}>
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                 </tr>)}
          </tbody>
      </table>
  )
}

export default UserTable
