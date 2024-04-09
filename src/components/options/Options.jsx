
import css from './options.module.css'
export default function Option ({updateFeedback, totalFeedback, resetFeedback }) {
  
    const handleClick = (feedbackType) => {
        updateFeedback(feedbackType);
      };
return (
    <>
     <button className={css.button} onClick={() => handleClick('good')}>Good</button>
      <button className={css.button} onClick={() => handleClick('neutral')}>Neutral</button>
      <button className={css.button} onClick={() => handleClick('bad')}>Bad</button>
    {totalFeedback > 0 && (<button className={css.button} onClick={resetFeedback}>Reset</button>)}
    </>
)
}