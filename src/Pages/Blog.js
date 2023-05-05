import React from "react";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import blogposts from "../shared/blogposts";
import "./Blog.css";

function Blog() {
  const [post, setPost] = useState(false);
  const [text, setText] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Contact`;
    navigate(path);
  };
  return (
    <div className="about-wrapper" id="About">
      <div className="about-inner">
        <div className="about-inner-col">
          <div className="about-title-wrapper">
            <div className="about-title">Secure Mindset</div>
          </div>
          <div className="blog-text">
            <p>
              Welcome to our cybersecurity blog! Here, you will find a wealth of
              information and insights into the constantly evolving world of
              cybersecurity. As our lives become increasingly digital, it is
              more important than ever to stay informed about the latest threats
              and best practices for protecting our online identities and data.
              Whether you are a business owner, or simply someone who wants to
              learn more about staying safe online, this blog is for you. From
              cutting-edge research and analysis to practical tips and advice,
              our goal is to provide you with the knowledge to keep you up to
              date with the complex landscape of cybersecurity.
            </p>
            <p>Click on one of the tiles to dive in!</p>
          </div>
          <div className="buttons-container">
            <button className="button-arounder" onClick={routeChange}>
              Click here to connect with us!
            </button>
          </div>
        </div>

        <div className="about-inner-col about-pic-block">
          <div className="about-content-inner-block">
            <img
              className="blog-picture"
              src="./blog_thumbnails/blogpost1.png"
              onClick={() => {
                setPost(true);
                setText(blogposts[8]);
              }}
            ></img>
          </div>

          <div className="about-content-inner-block">
            <img
              className="about-picture"
              src="./blog_thumbnails/blogpost2.png"
              onClick={() => {
                setPost(true);
                setText(blogposts[7]);
              }}
            ></img>
          </div>
          <div className="about-content-inner-block">
            <img
              className="about-picture"
              src="./blog_thumbnails/blogpost3.png"
              onClick={() => {
                setPost(true);
                setText(blogposts[6]);
              }}
            ></img>
          </div>
          <div className="about-content-inner-block">
            <img
              className="about-picture"
              src="./blog_thumbnails/blogpost4.png"
              onClick={() => {
                setPost(true);
                setText(blogposts[5]);
              }}
            ></img>
          </div>
          <div className="about-content-inner-block">
            <img
              className="about-picture"
              src="./blog_thumbnails/blogpost5.png"
              onClick={() => {
                setPost(true);
                setText(blogposts[4]);
              }}
            ></img>
          </div>
          <div className="about-content-inner-block">
            <img
              className="about-picture"
              src="./blog_thumbnails/blogpost6.png"
              onClick={() => {
                setPost(true);
                setText(blogposts[3]);
              }}
            ></img>
          </div>
          <div className="about-content-inner-block">
            <img
              className="about-picture"
              src="./blog_thumbnails/blogpost7.png"
              onClick={() => {
                setPost(true);
                setText(blogposts[2]);
              }}
            ></img>
          </div>
          <div className="about-content-inner-block">
            <img
              className="about-picture"
              src="./blog_thumbnails/blogpost8.png"
              onClick={() => {
                setPost(true);
                setText(blogposts[1]);
              }}
            ></img>
          </div>
          <div className="about-content-inner-block">
            <img
              className="about-picture"
              src="./blog_thumbnails/blogpost9.png"
              onClick={() => {
                setPost(true);
                setText(blogposts[0]);
              }}
            ></img>
          </div>
        </div>
      </div>
      {post && <Modal setPost={setPost} text={text} />}
    </div>
  );
}

export default Blog;
