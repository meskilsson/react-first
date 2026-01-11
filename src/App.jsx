
import './App.css'
import { useState } from 'react'
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import profiles from './components/ProfileCard/index.js'
import ProductList from './components/ProductList/ProductList.jsx'
import products from './components/ProductList/productList.js'
import Card from './components/Card/Card.jsx'
import UserProfile from './components/user/UserProfile.jsx'
import userProfiles from './components/user/userProfiles.js'

function App() {

  const [selectedId, setSelectedId] = useState(null);



  function handleSelect(id) {

    if (id === selectedId) {
      setSelectedId(null)
    } else {
      setSelectedId(id);
    }
  }




  return (
    <div className="main-container">
      {profiles.map((person) => (
        <ProfileCard
          key={person.id}
          id={person.id}
          name={person.name}
          title={person.title}
          description={person.description}
          img={person.img}
          isSelected={person.id === selectedId}
          isSelectable={person.isSelectable}
          onSelect={handleSelect}
        />
      ))}

      <ProductList products={products} />


      {/* <Card title="Användarprofil">
        <UserProfile
          id={1}
          firstName="Mattias"
          lastName="Eskilsson"
          avatar="imgs/alg.jpg"
          email="me@gmail.se"
        />
      </Card> */}

      {/* <Card title="Användarprofil">
        <UserProfile
          id={userProfiles[0].id}
          firstName={userProfiles[0].firstName}
          lastName={userProfiles[0].lastName}
          avatar={userProfiles[0].avatar}
          email={userProfiles[0].email}
        />
      </Card> */}

      {userProfiles.map((user) => (
        <Card key={user.id} title="Användarprofil">
          <UserProfile
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            avatar={user.avatar}
            email={user.email}
          />
        </Card>
      ))}
    </div >
  )

}

export default App
