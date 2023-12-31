import NavBar from '@/components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: 'Plans & Pricing',
  description: 'Generated by create next app',
}

const RootLayout =({ children }) => {
  return (
    <html lang="en">
      <body className='main'>
      <NavBar></NavBar>
        {children}
        </body>
    </html>
  )
}
export default RootLayout;