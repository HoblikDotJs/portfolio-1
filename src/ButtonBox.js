import React from "react";


// gifs
import gworkone from "./gifs/rpg/final.gif";
import gworktwo from "./gifs/bug/final.gif";
import gworkthree from "./gifs/ecosystem/final.gif";
import gworkfour from "./gifs/bubbles/final.gif"; 
// jpgs
import workone from "./gifs/rpg/final.jpg";
import worktwo from "./gifs/bug/final.jpg";
import workthree from "./gifs/ecosystem/final.jpg";
import workfour from "./gifs/bubbles/final.jpg";

export const posts = [
  {
    id: 0,
    content: {
      title: "RPG Game",
      image: workone,
      gif: gworkone,
      link: "https://github.com/HoblikDotJs/RPG-Game",
      content: "Object-oriented RPG multiplayer game with hand drawn graphics",
    },
  },
  {
    id: 1,
    content: {
      title: "Bugtracker",
      image: worktwo,
      gif: gworktwo,
      link: "https://github.com/HoblikDotJs/Bugtracker",
      content: "A shared to-do list that can function as a bugtracker",
    },
  },
  {
    id: 2,
    content: {
      title: "Ecosystem wallpaper",
      image: workthree,
      gif: gworkthree,
      link: "https://github.com/HoblikDotJs/Ecosystem",
      content: "An ecosystem of particles that makes a nice live wallpaper",
    },
  },
  {
    id: 3,
    content: {
      title: "AI Bubbles",
      image: workfour,
      gif: gworkfour,
      link: "https://github.com/HoblikDotJs/Bubbles",
      content:
        "Neuroevolution bubbles learn to fly upwards while avoiding sharp walls",
    },
  },
];

const UiCard = (props) => {
  let { link, image, title, content, gif } = props.content;
  return (
    <div class="card-wrapper" onClick={() => window.open(link)}>
      <div className="card-img">
        <img className="project-img" alt="project"
          src={image}
          onMouseEnter={(e) => {
            e.currentTarget.src = gif;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.src = image;
          }}
        />
      </div>
      <div className="card-content">
        <h3> {title} </h3>
        <div className="content-description"> {content} </div>
      </div>
    </div>
  );
};

export class SocialCard extends React.Component {
  render() {
    return (
      <div className="card-body">
        <UiCard content={this.props.content} />
      </div>
    );
  }
}
