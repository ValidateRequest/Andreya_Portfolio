export interface Highlight {
  value: string;
  label: string;
}

export interface Experience {
  role: string;
  organisation: string;
  period: string;
  highlights?: Highlight[];
  responsibilities: string[];
}

export interface Education {
  qualification: string;
  institution: string;
  period: string;
  result: string;
}

export interface Certification {
  name: string;
  status: 'Completed' | 'In progress';
  date?: string;
}