import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";

export default async function Layout({children}:{children:React.ReactNode}) {
    const collections= await getCollections()
    return(
        <main>
            <nav>Navegacion de las categorias</nav>
            <nav>
                {
                    collections.map((collection)=>(
                        <Link key={collection.id} href={collection.handle}>
                            {collection.title}
                        </Link>
                    ))
                }
            </nav>
            {children}
        </main>
    )
}