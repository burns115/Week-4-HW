import React, { useState } from 'react';
import { usePost } from '../hooks/usePost';

const PostingData = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { postData, response, error, loading } = usePost();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      body,
      userId: 1, 
    };

    postData('/posts', data); 
  };

  if (!response) {
    return (
      <div className="postForm">
        <h2>Post Form</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <form className="postForm" onSubmit={handleSubmit}>
          <div>
            <label className="titleLabel" htmlFor="title">Title: </label>
            <br />
            <input
              className="titleInput" 
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="bodyLabel" htmlFor="body">Body: </label>
            <br />
            <textarea
              className="bodyInput"
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <h2>Response:</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      <button onClick={() => window.location.reload()}>Go Back</button>
    </div>
  );
};
  
export default PostingData;