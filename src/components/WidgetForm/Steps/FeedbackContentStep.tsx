import { ArrowLeft } from 'phosphor-react';
import React, { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '../../../utils/feedbackTypes';
import CloseButton from '../../CloseButton';
import ScreenshotButton from '../ScreenshotButton';

interface FeedbackContentStepProp {
  feedbackType: FeedbackType,
  restartFeedback(): void,
  feedbackSent(): void,
}

export default function FeedbackContentStep(
  { feedbackType, restartFeedback, feedbackSent }: FeedbackContentStepProp
  ) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleSubmitFeedback = (e: FormEvent) => {
    e.preventDefault();
    console.log(
      {
        screenshot,
        comment
      }
    );
    setScreenshot(null);
    setComment('');
    feedbackSent();
  }

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
    <form onSubmit={  handleSubmitFeedback }>
      <textarea
        className="scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte com detalhes o que está acontecendo..."
        onChange={ ({ target }) => setComment(target.value) }
        value={ comment }
      />
      <footer>
        <ScreenshotButton
          screenshotTook={ setScreenshot }
          screenshot={ screenshot }
        />
        <button
        disabled={ !comment }
        type="submit"
        className="btn-submit text-shadow-xl"
        >
          Enviar feedback
        </button>
      </footer>
    </form>
    </>
  )
}
