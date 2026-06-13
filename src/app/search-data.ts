import { offerServices } from "./offer-data";

export type SearchItem = {
  id: string;
  title: string;
  snippet: string;
  terms: string;
  href: string;
};

export const searchItems: SearchItem[] = [
  {
    id: "home",
    title: "Remote Structural Engineers",
    snippet: "Remote structural engineering support, consultation, and project collaboration.",
    terms: "home remote structural engineers consultation solutions together anywhere",
    href: "/#home",
  },
  {
    id: "services",
    title: "Services",
    snippet: "Structural calculations, analysis, shop drawing review, and drafting support.",
    terms: "services structural calculations analysis drafting shop drawing review bim wood steel concrete",
    href: "/#services",
  },
  {
    id: "process",
    title: "Our Process",
    snippet: "Project intake, kickoff, quotation, execution, revisions, and completion.",
    terms: "process project intake kickoff meeting quotation execution revision completion timeline",
    href: "/#process",
  },
  {
    id: "about",
    title: "Who We Are",
    snippet: "Professional, dedicated, and experienced structural engineering team.",
    terms: "about who we are professional dedicated experienced kathmandu nepal team",
    href: "/#about",
  },
  {
    id: "choose",
    title: "Why Choose Us",
    snippet: "Delegated engineering support for productivity, cost, and project delivery.",
    terms: "why choose us delegate prolific competitive productivity cost saved outsource",
    href: "/#choose",
  },
  {
    id: "offer",
    title: "What We Offer",
    snippet: "Concrete, wood, steel, retrofit, masonry, drafting, and construction administration services.",
    terms: "offer concrete podium wood steel seismic retrofit masonry drafting construction administration ca non structural",
    href: "/what-we-offer",
  },
  ...offerServices.map((service) => ({
    id: service.id,
    title: service.title,
    snippet: service.body,
    terms: `${service.title} ${service.body} ${service.tags.join(" ")}`,
    href: `/what-we-offer#${service.id}`,
  })),
  {
    id: "contact",
    title: "Contact Us",
    snippet: "Send a free consultation request by email.",
    terms: "contact email consultation query message info sojha whatsapp telegram",
    href: "/#contact",
  },
];

export function getSearchResults(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];

  return searchItems
    .filter((item) => `${item.title} ${item.snippet} ${item.terms}`.toLowerCase().includes(needle))
    .slice(0, 7);
}
