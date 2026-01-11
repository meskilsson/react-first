import './Card.css'

function Card({ title, children }) {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{title}</h2>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card;