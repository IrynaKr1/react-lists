import styles from './UsersListItem.module.css';

function UsersListItem(props) {
  const {
    selectedUser,
    deleteUser,
    user: { id, firstName, lastName, age, imgSrc, email, role, isSelected },
  } = props;

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteUser(id);
  };

  return (
    <li
      className={`${styles.userCard} ${isSelected ? styles.selected : ''}`}
      onClick={() => selectedUser(id)}
    >
      <div className={styles.profileImgContainer}>
        <img
          src={imgSrc}
          alt={`${firstName} ${lastName}`}
          className={styles.profileImg}
        />
      </div>
      <div className={styles.userData}>
        <h2 className={styles.userTitle}>
          {firstName} {lastName}
        </h2>
        <p className={styles.userAge}>{age}</p>
      </div>
      <h3 className={styles.userRole}>Role: {role}</h3>
      <p className={styles.userEmail}>{email}</p>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default UsersListItem;
