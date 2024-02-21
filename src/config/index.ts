import { IQuestion } from '../models/IQuestion';

const aboutUsQuestion: IQuestion = {
  id: 10,
  title: 'How did you heard about us',
  type: 'question',
  dataKey: 'source',
  options: [
    {
      title: 'Poster or Billboard',
      dataValue: 'poster_or_billboard',
    },
    {
      title: 'Friend or Family',
      dataValue: 'friend_or_family',
    },
    {
      title: 'Instagram',
      dataValue: 'instagram',
    },
    {
      title: 'Direct Mail or Package Insert',
      dataValue: 'mail',
    },
    {
      title: 'Online TV or Streaming TV',
      dataValue: 'online_tv',
    },
    {
      title: 'TV',
      dataValue: 'tv',
    },
    {
      title: 'Radio',
      dataValue: 'radio',
    },
    {
      title: 'Search Engine (Google, Bing, etc.)',
      dataValue: 'search_engine',
    },
    {
      title: 'Newspaper or Magazine',
      dataValue: 'newspaper_or_magazine',
    },
    {
      title: 'Facebook',
      dataValue: 'facebook',
    },
    {
      title: 'Blog Post or Website Review',
      dataValue: 'blog_post_or_website',
    },
    {
      title: 'Podcast',
      dataValue: 'podcast',
    },
    {
      title: 'Influencer',
      dataValue: 'influencer',
    },
    {
      title: 'Youtube',
      dataValue: 'youtube',
    },
    {
      title: 'Pinterest',
      dataValue: 'pinterest',
    },
    {
      title: 'Other',
      dataValue: 'other',
    },
  ],
};

const whatIsMostImportantQuestion: IQuestion = {
  id: 8,
  title: 'What is most important to you',
  type: 'question',
  dataKey: 'mostImportantThing',
  options: [
    {
      title: 'Success',
      dataValue: 'success',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Romance',
      dataValue: 'romance',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Stability',
      dataValue: 'stability',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Freedom',
      dataValue: 'freedom',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
  ],
};

const isEmotionalControlTricky: IQuestion = {
  id: 9,
  title: 'Is emotional control tricky for you',
  type: 'question',
  dataKey: 'isEmotionalControlTricky',
  options: [
    {
      title: 'Yes',
      dataValue: 'yes',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Sometimes',
      dataValue: 'sometimes',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Rarely',
      dataValue: 'rarely',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Not at all',
      dataValue: 'no',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
  ],
};

const howDoesItWorkQuestion: IQuestion = {
  id: 7,
  title: 'So how does it work?',
  description:
    'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
  type: 'info',
  options: [
    {
      title: 'Next',
      getNextQuestionId: (userData) =>
        userData.tendToOverthink
          ? whatIsMostImportantQuestion.id
          : isEmotionalControlTricky.id,
    },
  ],
};

const overthinkQuestion: IQuestion = {
  id: 6,
  title: 'Do you tend to overthink',
  type: 'question',
  dataKey: 'tendToOverthink',
  options: [
    {
      title: 'Yes',
      dataValue: 'yes',
      getNextQuestionId: () => howDoesItWorkQuestion.id,
    },
    {
      title: 'No',
      dataValue: 'no',
      getNextQuestionId: () => howDoesItWorkQuestion.id,
    },
  ],
};

const relationshipGoalsQuestion: IQuestion = {
  id: 15,
  title: 'When you think about your relationship goals, you feel...?',
  type: 'question',
  dataKey: 'relationshipGoalsMood',
  options: [
    {
      title: 'Optimistic! They are totally doable, with some guidance.',
      dataValue: 'optimistic',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Cautious. I`ve struggled before, but I`m hopeful.',
      dataValue: 'cautious',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'I’m feeling a little anxious, honestly.',
      dataValue: 'anxious',
      getNextQuestionId: () => aboutUsQuestion.id,
    },
  ],
};

const partnerPriorityQuestion: IQuestion = {
  id: 14,
  title: 'Do you agree with the statement below?',
  description: 'My partner and I make sex a priority in our relationship',
  type: 'question',
  options: [
    {
      title: 'Strongly agree',
      dataValue: 'stronglyAgree',
      getNextQuestionId: () => relationshipGoalsQuestion.id,
    },
    {
      title: 'Agree',
      dataValue: 'agree',
      getNextQuestionId: () => relationshipGoalsQuestion.id,
    },
    {
      title: 'Neutral',
      dataValue: 'neutral',
      getNextQuestionId: () => relationshipGoalsQuestion.id,
    },
    {
      title: 'Disagree',
      dataValue: 'disagree',
      getNextQuestionId: () => relationshipGoalsQuestion.id,
    },
    {
      title: 'Strongly disagree',
      dataValue: 'stronglyDisagree',
      getNextQuestionId: () => relationshipGoalsQuestion.id,
    },
  ],
};

const partnerGenderQuestion: IQuestion = {
  id: 13,
  title: 'What is your partner`s gender?',
  type: 'question',
  options: [
    {
      title: 'Male',
      dataValue: 'male',
      getNextQuestionId: () => partnerPriorityQuestion.id,
    },
    {
      title: 'Female',
      dataValue: 'female',
      getNextQuestionId: () => partnerPriorityQuestion.id,
    },
  ],
};

const partnerIntrovertOrExtrovertQuestion: IQuestion = {
  id: 12,
  title: 'Is your partner an introvert or extrovert?',
  type: 'question',
  dataKey: 'partnerPersonality',
  options: [
    {
      title: 'Introvert',
      dataValue: 'introvert',
      getNextQuestionId: () => partnerGenderQuestion.id,
    },
    {
      title: 'Extrovert',
      dataValue: 'extrovert',
      getNextQuestionId: () => partnerGenderQuestion.id,
    },
    {
      title: 'A bit of both',
      dataValue: 'ambivert',
      getNextQuestionId: () => partnerGenderQuestion.id,
    },
  ],
};

const singleParentProblemQuestion: IQuestion = {
  id: 11,
  title:
    'Single {gender} who {isParent} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
  type: 'question',
  dataKey: 'lastRelationshipMood',
  options: [
    {
      title: 'I was unhappy with low things were going in my relationship',
      dataValue: 'unhappy',
      getNextQuestionId: () => partnerIntrovertOrExtrovertQuestion.id,
    },
    {
      title:
        'I was unhappy with parts of my relationship, but some thing were working',
      dataValue: 'neutral',
      getNextQuestionId: () => partnerIntrovertOrExtrovertQuestion.id,
    },
    {
      title: 'I was generally happy with my relationship',
      dataValue: 'happy',
      getNextQuestionId: () => partnerIntrovertOrExtrovertQuestion.id,
    },
    {
      title: 'I`ve never been in a relationship',
      dataValue: 'never_in_relationship',
      getNextQuestionId: () => partnerIntrovertOrExtrovertQuestion.id,
    },
  ],
};

const inRelationshipProblemQuestion: IQuestion = {
  id: 5,
  title:
    'A {gender} who {isParent} need a slightly different approach to improve their relationship. Which statement best describes you?',
  type: 'question',
  dataKey: 'currentRelationshipMood',
  options: [
    {
      title: 'I`m very unhappy with how things are going in my relationship',
      dataValue: 'unhappy',
      getNextQuestionId: () => overthinkQuestion.id,
    },
    {
      title:
        'I`m unhappy with parts of my relationship, but some things are working well',
      dataValue: 'neutral',
      getNextQuestionId: () => overthinkQuestion.id,
    },
    {
      title: 'I`m generally happy in my relationship',
      dataValue: 'happy',
      getNextQuestionId: () => overthinkQuestion.id,
    },
  ],
};

const isSingleParentQuestion: IQuestion = {
  id: 3,
  title: 'Are you a single parent?',
  type: 'question',
  dataKey: 'isParent',
  options: [
    {
      title: 'Yes',
      dataValue: true,
      getNextQuestionId: () => inRelationshipProblemQuestion.id,
    },
    {
      title: 'No',
      dataValue: false,
      getNextQuestionId: () => inRelationshipProblemQuestion.id,
    },
  ],
};

const isParentQuestion: IQuestion = {
  id: 4,
  title: 'Are you a parent?',
  type: 'question',
  dataKey: 'isParent',
  options: [
    {
      title: 'Yes',
      dataValue: true,
      getNextQuestionId: () => singleParentProblemQuestion.id,
    },
    {
      title: 'No',
      dataValue: false,
      getNextQuestionId: () => singleParentProblemQuestion.id,
    },
  ],
};

const relationshipStatusQuestion: IQuestion = {
  id: 2,
  title:
    'So we can get to know you better, tell us about your relationship status',
  type: 'question',
  dataKey: 'isSingle',
  options: [
    {
      title: 'Single',
      dataValue: true,
      getNextQuestionId: () => isSingleParentQuestion.id,
    },
    {
      title: 'In a relationship',
      dataValue: false,
      getNextQuestionId: () => isParentQuestion.id,
    },
  ],
};

const genderQuestion: IQuestion = {
  id: 1,
  title: 'Select your gender',
  type: 'question',
  dataKey: 'gender',
  options: [
    {
      title: 'Female',
      dataValue: 'female',
      getNextQuestionId: () => relationshipStatusQuestion.id,
    },
    {
      title: 'Male',
      dataValue: 'male',
      getNextQuestionId: () => relationshipStatusQuestion.id,
    },
  ],
};

const questions = [
  genderQuestion,
  relationshipStatusQuestion,
  isSingleParentQuestion,
  isParentQuestion,
  inRelationshipProblemQuestion,
  relationshipGoalsQuestion,
  partnerPriorityQuestion,
  partnerGenderQuestion,
  partnerIntrovertOrExtrovertQuestion,
  singleParentProblemQuestion,
  aboutUsQuestion,
  isEmotionalControlTricky,
  overthinkQuestion,
  whatIsMostImportantQuestion,
  howDoesItWorkQuestion,
];

export default questions;
