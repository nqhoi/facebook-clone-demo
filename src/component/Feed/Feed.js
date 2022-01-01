import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";

function Feed() {
  return <div className="feed">
    <StoryReel/>
    <MessageSender />

    <Post
      profilePic=""
      messages="this is a test"
      username="Name Test"
      image="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/240530567_2026475440852240_1071043754498572048_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=825194&_nc_ohc=uXIturmOl3YAX8fhMYc&_nc_ht=scontent.fdad4-1.fna&oh=b71600d1c2d5fbaacd543b5640839df9&oe=6150373D"
    />
  </div>;
}

export default Feed;
