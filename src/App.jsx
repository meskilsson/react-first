import "./App.css";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";
import profiles from "./components/ProfileCard/index.js";
import ProductList from "./components/ProductList/ProductList.jsx";
import products from "./components/ProductList/productList.js";
import UserProfile from "./components/user/UserProfile.jsx";
import userProfiles from "./components/user/userProfiles.js";
import ContactForm from "./components/contact/ContactForm.jsx";
import InfoCard from "./components/Card/InfoCard.jsx";
import WarningCard from "./components/Card/WarningCard.jsx";
import navLinks from "./components/Nav/navLinks.js";
import Navbar from "./components/Nav/Navbar.jsx";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [activeUrl, setActiveUrl] = useState("/");

  function handleSelect(id) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  function handleContactSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }

  return (
    <>
      <header className="navbar-container">
        <Navbar
          links={navLinks}
          activeUrl={activeUrl}
          onNavigate={(url) => setActiveUrl(url)}
        />
      </header>

      <div className="page-layout">
        <main className="main-content">
          <ProductList
            products={products}
            selectedId={selectedId}
            onSelect={handleSelect}
          />
        </main>

        <aside className="sidebar">
          <section className="sidebar-section" aria-label="Profiler">
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
          </section>

          <section className="sidebar-section" aria-label="Användarprofiler">
            {userProfiles.map((user) => (
              <WarningCard key={user.id} title="Användarprofil">
                <UserProfile
                  id={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  avatar={user.avatar}
                  email={user.email}
                />
              </WarningCard>
            ))}
          </section>

          <section className="sidebar-section" aria-label="Kontakt">
            <InfoCard title="Kontaktform">
              <ContactForm
                submitLabel="Skicka"
                onSubmit={handleContactSubmit}
              />
            </InfoCard>
          </section>
        </aside>
      </div>
    </>
  );
}

export default App;
