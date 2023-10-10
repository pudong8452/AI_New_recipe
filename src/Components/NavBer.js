export default function NavBer(){
    return(
        <header>
            <div className="navber">
                <div className="logo"><a href="#">Web Dev Creative</a></div>
                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Content</a></li>
                </ul>
                <a href="#" className="action_btn block">GetStarted</a>
                <div className="toggle_btn">
                    <i className="fa-regular fa-bars"></i>
                </div>
            </div>
        </header>
    );
}