import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CommentList({ comments }) {
  const renderComments = comments.map(comment => {
    let content;

    switch (comment.status) {
      case "approved":
        content = comment.content;
        break;
      case "pending":
        content = "The comment is awaiting moderation";
        break;
      case "rejected":
        content = "The comment has been rejected";
        break;
    }

    return <li>{content}</li>;
  });

  return <ul>{renderComments}</ul>;
}
