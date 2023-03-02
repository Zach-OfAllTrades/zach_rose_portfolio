export type PositionType = {
  id: string;
  employerId: string;
  title: string;
  responsibilities: string[];
  accomplishments?: string[];
  technologies: string[];
  startDate: string;
  endDate: string;
};

export type ExperienceType = {
  id: string;
  employer: string;
  position: PositionType;
  overview?: string;
  startDate: string;
  endDate: string;
};
