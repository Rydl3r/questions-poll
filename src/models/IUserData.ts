import {
  Gender,
  Mood,
  Personality,
  SexIsPriority,
  GoalsMood,
  EmotionalControlTricky,
  MostImportantThing,
  Source,
} from '@/const';

export interface IUserData {
  gender: Gender;
  partnerGender: Gender;
  isSingle: boolean;
  isParent: boolean;
  currentRelationshipMood: Exclude<Mood, Mood.NeverInRelationship>;
  lastRelationshipMood: Mood;
  personality: Personality;
  partnerPersonality: Personality;
  sexIsAPriority: SexIsPriority;
  relationshipGoalsMood: GoalsMood;
  tendToOverthink: boolean;
  isEmotionalControlTricky: EmotionalControlTricky;
  mostImportantThing: MostImportantThing;
  source: Source;
}
