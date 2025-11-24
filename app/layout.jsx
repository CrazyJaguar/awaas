import './globals.css'

export const metadata = {
  title: 'Awaas - Find Your Perfect Space',
  description: 'Connect landowners with customers looking for the perfect space',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}