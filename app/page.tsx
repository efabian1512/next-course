'use client'
import Image from 'next/image';
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth';
import testimonial from '@/public/images/testimonial.jpg';
import { Metadata } from 'next';
// import HeavyComponent from './components/HeavyComponent';
import { useState } from 'react';
import dynamic from "next/dynamic";
import _ from 'lodash';

const HeavyComponent = dynamic(() => import( './components/HeavyComponent' ), 
{
  ssr: false,
  loading: ()=> <p>...Loading</p>
});


export default function Home() {

  const [isVisible, setVisible] = useState(false);

  // const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      {/* <Image 
      src="https://bit.ly/react-cover"
       alt="testimonial"
       fill
       className="object-cover"
       sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
       quality={100}
       priority
       /> */}
      {/* <h1>Hello { session && <span>{session.user!.name}</span>}</h1> */}
      <h1>Hello</h1>
       <button onClick={async ()=> {
         const _ = (await import('lodash')).default;
         const users = [
           {name: 'c'},
           {name: 'b'},
           {name: 'a'},
         ];

         const sorted = _.orderBy(users, ['name']);
         console.log(sorted);
       }}>Show</button>
      {/* {isVisible && <HeavyComponent/>} */}
       {/* <Link href="/users">Users</Link>
       <ProductCard/> */}
    </main>
  )
}

// export const metadata: Metadata = {
//   title: '...'
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'product.title',
//     description: '...'
//   }
// }
