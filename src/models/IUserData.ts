export interface IUserData {
  gender: 'male' | 'female';
  partnerGender: 'male' | 'female';
  isSingle: boolean;
  isParent: boolean;
  currentRelationshipMood: 'happy' | 'unhappy' | 'neutral';
  lastRelationshipMood:
    | 'happy'
    | 'unhappy'
    | 'neutral'
    | 'never_in_relationship';
  personality: 'introvert' | 'extrovert' | 'ambivert';
  partnerPersonality: 'introvert' | 'extrovert' | 'ambivert';
  sexIsAPriority:
    | 'stronglyAgree'
    | 'agree'
    | 'neutral'
    | 'disagree'
    | 'stronglyDisagree';
  relationshipGoalsMood: 'optimistic' | 'cautious' | 'anxious';
  tendToOverthink: boolean;
  isEmotionalControlTricky: 'yes' | 'sometimes' | 'rarely' | 'no';
  mostImportantThing: 'success' | 'romance' | 'stability' | 'freedom';
  source:
    | 'poster_or_billboard'
    | 'friend_or_family'
    | 'instagram'
    | 'mail'
    | 'online_tv'
    | 'tv'
    | 'radio'
    | 'search_engine'
    | 'newspaper_or_magazine'
    | 'facebook'
    | 'blog_post_or_website'
    | 'podcast'
    | 'youtube'
    | 'influencer'
    | 'pinterest'
    | 'other';
}
