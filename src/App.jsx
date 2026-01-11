
import './App.css'
import { useState } from 'react'
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import profiles from './components/ProfileCard/index.js'

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
    <div>
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
    </div>
  )

}

export default App
