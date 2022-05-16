import React, { Dispatch, SetStateAction } from 'react'
import { FeedbackType, feedbackTypes } from '../../../utils/feedbackTypes';
import CloseButton from '../../CloseButton';

interface FeedbackTypeChangeProp {
  feedbackTypeChanged: Dispatch<SetStateAction<FeedbackType | null>>
}

export default function FeedbackTypeStep(
  { feedbackTypeChanged }: FeedbackTypeChangeProp
  ) {
  return (
    <>
      <header className="wg-header">
        <span>Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="wg-form">
        { Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={ key }
                className="btn-feedback-types"
                type="button"
                onClick={ () => feedbackTypeChanged(key as FeedbackType) }
              >
                <img src={ value.image.src } alt={ value.image.alt } />
                <span>{ value.title }</span>
              </button>
            );
          })
        }
      </div>
    </>
  )
}
