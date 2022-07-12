import Layout from '../components/Layout'
import Link from 'next/link'
import { skills } from "../profile";
const Index = () => (
    <Layout>
        {/* Tarjeta con nombre */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/mypic.jpeg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Javier Medina</h1>
                            <h3>FrontEnd Developer</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Molestiae atque ullam perferendis harum, nisi porro voluptate,
                                iste consequuntur enim reprehenderit architecto consectetur cum?
                                Totam ad molestias natus illum illo officia.
                            </p>
                            <Link href="/hireme">
                                <a className="btn btn-outline-light">Hire Me</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/*segunda seccion*/}
        <section className="row">
            <div className="container py-3">
                <div className="card bg-light animate__animated animate__fadeInLeft">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {/* Skill Progress  */}
                        {skills.map(({ skill, percentage }, i) => (
                            <div className="py-3" key={i}>
                                <h5>{skill}</h5>
                                <div className="progress ">
                                    <div
                                        className="progress-bar progress-bar-striped"
                                        role="progressbar"
                                        style={{ width: `${percentage}%` }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>





    </Layout>


)




export default Index