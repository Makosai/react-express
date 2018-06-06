import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="base">
    <div id="container">
      <h3>Home</h3>
      This is the home page.
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/thisisanerror">
            Error Example
          </Link>
        </li>
        <li>
          {/* This uses an anchor instead to reference to
          the API since Link will reference within React. */}
          <a href="/api/users/Fluffy Lumpkins">
            Users API Example
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
