import React from 'react'
import { ReactNode } from 'react'
import Header from '@/components/ui/Header'
<<<<<<< HEAD
const layout = ({children }: {children: ReactNode}) => {// to specify to ts that accept child of type react node - type of react elements for ts
  return (
    <main className='root-container'>
        <div className="mx-auto max-w-7xl">
                <Header />
=======
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
const layout = async ({children }: {children: ReactNode}) => {// to specify to ts that accept child of type react node - type of react elements for ts
  const session = await auth();
  if(!session)redirect('/');
  return (
    <main className='root-container'>
        <div className="mx-auto max-w-7xl">
                <Header session={session} />
>>>>>>> 6a9dc7a (3/18/25)
                <div className="mt-20 pb-201">{children}</div>
        </div>
    </main>

  )
}

export default layout