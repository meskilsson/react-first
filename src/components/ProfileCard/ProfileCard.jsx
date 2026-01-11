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
    onSelect,
    isSelectable
}) {

    function handleClick() {
        if (!isSelectable) {
            return;
        } else {
            onSelect(id);
        }
    }


    return (
        <div className={`user-card ${isSelected ? 'selected' : ''} ${!isSelectable ? 'disabled' : ''}`}
            onClick={handleClick}
        >
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <h2>{title}</h2>
            {hasDescription && <p> {description}</p>}
        </div>
    );
}


export default ProfileCard;




