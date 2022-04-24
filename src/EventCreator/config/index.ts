export interface eventStructure {
  eventName: string;
  title: {
    en: string;
    es: string;
    ca: string;
    pt: string;
  };
  subtitle: {
    en: string;
    es: string;
    ca: string;
    pt: string;
  };
  description: {
    en: string;
    es: string;
    ca: string;
    pt: string;
  };
  capacity: number;
}

export type languageOption = 'EN' | 'ES' | 'CA' | 'PT';
