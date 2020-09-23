import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = Object.values(posts).map(post => (
    <div class="card" key={post.id} style={{ width: "30%", marginBottom: 20 }}>
      <div class="card-body">
        <h1>{post.title}</h1>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ));

  return (
    <div className="d-flex justify-content-between flex-wrap">
      {renderPosts}
    </div>
  );
}
