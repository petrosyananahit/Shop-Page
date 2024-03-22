import React, { useState } from 'react';
import styles from "../styles/Comments.module.css";
import star from "../images/Star.png";
import etc from "../images/Etc.png";
import frame from "../images/Frame.png";
import { CommentsData } from "../CommentsData";

function Comments() {
  const [displayedReviews, setDisplayedReviews] = useState(2);

  const handleLoadMoreReviews = () => {
    setDisplayedReviews(prevDisplayedReviews => prevDisplayedReviews + 2);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "34px", fontWeight: "700" }}>OUR HAPPY CUSTOMERS</p>
      <div className={styles.commentsArea__container} style={{ padding: "30px" }}>
        {CommentsData.slice(0, displayedReviews).map(e => {
          return (
            <div key={e.id} className={styles.comment_container}>
              <div className={styles.container}>
                <div className={styles.contentContainer}>
                  <div className={styles.imageContainer}>
                  <img src={star} alt="star" />
                     <img src={star} alt="star" />
                     <img src={star} alt="star" />
                     <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <div className={styles.additionalPicture}>
                    <img src={etc} alt="etc" />
                  </div>
                </div>
                <div className={styles.title}>
                  <h4>{e.name}<img src={frame} alt='' /></h4>
                </div>
                <div className={styles.text}>
                  <p>{e.text}</p>
                </div>
              </div>
              <div className={styles.date}>
                <p>{e.date}</p>
              </div>
            </div>
          );
        })}
      </div>
      {CommentsData.length > displayedReviews && (
        <div style={{ textAlign: "center" }}>
          <button className={styles.button} onClick={handleLoadMoreReviews}>Load More Reviews</button>
        </div>
      )}
    </div>
  );
}

export default Comments;

