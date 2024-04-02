


import styles from "./Feedback.module.css";

const Feedback = ({ feedbackTypes, totalFeedback, positive }) => {
  return (
    <div className={styles.feedback_container}>
      <p className={styles.feedback}>Good: {feedbackTypes.good}</p>
      <p className={styles.feedback}>Neutral: {feedbackTypes.neutral}</p>
      <p className={styles.feedback}>Bad: {feedbackTypes.bad}</p>
      <p className={styles.feedback}>Total : {totalFeedback}</p>
      <p className={styles.feedback}>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;