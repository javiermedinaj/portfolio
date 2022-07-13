import Layout from '../components/Layout'
import Link from 'next/link'
import { skills, projects } from "../profile";
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
                        <div className="col-md-8 text-center">
                            <h2 className="py-2">Javier Medina</h2>
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
                    <div className="card-body text-center">
                        <h2>Skills</h2>

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
        {/* Porfolio */}
        <section>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12 my-2">
                                <h2 className="text-center text-light">Projects</h2>
                            </div>
                            {projects.map(({ name, description, image, link }, index) => (
                                <div className="col-md-4 p-2" key={index}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img
                                                src={`/${image}`}
                                                alt=""
                                                className="card-img-top"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h3 className="text-center">{name}</h3>
                                            <p className="text-center">{description}</p>
                                            <p className="text-center"><a href={link} target="_blank" className="btn btn-dark">Know More </a></p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="col-md-12 mt-4">
                                <div className="text-center">
                                    <Link href="/portfolio">
                                        <a className="btn btn-outline-light">More Projects</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>





    </Layout>


)




export default Index