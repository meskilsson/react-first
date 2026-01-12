// Navbar.jsx
import "./Navbar.css";

function Navbar({ links = [], activeUrl, onNavigate }) {
    return (
        <ul className="navbar">
            {links.map((link) => (
                <li
                    key={link.url}
                    className={link.url === activeUrl ? "active" : ""}
                >
                    <a
                        href={link.url}
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigate?.(link.url);
                        }}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Navbar;
