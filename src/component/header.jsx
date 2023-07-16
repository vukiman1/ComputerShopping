import banner from '../assets/images/banner.png'
function Header () {
    return (
        <header className="banner">
            <img src={banner} alt="banner" />
            <nav>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;