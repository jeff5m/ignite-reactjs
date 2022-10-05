import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Jeff Lee"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, autem."
      />{" "}
      <Post
        author="Sid Man"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus quae fuga officiis ut minima temporibus animi, facilis aut, voluptatibus deleniti rem rerum! Repellat adipisci quos, rem expedita ad vitae?"
      />
      <Post />
    </div>
  );
}