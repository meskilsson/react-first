import './UserProfile.css'

function UserProfile({
    // eslint-disable-next-line no-unused-vars
    id,
    firstName,
    lastName,
    avatar,
    email
}) {
    return (
        <div className="user-profile">
            <h2>{`${firstName} ${lastName}`}</h2>
            <img src={avatar} alt={`${firstName} ${lastName}`} />
            <span className="email">{email}</span>
        </div>
    );
}

export default UserProfile;