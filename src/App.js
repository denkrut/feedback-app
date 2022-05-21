import React, { Fragment, useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import Card from "./components/shared/Card";

import FeedbackForm from "./components/FeedbackForm";

import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header bgColor="red" textColor="blue" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

{
  /* 

const title = "Blog Post";
  const body = "This is me blog post";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];

  const loading = false;
  const showComments = false;

  const commentsBloc = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  if (loading) return <h1>Loading...</h1>;

<h1>{title.toLocaleLowerCase()}</h1>
      <p>{body}</p>
      {Math.random() * (5 + 5)}

      {showComments && commentsBloc}
    </div> */
}
