import React, { useState } from 'react'
import {  FeedbackType } from '../../utils/feedbackTypes';
import FeedbackContentStep from './Steps/FeedbackContentStep';
import FeedbackSuccessStep from './Steps/FeedbackSuccessStep';
import FeedbackTypeStep from './Steps/FeedbackTypeStep';

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  return (
    <div className="wg-form-container">
      { feedbackSent
        ? (
          <FeedbackSuccessStep restartFeedback={ handleRestartFeedback } />
          )
        : (
            <>
              { !feedbackType
                ? (
                  <FeedbackTypeStep
                    feedbackTypeChanged={ setFeedbackType }
                  />
                  )
                : (
                  <FeedbackContentStep
                    feedbackType={ feedbackType }
                    restartFeedback={ handleRestartFeedback }
                    feedbackSent={ () => setFeedbackSent(true) }
                  />
                  )
              }
            </>
          )
      }
      <footer className="wg-footer">
        Feito com ♥ por <a title="perfil github" href="https://github.com/dihsantanna">{ `Diogo Sant'Anna` }</a>
      </footer>
    </div>
  )
}
