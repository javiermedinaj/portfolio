import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const custom404 = () => (
    <div>
        <Navbar />

        <div className="container py-3">
            <div className="card py-5">
                <img src="/travolta.gif" width="500em" height="500em" className="card-img" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Error 404</h5>
                    <p className="card-text">Esta seccion aun no esta disponible</p>
                    <Link href="/">
                        <a className="btn btn-primary">Volver a la pagina principal</a>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    </div>
)

export default custom404