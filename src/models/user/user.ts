
export interface User {
  name: string;
  email: string;
  bio: string;
  website: string;
  pfp: string;
  notificationPreference: Record<string, { email: boolean; mobile: boolean }>;
}

export const EmptyUser: User = {
  name: "",
  email: "",
  bio: "",
  website: "",
  pfp: "",
  notificationPreference: {}
}