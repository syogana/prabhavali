import { inter } from './fonts'
import './globals.css'

export const metadata = {
  title: 'Prabhavali',
  description: 'School of dance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}