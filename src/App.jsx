


import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const feedbacks = window.localStorage.getItem("feedbacks");
    if (feedbacks) {
      return JSON.parse(feedbacks);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes({
      ...feedbackTypes,
      [feedbackType]: feedbackTypes[feedbackType] + 1,
    });
  };

  const onReset = () => {
    setFeedbackTypes({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  };

  const positive = Math.round((feedbackTypes.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={onReset}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback !== 0 && (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      )}
    </div>
  );
}

export default App;
