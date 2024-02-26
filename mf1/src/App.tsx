import "./App.css";
import { SocialCard } from "./components/card";

const posts = [
  {
    id: 0,
    content: {
      title: "Shiba Inu",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      content:
        "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
    },
    likeIsClicked: true,
    likes: 5,
  },
];

function App() {
  return (
    <div className="card-grid-view">
      {posts.map((e) => (
        <SocialCard
          key={e.id}
          content={e.content}
          likes={e.likes}
          likeIsClicked={e.likeIsClicked}
        />
      ))}
    </div>
  );
}

export default App;
