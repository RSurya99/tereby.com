import type { NextPage } from 'next'
import Layout from '@/layouts'

const Home: NextPage = () => {
  return (
    <Layout title="Home" className="flex items-center justify-center">
      <h1 className="text-8xl font-bold text-slate-700">Tereby.com</h1>
    </Layout>
  )
}

export default Home
