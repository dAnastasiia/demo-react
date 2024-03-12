export interface Page {
  textKey: string;
  href: string;
  icon?: React.ReactNode;
}

export interface SectionProps extends Page {
  onClick: () => void;
}
