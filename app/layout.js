import './globals.css'

export const metadata = {
  title: 'Popular Movies 2023 | Best 2023 Movies ',
  description: 'Created by Genald Paulo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='mx-16 my-12 bg-[#161616]' >
        {/* <h1>Test Layout JS from root folder</h1> */}
        {children}
      </body>
    </html>
  )
}
