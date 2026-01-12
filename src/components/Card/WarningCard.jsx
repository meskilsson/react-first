import './Card.css'
import Card from './Card';

function WarningCard({ title, children }) {

    return (
        <Card title={title} className="card--warning">
            {children}
        </Card>
    );
}

export default WarningCard;