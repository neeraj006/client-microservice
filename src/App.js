import React, { Component } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <PostList />
      </div>
    );
  }
}
