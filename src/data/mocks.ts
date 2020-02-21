type Job = {
  title: string;
  production: string;
  year: number;
  genre: string;
  channel: string;
};

export type Data = {
  matchPercentage: number;
  name: string;
  location: string;
  about: string;
  jobs: Job[];
  relevantCreditsCount: number;
};

export const data: Data = {
  matchPercentage: 70,
  name: "Richard Smith",
  location: "Los Angeles, CA",
  about: `I’m an experienced editor and I bring talent and a good attitude to the edit.`,
  jobs: [
    {
      title: "Line Producer",
      production: "Big Brother (Season 8)",
      year: 2019,
      genre: "TV Reality/Doc",
      channel: "CBS - Our House Productions"
    }
  ],
  relevantCreditsCount: 12
};
