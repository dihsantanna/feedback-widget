import React, { useState } from 'react'
import CloseButton from '../CloseButton';
import { feedbackTypes, FeedbackType } from '../../utils/feedbackTypes';

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="wg-form-container">
      <header className="wg-header">
        <span>Deixe seu feedback</span>
        <CloseButton />
      </header>
      { !feedbackType
          ? (
              <div className="wg-form">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                  return (
                    <button
                      key={ key }
                      className="btn-feedback-types"
                      type="button"
                      onClick={ () => setFeedbackType(key as FeedbackType) }
                    >
                      <img src={ value.image.src } alt={ value.image.alt } />
                      <span>{ value.title }</span>
                    </button>
                  );
                }) }
              </div>
            )
          : (
            <p>Hello World</p>
          )
      }
      <footer className="wg-footer">
        Feito com ♥ por <a href="https://github.com/dihsantanna">{ `Diogo Sant'Anna` }</a>
      </footer>
    </div>
  )
}
