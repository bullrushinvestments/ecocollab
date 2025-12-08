import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoCollab',
  description: 'EcoCollab connects small businesses with eco-conscious communities to collaborate on sustainable projects and share resources, making it easier for companies to integrate sustainability into their operations.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoCollab</h1>
      <p className="mt-4 text-lg">EcoCollab connects small businesses with eco-conscious communities to collaborate on sustainable projects and share resources, making it easier for companies to integrate sustainability into their operations.</p>
    </main>
  )
}
