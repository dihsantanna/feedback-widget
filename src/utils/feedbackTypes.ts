import bugImgUrl from '../assets/bug.svg';
import ideaImgUrl from '../assets/idea.svg';
import thoughtImgUrl from '../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      src: bugImgUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      src: ideaImgUrl,
      alt: 'imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      src: thoughtImgUrl,
      alt: 'imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
