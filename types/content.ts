export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export type EvolutionStep = {
  step: string;
  title: string;
  desc: string;
  variant: "light" | "dark";
};

export type TrustStat = {
  value: string;
  label: string;
};

export type Service = {
  no: string;
  title: string;
  desc: string;
};

export type Sector = {
  no: string;
  name: string;
  desc: string;
  image: string;
  imageAlt: string;
};

export type MethodStep = {
  no: string;
  title: string;
  desc: string;
};

export type FutureFamily = {
  no: string;
  status: string;
  title: string;
  desc: string;
  href?: string;
};

export type PartnerValue = {
  no: string;
  title: string;
  desc: string;
};

export type TrustBadge = {
  title: string;
  sub: string;
};

export type FooterLink = {
  href: string;
  label: string;
};

export type FooterColumn = {
  label: string;
  links: FooterLink[];
};

export type ApproachChip = {
  label: string;
};

export type Pillar = {
  step: string;
  title: string;
  desc: string;
  variant: "light" | "dark";
};

export type Domain = {
  no: string;
  name: string;
};

export type ResourceCard = {
  href: string;
  kicker: string;
  title: string;
  desc: string;
  cta: string;
  image: string;
  imageAlt: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type PatentSlot = {
  no: string;
  label: string;
  area?: string;
};

export type DesignArea = {
  no: string;
  title: string;
  desc: string;
};

export type FutureDirection = {
  no: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

export type TechPrinciple = {
  id: string;
  kicker: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

export type SolutionFamily = {
  href: string;
  name: string;
  badge: string;
  desc: string;
  cta: string;
  image: string;
  imageAlt: string;
  variant: "hapo" | "hyper";
};

export type ContactReason = {
  no: string;
  title: string;
  desc: string;
  href: string;
  motivo: string;
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

export type HapoModel = {
  name: string;
  accent: string;
  desc: string;
  image: string;
  imageAlt: string;
  href?: string;
};

export type HapoSectorTile = {
  name: string;
  image: string;
  imageAlt: string;
};

export type SpecItem = {
  label: string;
  value: string;
};

export type HyperShellModel = {
  name: string;
  accent: string;
  desc: string;
  image: string;
  imageAlt: string;
  specs: SpecItem[];
  href?: string;
};

export type ProductGalleryShot = {
  src: string;
  alt: string;
  short: string;
  label: string;
  fit?: "contain" | "cover";
};

export type ProductBadge = {
  title: string;
  sub: string;
};

export type ProductReassure = {
  title: string;
  sub: string;
};

export type ProductMetric = {
  v: string;
  l: string;
};

export type ProductFeature = {
  kicker: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  metrics: ProductMetric[];
};

export type ProductKeySpec = {
  label: string;
  value: string;
  note: string;
};

export type ProductBoxItem = {
  name: string;
  sub: string;
  image: string;
  imageAlt: string;
};

export type ProductReview = {
  text: string;
  name: string;
  role: string;
  initials: string;
};

export type SpecTableRow = {
  label: string;
  values: string[];
};
