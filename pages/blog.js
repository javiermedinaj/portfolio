import Layout from "../components/Layout";
import Link from 'next/link'
const blog = () => {
    return (
        <div>
            <Layout>
                <div>


                    <div className="container py-3">
                        <h2 className="text-center">About me.</h2>
                        <div className="card py-5">
                            <img src="/trabajo.jpg" className="card-img-fluid" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Estamos trabando en esto</h5>
                                <p className="card-text">Pensando ideas</p>
                                <Link href="/">
                                    <a className="btn btn-primary">Volver a la pagina principal</a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>

        </div>)
}

export default blog;