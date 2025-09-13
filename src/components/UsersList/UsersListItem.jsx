function UsersListItem(props) {
  const {
    user: { id, firstName, lastName, age, imgSrc, email, role },
  } = props;
  return (
    <li>
      <article className='userCard'>
        <h2 className='userTitle'>
          {firstName} {lastName}
        </h2>
        <h3 className='userRole'>{role}</h3>
        <div className='profileImgContainer'>
          <img
            src={imgSrc}
            alt={`${firstName} ${lastName}`}
            className='profileImg'
          />
        </div>
        <p className='userAge'>{age}</p>
        <p className='userEmail'>{email}</p>
      </article>
    </li>
  );
}

export default UsersListItem;
