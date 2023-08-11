import React from "react";
import styles from "./Chapter.module.css";
import { useParams, useOutletContext } from "react-router-dom";

// useOutletContext: passing the data from "<Outlet/>" 
// The useOutletContext hook allows access to the context data of the parent element, which is provided as the context prop to the Outlet element.
function Chapter() {
  const { chapterId } = useParams();
  const course = useOutletContext();

  const chapter = course.chapters.find(
    (chapter) => String(chapter.chapter) === chapterId
  );
  return (
    <div>
      <h1>{chapter.title}</h1>
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src="https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg"
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
