import React, { useState } from 'react'
import {  FeedbackType } from '../../utils/feedbackTypes';
import FeedbackContentStep from './Steps/FeedbackContentStep';
import FeedbackTypeStep from './Steps/FeedbackTypeStep';

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const handleRestartFeedback = () => setFeedbackType(null);

  return (
    <div className="wg-form-container">
      { !feedbackType
          ? (
             <FeedbackTypeStep feedbackTypeChanged={ setFeedbackType } />
            )
          : (
            <FeedbackContentStep feedbackType={ feedbackType } restartFeedback={ handleRestartFeedback } />
          )
      }
      <footer className="wg-footer">
        Feito com ♥ por <a href="https://github.com/dihsantanna">{ `Diogo Sant'Anna` }</a>
      </footer>
    </div>
  )
}
