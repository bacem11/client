import { Link } from "react-router-dom"
import img from '../assets/images/not-found.svg'
import Wrapper from "../assets/wrappers/ErrorPage"

const Error = () => {
    return (
    <Wrapper className="full-page">
        <div>
            <img src={img} alt='not found'/>
            <h3>ohhh§ page not found</h3>
            <p> we can't seem to find</p>
            <Link to='/'>back to home </Link>

        </div>
    </Wrapper>
    );
}
export default Error 