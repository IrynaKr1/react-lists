import styles from './UsersListItem.module.css';

function UsersListItem(props) {
  const {
    user: { id, firstName, lastName, age, imgSrc, email, role },
  } = props;
  return (
    <li className={styles.userCard}>
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
      <button className={styles.deleteButton}>Delete</button>
    </li>
  );
}

export default UsersListItem;
