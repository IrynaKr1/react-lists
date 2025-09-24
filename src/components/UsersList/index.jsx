import { Component } from 'react';
import UsersListItem from './UsersListItem';
import styles from './UserList.module.css';

const usersData = [
  {
    id: 1,
    firstName: 'Anna',
    lastName: 'Krasenko',
    age: 27,
    imgSrc: 'https://randomuser.me/api/portraits/women/10.jpg',
    email: 'anna.krasenko@example.com',
    isSelected: false,
    role: 'admin',
  },
  {
    id: 2,
    firstName: 'Mariusz',
    lastName: 'Kowalski',
    age: 34,
    imgSrc: 'https://randomuser.me/api/portraits/men/2.jpg',
    email: 'm.kowalski@example.com',
    isSelected: false,
    role: 'user',
  },
  {
    id: 3,
    firstName: 'Olena',
    lastName: 'Shevchenko',
    age: 29,
    imgSrc: 'https://randomuser.me/api/portraits/women/3.jpg',
    email: 'olena.shevchenko@example.com',
    isSelected: false,
    role: 'editor',
  },
  {
    id: 4,
    firstName: 'Adam',
    lastName: 'Nowak',
    age: 41,
    imgSrc: 'https://randomuser.me/api/portraits/men/4.jpg',
    email: 'adam.nowak@example.com',
    isSelected: false,
    role: 'moderator',
  },
  {
    id: 5,
    firstName: 'Sofiia',
    lastName: 'Melnyk',
    age: 22,
    imgSrc: 'https://randomuser.me/api/portraits/women/5.jpg',
    email: 'sofiia.melnyk@example.com',
    isSelected: false,
    role: 'user',
  },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData.map((u) => ({ ...u, isSelected: false })),
    };
  }

  selectedUser = (id) => {
    const { users } = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);
    console.log('User was selected with id:', id);
    const newUsers = [...users];
    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelected: !newUsers[foundIndex].isSelected,
    };
    this.setState({ users: newUsers });
  };

  deleteUser = (id) => {
    const { users } = this.state;
    console.log('User was deleted with id', id);
    const newUsers = users.filter((u) => u.id !== id);
    this.setState({ users: newUsers });
  };

  mapUser = (u) => {
    return (
      <UsersListItem
        key={u.id}
        user={u}
        selectedUser={this.selectedUser}
        deleteUser={this.deleteUser}
      />
    );
  };

  render() {
    const { users } = this.state;
    return <ul className={styles.userList}>{users.map(this.mapUser)}</ul>;
  }
}

export default UsersList;
