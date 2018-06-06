import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="base">
    <div id="container">
      <h3>Error - 404</h3>
      <p>
        {"The page you requested apparently doesn't exist?\
        Maybe someone stole it... We'll find it for you!"}
      </p>
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

export default ErrorPage;
