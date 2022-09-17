import Head from 'next/head'
import type { NextPage } from 'next'
import type { LayoutProps } from '@/types/layout'

const DefaultLayout: NextPage = (props: LayoutProps) => {
  const { children, title, className } = props
  const pageTitle: string = 'Tereby | ' + title
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Menonton siaran TV menjadi lebih mudah dengan tereby"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={
          (className ? `${className} ` : '') +
          'relative w-full min-h-screen h-screen font-sans antialiased'
        }
      >
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout
