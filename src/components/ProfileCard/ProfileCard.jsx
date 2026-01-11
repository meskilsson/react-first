import './ProfileCard.css'

const defaultImg = '/imgs/alg.jpg';

function ProfileCard({
    id,
    name,
    title,
    description = 'Ingen beskrivning',
    img = defaultImg,
    hasDescription = true,
    isSelected,
    onSelect
}) {
    return (
        <div className={`user-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(id)}
        >
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <h2>{title}</h2>
            {hasDescription && <p> {description}</p>}
        </div>
    );
}

export default ProfileCard;




// function Button({ text = 'Klicka här', type = 'primary', disabled = false }) {
// return (
// <button
// className={`btn btn-${type}`}
// disabled={disabled}
// >
// {text}
// </button>
// );
// }