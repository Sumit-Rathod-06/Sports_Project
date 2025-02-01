import React, { useState } from "react";
import "./Community.css"; // Ensure your CSS file is linked properly

function Community() {
  const [posts, setPosts] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: "",
    topics: []
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setNote((prevNote) => ({
        ...prevNote,
        topics: checked
          ? [...prevNote.topics, value]
          : prevNote.topics.filter((topic) => topic !== value)
      }));
    } else {
      setNote((prevNote) => ({
        ...prevNote,
        [name]: value
      }));
    }
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title && note.content) {
      const newPost = {
        id: posts.length + 1,
        user_name: "Anonymous", // Modify this based on authentication
        comment_date: new Date().toLocaleDateString(),
        title: note.title,
        msg: note.content,
        topics: note.topics
      };
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setNote({ title: "", content: "", topics: [] });
    }
  }

  return (
    <div>
      <div className="community-heading">
        <h1>Career Community</h1>
        <p>Connect, share, and grow with fellow professionals</p>
      </div>
      <div className="community-form">
        <h1>Share your Journey</h1>
        <form onSubmit={submitNote}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            id="title-box"
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
          <h3>Select Related Topics</h3>
          <input
            type="checkbox"
            id="topic1"
            name="topic1"
            value="Career Advice"
            checked={note.topics.includes("Career Advice")}
            onChange={handleChange}
          />
          <label htmlFor="topic1">Career Advice</label><br />
          <input
            type="checkbox"
            id="topic2"
            name="topic2"
            value="Skill Development"
            checked={note.topics.includes("Skill Development")}
            onChange={handleChange}
          />
          <label htmlFor="topic2">Skill Development</label><br />
          <input
            type="checkbox"
            id="topic3"
            name="topic3"
            value="Tech Industry"
            checked={note.topics.includes("Tech Industry")}
            onChange={handleChange}
          />
          <label htmlFor="topic3">Tech Industry</label><br />
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
          <div className="c1">
            <ul>
              {post.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Community;