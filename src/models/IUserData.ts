import {
  Gender,
  Mood,
  Personality,
  SexIsPriority,
  GoalsMood,
  EmotionalControlTricky,
  MostImportantThing,
  Source,
  UserDataKeys,
} from '@/const';

export interface IUserData {
  [UserDataKeys.Gender]: Gender;
  [UserDataKeys.PartnerGender]: Gender;
  [UserDataKeys.IsSingle]: boolean;
  [UserDataKeys.IsParent]: boolean;
  [UserDataKeys.CurrentRelationshipMood]: Exclude<
    Mood,
    Mood.NeverInRelationship
  >;
  [UserDataKeys.LastRelationshipMood]: Mood;
  [UserDataKeys.Personality]: Personality;
  [UserDataKeys.PartnerPersonality]: Personality;
  [UserDataKeys.SexIsAPriority]: SexIsPriority;
  [UserDataKeys.RelationshipGoalsMood]: GoalsMood;
  [UserDataKeys.TendToOverthink]: boolean;
  [UserDataKeys.IsEmotionalControlTricky]: EmotionalControlTricky;
  [UserDataKeys.MostImportantThing]: MostImportantThing;
  [UserDataKeys.Source]: Source;
}
