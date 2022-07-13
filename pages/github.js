import Layout from "../components/Layout";


const Github = ({ user }) => {


    return (
        <Layout title="My Github" footer={false} dark>
            <div className="container">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="" style={{ width: "100%" }} />
                        <p className="mt-2" >{user.bio}</p>
                        <a
                            href={user.blog}
                            target="_blank"
                            className="btn btn-outline-secondary my-2"
                        >
                            My Blog
                        </a>
                        <a
                            href={user.html_url}
                            target="_blank"
                            className="btn btn-outline-secondary"
                        >
                            Go to Github
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

Github.proptypes = {};

export async function getServerSideProps() {
    const res = await fetch(
        "https://api.github.com/users/javiermedinaj"
    );
    const data = await res.json();
    return {
        props: {
            user: data,
        },
    };
}

export default Github;