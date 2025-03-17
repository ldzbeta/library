import React from 'react'
import { ReactNode } from 'react'
import Header from '@/components/ui/Header'
const layout = ({children }: {children: ReactNode}) => {// to specify to ts that accept child of type react node - type of react elements for ts
  return (
    <main className='root-container'>
        <div className="mx-auto max-w-7xl">
                <Header />
                <div className="mt-20 pb-201">{children}</div>
        </div>
    </main>

  )
}

export default layout