import { ArrowLeft } from 'phosphor-react';
import React from 'react';
import { FeedbackType, feedbackTypes } from '../../../utils/feedbackTypes';
import CloseButton from '../../CloseButton';

interface FeedbackContentStepProp {
  feedbackType: FeedbackType,
  restartFeedback(): void, 
}

export default function FeedbackContentStep(
  { feedbackType, restartFeedback }: FeedbackContentStepProp
  ) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header className="wg-header">
        <button
          type="button"
          className="arrow-left"
          onClick={ restartFeedback }
        >
          <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>
        <span className="title-content">
          <img
            className="img-content-title"
            src={ feedbackTypeInfo.image.src }
            alt={ feedbackTypeInfo.image.alt}/>
          { feedbackTypeInfo.title }
        </span>
        <CloseButton />
    </header>
    <div className="wg-form">
      
    </div>
    </>
  )
}
