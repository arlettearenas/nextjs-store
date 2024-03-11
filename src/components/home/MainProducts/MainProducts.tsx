"use client";

export const MainProducts = () => {
    console.log("variable de entorno", process.env.NEXT_PUBLIC_SHOPIFY_HOSTMANE)
    return (
        <section>
            <h1>MainProducts</h1>
        </section>
    )
}