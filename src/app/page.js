import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 p-24">
      Hey
      <Link href={'/products'}>Go to products page</Link>
    </main>
  )
}
