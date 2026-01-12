import './Card.css'
import Card from './Card';

function InfoCard({ title, children }) {

    return (
        <Card title={title} className="card--info">
            {children}
        </Card>
    );
}

export default InfoCard;