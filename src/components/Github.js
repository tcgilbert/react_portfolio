
import Axios from "axios";
import React, { useState } from 'react';
import GithubResult from "./GithubResult";

function Github() {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  let url = `https://api.github.com/users/${username}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(url)
      .then((result) => {
        setUserInfo(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Find a github user's info</h1>
        {userInfo ? <GithubResult userInfo={userInfo}/> : null}
        <label htmlFor="username">username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input type="submit" value="Find User" />
      </form>
    </div>
  );
}

export default Github;
