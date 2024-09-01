import React, {useState} from "react";
import { FaEdit } from "react-icons/fa";
import styles from "../styles/Sidebar.module.scss";
import { FiX, FiSearch } from "react-icons/fi";

const speakers = [
  {
    id: 1,
    name: "Eleanor Pena",
    title: "President of Sales",
    organization: "XYZ Organisation",
    image: "/assets/profile.jpeg",
  },
  {
    id: 2,
    name: "Esther Howard",
    title: "Marketing Coordinator",
    organization: "ABC Organisation",
    image: "/assets/profile.jpeg",
  },
  {
    id: 3,
    name: "Albert Flores",
    title: "Nursing Assistant",
    organization: "ABC Organisation",
    image: "/assets/profile.jpeg",
  },
  {
    id: 4,
    name: "Avinesh",
    title: "Developer",
    organization: "XYZ Organisation",
    image: "/assets/profile.jpeg",
  },
  {
    id: 5,
    name: "Akash",
    title: "QA Engineer",
    organization: "XYZ Organisation",
    image: "/assets/profile.jpeg",
  },
  {
    id: 6,
    name: "Gokzzz",
    title: "QA Engineer",
    organization: "EFG Organisation",
    image: "/assets/profile.jpeg",
  },
  {
    id: 7,
    name: "Ikram",
    title: "Developer",
    organization: "LMNOP Organisation",
    image: "/assets/profile.jpeg",
  },
  {
    id: 8,
    name: "Albert Flores",
    title: "Nursing Assistant",
    organization: "XYZ Organisation",
    image: "/assets/profile.jpeg",
  },
  {
    id: 9,
    name: "David",
    title: "Google Analytics",
    organization: "XYZ Organisation",
    image: "/assets/profile.jpeg",
  },
  {
    id: 10,
    name: "Rajender",
    title: "SEO",
    organization: "AVI Organisation",
    image: "/assets/profile.jpeg",
  },
];

const Sidebar = ({ onClose }) => {
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [search, setSearch] = useState("");

  const filteredSpeakers = speakers.filter(
    (speaker) =>
      speaker.name.toLowerCase().includes(search.toLowerCase()) ||
      speaker.title.toLowerCase().includes(search.toLowerCase()) ||
      speaker.organization.toLowerCase().includes(search.toLowerCase())
  );

  const handleCheckboxChange = (speakerId) => {
    setSelectedSpeakers((prev) =>
      prev.includes(speakerId)
        ? prev.filter((id) => id !== speakerId)
        : [...prev, speakerId]
    );
  };
  
  const isAddButtonActive = selectedSpeakers.length > 0;
  
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2>Add Speaker</h2>
        <button className={styles.closeBtn} onClick={onClose}>
          <FiX />
        </button>
      </div>
      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search..." className={styles.search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <ul className={styles.speakerList}>
        {filteredSpeakers.map(
          (speaker) => (
            (
              <li
                key={speaker.id}
                className={`${styles.speakerItem} ${selectedSpeakers.includes(speaker.id) ? styles.selected : ""}`} >
                <div className={styles.avatar}>
                  <img
                    src={speaker.image}
                    alt="Profile"
                  />
                </div>
                <div className={styles.details}>
                  <h3>{speaker.name}</h3>
                  <p>
                    {speaker.title} | {speaker.organization}
                  </p>
                  <button className={styles.editBtn}>
                    <FaEdit /> Edit Speaker
                  </button>
                </div>
                <input type="checkbox" className={styles.checkbox} onChange={() => handleCheckboxChange(speaker.id)} checked={selectedSpeakers.includes(speaker.id)} />
              </li>
            )
          )
        )}
      </ul>
      <div className={styles.footer}>
        <div>
            <button className={`${styles.addButton} ${isAddButtonActive ? styles.active : ""}`} disabled={!isAddButtonActive} >
            Add
            </button>
            <button className={styles.cancelButton} onClick={() => setSelectedSpeakers([])}>
            Cancel
            </button>
        </div>
        <button className={styles.createButton}>Create a speaker</button>
      </div>
    </div>
  );
};

export default Sidebar;
