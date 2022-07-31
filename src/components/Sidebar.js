import './Sidebar.css'
import { Link } from 'react-router-dom';
import { FaFileUpload,FaHome } from "react-icons/fa";

const Sidebar = ()=>{
    return(
        <aside className="sidebar">
            <div className="logo"><a>GoTool</a></div>
            <nav className="side-nav">
                <Link className="nav-item" to="/"><FaHome /></Link>
                <Link className="nav-item" to="/home"><FaFileUpload/></Link>
            </nav>
        </aside>

    )

}

export default Sidebar