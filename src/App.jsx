import { useEffect, useState } from 'react';
import css from './App.module.css';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const feedbackInit = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    const feedbackLocalStorage = window.localStorage.getItem('feedback-status');

    if (feedbackLocalStorage !== null) {
      return JSON.parse(feedbackLocalStorage);
    }

    return feedbackInit;
  });
  useEffect(() => {
    window.localStorage.setItem('feedback-status', JSON.stringify(feedback));
  }, [feedback]);

  const buttons = ['good', 'neutral', 'bad'];
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

  function updateFeedback(type) {
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });
  }

  function resetFeedback() {
    setFeedback(feedbackInit);
  }

  return (
    <div className={css.container}>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      ></Description>
      <Options
        updateFeedback={updateFeedback}
        buttons={buttons}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      ></Options>
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        ></Feedback>
      ) : (
        <Notification notificationText="Not feedback yet"></Notification>
      )}
    </div>
  );
}

export default App;
