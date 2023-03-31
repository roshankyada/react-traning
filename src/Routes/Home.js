
// import { Link } from 'react-router-dom'
import HOC from './HOC'
import { useNavigate } from 'react-router-dom'

function Home(props) {

    const Navigate = useNavigate();


    return (

        <div>
            {/* <header>    
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header> */}
            <HOC />

            <div>
                <section>
                    <h1>Home1 </h1>
                    <button onClick={() => { Navigate('/About') }}>GoTo/</button>
                </section>
            </div>
        </div>
    )
}
export default Home