import React from 'react';
import css from './Options.module.css';

const Options = ({ buttons, updateFeedback, totalFeedback, resetFeedback }) => {
  const handleFeedbackClick = (item) => {
    updateFeedback(item);
  };

  return (
    <>
      <ul className={css.list}>
        {buttons.map(item => {
          return (
            <li key={item}>
              <button className={css.button} onClick={() => handleFeedbackClick(item)}>
                {item}
              </button>
            </li>
          );
        })}
        {totalFeedback > 0 && (
          <button className={css.button} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </ul>
    </>
  );
};

export default Options;