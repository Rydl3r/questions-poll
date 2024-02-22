import { IQuestion } from '@/models/IQuestion';
import {
  Source,
  Gender,
  Mood,
  Personality,
  SexIsPriority,
  GoalsMood,
  EmotionalControlTricky,
  MostImportantThing,
} from '@/const';

const aboutUsQuestion: IQuestion = {
  id: 10,
  title: 'How did you heard about us',
  type: 'question',
  dataKey: 'source',
  options: [
    {
      title: 'Poster or Billboard',
      dataValue: Source.PosterOrBillboard,
    },
    {
      title: 'Friend or Family',
      dataValue: Source.FriendOrFamily,
    },
    {
      title: 'Instagram',
      dataValue: Source.Instagram,
    },
    {
      title: 'Direct Mail or Package Insert',
      dataValue: Source.Mail,
    },
    {
      title: 'Online TV or Streaming TV',
      dataValue: Source.OnlineTv,
    },
    {
      title: 'TV',
      dataValue: Source.Tv,
    },
    {
      title: 'Radio',
      dataValue: Source.Radio,
    },
    {
      title: 'Search Engine (Google, Bing, etc.)',
      dataValue: Source.SearchEngine,
    },
    {
      title: 'Newspaper or Magazine',
      dataValue: Source.NewspaperOrMagazine,
    },
    {
      title: 'Facebook',
      dataValue: Source.Facebook,
    },
    {
      title: 'Blog Post or Website Review',
      dataValue: Source.BlogPostOrWebsite,
    },
    {
      title: 'Podcast',
      dataValue: Source.Podcast,
    },
    {
      title: 'Influencer',
      dataValue: Source.Influencer,
    },
    {
      title: 'Youtube',
      dataValue: Source.Youtube,
    },
    {
      title: 'Pinterest',
      dataValue: Source.Pinterest,
    },
    {
      title: 'Other',
      dataValue: Source.Other,
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
      dataValue: MostImportantThing.Success,
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Romance',
      dataValue: MostImportantThing.Romance,
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Stability',
      dataValue: MostImportantThing.Stability,
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Freedom',
      dataValue: MostImportantThing.Freedom,
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
      dataValue: EmotionalControlTricky.Yes,
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Sometimes',
      dataValue: EmotionalControlTricky.Sometimes,
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Rarely',
      dataValue: EmotionalControlTricky.Rarely,
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Not at all',
      dataValue: EmotionalControlTricky.No,
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
      dataValue: true,
      getNextQuestionId: () => howDoesItWorkQuestion.id,
    },
    {
      title: 'No',
      dataValue: false,
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
      dataValue: GoalsMood.Optimistic,
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'Cautious. I`ve struggled before, but I`m hopeful.',
      dataValue: GoalsMood.Cautious,
      getNextQuestionId: () => aboutUsQuestion.id,
    },
    {
      title: 'I’m feeling a little anxious, honestly.',
      dataValue: GoalsMood.Anxious,
      getNextQuestionId: () => aboutUsQuestion.id,
    },
  ],
};

const partnerPriorityQuestion: IQuestion = {
  id: 14,
  title: 'Do you agree with the statement below?',
  description: '"My partner and I make sex a priority in our relationship"',
  type: 'question',
  dataKey: 'sexIsAPriority',
  options: [
    {
      title: 'Strongly agree',
      dataValue: SexIsPriority.StronglyAgree,
      getNextQuestionId: () => relationshipGoalsQuestion.id,
    },
    {
      title: 'Agree',
      dataValue: SexIsPriority.Agree,
      getNextQuestionId: () => relationshipGoalsQuestion.id,
    },
    {
      title: 'Neutral',
      dataValue: SexIsPriority.Neutral,
      getNextQuestionId: () => relationshipGoalsQuestion.id,
    },
    {
      title: 'Disagree',
      dataValue: SexIsPriority.Disagree,
      getNextQuestionId: () => relationshipGoalsQuestion.id,
    },
    {
      title: 'Strongly disagree',
      dataValue: SexIsPriority.StronglyDisagree,
      getNextQuestionId: () => relationshipGoalsQuestion.id,
    },
  ],
};

const partnerGenderQuestion: IQuestion = {
  id: 13,
  title: 'What is your partner`s gender?',
  type: 'question',
  dataKey: 'partnerGender',
  options: [
    {
      title: 'Male',
      dataValue: Gender.Male,
      getNextQuestionId: () => partnerPriorityQuestion.id,
    },
    {
      title: 'Female',
      dataValue: Gender.Female,
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
      dataValue: Personality.Introvert,
      getNextQuestionId: () => partnerGenderQuestion.id,
    },
    {
      title: 'Extrovert',
      dataValue: Personality.Extrovert,
      getNextQuestionId: () => partnerGenderQuestion.id,
    },
    {
      title: 'A bit of both',
      dataValue: Personality.Ambivert,
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
      dataValue: Mood.Unhappy,
      getNextQuestionId: () => partnerIntrovertOrExtrovertQuestion.id,
    },
    {
      title:
        'I was unhappy with parts of my relationship, but some thing were working',
      dataValue: Mood.Neutral,
      getNextQuestionId: () => partnerIntrovertOrExtrovertQuestion.id,
    },
    {
      title: 'I was generally happy with my relationship',
      dataValue: Mood.Happy,
      getNextQuestionId: () => partnerIntrovertOrExtrovertQuestion.id,
    },
    {
      title: 'I`ve never been in a relationship',
      dataValue: Mood.NeverInRelationship,
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
      dataValue: Mood.Unhappy,
      getNextQuestionId: () => overthinkQuestion.id,
    },
    {
      title:
        'I`m unhappy with parts of my relationship, but some things are working well',
      dataValue: Mood.Neutral,
      getNextQuestionId: () => overthinkQuestion.id,
    },
    {
      title: 'I`m generally happy in my relationship',
      dataValue: Mood.Happy,
      getNextQuestionId: () => overthinkQuestion.id,
    },
  ],
};

// per design, if the person is single, than after this question we lead him to question about parenting problems in relationship,
// and vice versa - if the person is in a relationship, we lead him to question about problems in single parent life
// which seems weird to me, but I'm following the design and the task description
// if this logic needs to be changed - it can be done easily, with 1 line of code
const isParentQuestion: IQuestion = {
  id: 4,
  title: 'Are you a {isSingle}parent?',
  type: 'question',
  dataKey: 'isParent',
  options: [
    {
      title: 'Yes',
      dataValue: true,
      getNextQuestionId: (userData) =>
        userData.isSingle
          ? inRelationshipProblemQuestion.id
          : singleParentProblemQuestion.id,
    },
    {
      title: 'No',
      dataValue: false,
      getNextQuestionId: (userData) =>
        userData.isSingle
          ? inRelationshipProblemQuestion.id
          : singleParentProblemQuestion.id,
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
      getNextQuestionId: () => isParentQuestion.id,
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
      dataValue: Gender.Female,
      getNextQuestionId: () => relationshipStatusQuestion.id,
    },
    {
      title: 'Male',
      dataValue: Gender.Male,
      getNextQuestionId: () => relationshipStatusQuestion.id,
    },
  ],
};

const questions = [
  genderQuestion,
  relationshipStatusQuestion,
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
