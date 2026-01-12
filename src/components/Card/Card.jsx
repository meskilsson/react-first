import './Card.css'

function Card({ title, children, className = "" }) {
    return (
        <div className={`card ${className}`}>
            <div className="card-header">
                <h2>{title}</h2>
            </div>
            <div className="card-body">{children}</div>
        </div>
    )
}

export default Card;