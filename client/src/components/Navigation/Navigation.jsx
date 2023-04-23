import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="posts"
            className={({ isActive }) => (isActive ? 'activeNav' : undefined)}
            end
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="posts/add-new"
            className={({ isActive }) => (isActive ? 'activeNav' : undefined)}
          >
            Add new Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="users"
            className={({ isActive }) => (isActive ? 'activeNav' : undefined)}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
