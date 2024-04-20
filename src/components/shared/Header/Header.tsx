import Link from "next/link"
import styles from './Header.module.css'
import { validateAccessToken } from "app/utils/auth/validateAccesToken"


export const Header = async () =>{
  const customer = await validateAccessToken()
  return (
    <header>
      <nav>
        <ul>
        <Link href="/" className="link">
          <li>Home</li>
          </Link>
          <Link href="/store" className="link">
            <li>Store</li>
            </Link>
            <Link href="/test" className="link">
            <li>Test</li>
            </Link>
        </ul>
        {customer?.firsName ? (<p>Hola!{customer.firsName}</p>) : (<Link href="/login"></Link>)}
          </nav>
        </header>
    )
}