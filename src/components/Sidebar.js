import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import styles from "../styles/Sidebar.module.scss";
import { FiX } from "react-icons/fi";

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
        {/* <FiSearch  /> */}
        <svg
          className={styles.searchIcon}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.125 8.74999C13.125 9.61529 12.8684 10.4611 12.3877 11.1806C11.907 11.9001 11.2237 12.4608 10.4243 12.792C9.62484 13.1231 8.74517 13.2097 7.8965 13.0409C7.04784 12.8721 6.26829 12.4554 5.65643 11.8436C5.04458 11.2317 4.6279 10.4522 4.45909 9.60351C4.29028 8.75485 4.37692 7.87518 4.70805 7.07575C5.03918 6.27633 5.59994 5.59304 6.3194 5.11231C7.03887 4.63158 7.88473 4.37499 8.75002 4.37499C9.91035 4.37499 11.0231 4.83593 11.8436 5.6564C12.6641 6.47687 13.125 7.58967 13.125 8.74999ZM17.9422 17.9422C17.8842 18.0003 17.8152 18.0464 17.7394 18.0778C17.6635 18.1093 17.5822 18.1255 17.5 18.1255C17.4179 18.1255 17.3366 18.1093 17.2607 18.0778C17.1848 18.0464 17.1159 18.0003 17.0578 17.9422L13.1469 14.0305C11.7868 15.162 10.0429 15.7256 8.27788 15.6041C6.51286 15.4826 4.86262 14.6853 3.67041 13.3782C2.4782 12.071 1.83581 10.3545 1.87685 8.58579C1.9179 6.81707 2.63923 5.13226 3.89079 3.8818C5.14236 2.63134 6.82781 1.9115 8.59657 1.87201C10.3653 1.83253 12.0812 2.47644 13.3873 3.6698C14.6935 4.86317 15.4893 6.51412 15.6092 8.27925C15.7291 10.0444 15.164 11.7878 14.0313 13.1469L17.9422 17.0578C18.0003 17.1159 18.0464 17.1848 18.0779 17.2607C18.1093 17.3365 18.1255 17.4179 18.1255 17.5C18.1255 17.5821 18.1093 17.6635 18.0779 17.7393C18.0464 17.8152 18.0003 17.8841 17.9422 17.9422ZM8.75002 14.375C9.86254 14.375 10.9501 14.0451 11.8751 13.427C12.8001 12.8089 13.5211 11.9304 13.9468 10.9026C14.3726 9.87475 14.484 8.74375 14.2669 7.65261C14.0499 6.56147 13.5142 5.55919 12.7275 4.77252C11.9408 3.98585 10.9385 3.45012 9.84741 3.23308C8.75626 3.01603 7.62526 3.12743 6.59743 3.55317C5.5696 3.97891 4.69109 4.69988 4.07301 5.62491C3.45492 6.54994 3.12502 7.63747 3.12502 8.74999C3.12668 10.2413 3.71984 11.6711 4.77438 12.7256C5.82891 13.7802 7.25869 14.3733 8.75002 14.375Z"
            fill="#E4875D"
          />
        </svg>

        <input
          type="text"
          placeholder="Search..."
          className={styles.search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className={styles.speakerList}>
        {filteredSpeakers.map((speaker) => (
          <li
            key={speaker.id}
            className={`${styles.speakerItem} ${
              selectedSpeakers.includes(speaker.id) ? styles.selected : ""
            }`}
          >
            <div className={styles.avatar}>
              <img src={speaker.image} alt="Profile" />
            </div>
            <div className={styles.details}>
              <h3>{speaker.name}</h3>
              <p className={styles.speakerInfo}>
                {speaker.title} <span className={styles.separator}>|</span>{" "}
                {speaker.organization}
              </p>
              <button className={styles.editBtn}>
                <FaEdit /> Edit Speaker
              </button>
            </div>
            <input
              type="checkbox"
              className={styles.checkbox}
              onChange={() => handleCheckboxChange(speaker.id)}
              checked={selectedSpeakers.includes(speaker.id)}
            />
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <div>
          <button
            className={`${styles.addButton} ${
              isAddButtonActive ? styles.active : ""
            }`}
            disabled={!isAddButtonActive}
          >
            Add
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => setSelectedSpeakers([])}
          >
            Cancel
          </button>
        </div>
        <button className={styles.createButton}>Create a speaker</button>
      </div>
    </div>
  );
};

export default Sidebar;
