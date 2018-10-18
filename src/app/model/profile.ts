export interface Profile {
  firstName: string;
  lastName: string;
}

const DEFAULT_PROFILE: Profile = {
  firstName: '',
  lastName: '',
};

export function createProfile(profile: Partial<Profile> = {}): Profile {
  return {
    ...DEFAULT_PROFILE,
    ...profile,
  };
}
