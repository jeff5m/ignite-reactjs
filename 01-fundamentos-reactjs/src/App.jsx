import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jeff Lee"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, autem."
          />{" "}
          <Post
            author="Sid Man"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus quae fuga officiis ut minima temporibus animi, facilis aut, voluptatibus deleniti rem rerum! Repellat adipisci quos, rem expedita ad vitae?"
          />
        </main>
      </div>
    </div>
  );
}
