
import React, { useEffect, useState } from 'react';
import Feedback from './feedback/feedback.jsx';
import Description from './description/description.jsx';
import Notification from './notification/notification.jsx';
import css from './App.module.css';
import Option from './options/Options.jsx';


export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem ("feedbackCount");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback)
    }    
    return {
    good: 0,
    neutral: 0,
    bad: 0
    }
  });
  
  useEffect(()=> {
    localStorage.setItem("feedbackCount", JSON.stringify(feedback))
  }, [feedback])


  const resetFeedback = () => {
    setFeedback({good: 0, neutral: 0, bad:0})
  }
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  return (
    <div className={css.container}>
 <Description />
 <Option  updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
 <Feedback feedback={feedback} positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} />
 {totalFeedback === 0 && (<Notification />)}
    </div>
  )
  }

