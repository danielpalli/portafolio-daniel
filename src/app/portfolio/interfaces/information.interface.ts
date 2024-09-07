export interface Basics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface Works {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  stack: string[];
}

export interface Location {
  city: string;
  countryCode: string;
  country: string;
}

export interface Profile {
  network: string;
  url: string;
  icon: string;
}

export interface Information {
  basics: Basics;
  works: Works[];
  skills: Skills[];
  projects: Projects[];
  certificates: Certificates[];
}

export interface Skills {
  name: string;
  stars: string;
}

export interface Projects {
  name: string;
  description: string;
  stack: string[];
  url: string;
  repository: string;
}

export interface Certificates {
  name: string;
  description: string;
  date: string;
  url: string;
}
