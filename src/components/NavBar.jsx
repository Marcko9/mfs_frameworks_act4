export function NavBar({onProfileClick, onLogoClick}){
    
    return (
    <nav className="navbar bg-light">
        <div className="container-fluid">
            <i className="bi bi-lightning-charge-fill" onClick={onLogoClick}></i>
            <span className="navbar-brand mb-0 h1 ms-2 me-auto">three pics</span>
            <i className="bi bi-person-circle" onClick={onProfileClick}></i>
        </div>       
    </nav> 
    );
}