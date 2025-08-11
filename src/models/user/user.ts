

export interface User {
  name: string;
  email: string;
  bio: string;
  website: string;
  pfp: string;
  notificationPreferences: Map<string, boolean>
}

export const EmptyUser: User = {
  name: "",
  email: "",
  bio: "",
  website: "",
  pfp: "",
  notificationPreferences: new Map()
}