import 'bootswatch/dist/cyborg/bootstrap.css'
import '../global.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Javier Medina portfolio</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}