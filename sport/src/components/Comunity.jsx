import React, { useState } from "react";
import "./Community.css"; // Ensure your CSS file is linked properly

function Community() {
  const [posts, setPosts] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title && note.content) {
      const newPost = {
        id: posts.length + 1,
        user_name: "Anonymous", // Modify this based on authentication
        comment_date: new Date().toLocaleDateString(),
        title: note.title,
        msg: note.content
      };
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setNote({ title: "", content: "" });
    }
  }

  return (
    <div>
      <div className="community-heading">
        <h1>Sports Community</h1>
        <p>Connect, share, and grow with fellow professionals</p>
      </div>
      <div className="community-form">
        <h1>Share your Thoughts</h1>
        <form onSubmit={submitNote}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            rows="10"
            value={note.content}
            onChange={handleChange}
            required
          />
          <button className="full-width" type="submit">Post</button>
        </form>
      </div>
      {posts.map((post) => (
        <div className="comcard" key={post.id}>
          <div className="c1">
            <h3>{post.user_name}</h3>
            <p className="p1">{post.comment_date}</p>
            <img
              src="https://setmycareer.com/img/chennai-grid-student-main.webp"
              alt="profile"
            />
          </div>
          <div className="c1">
            <h2>{post.title}</h2>
            <p style={{ marginRight: "8%" }}>{post.msg}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Community;