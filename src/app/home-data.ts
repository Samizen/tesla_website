import { offerServices } from "./offer-data";

export const services = [
  {
    title: "Structural Calculations",
    items: ["Reinforced Concrete", "Cold Formed and Hot Rolled Steel", "Wood"],
  },
  {
    title: "Structural Analysis",
    items: ["Gravity", "Lateral"],
  },
  {
    title: "Shop Drawing Review",
    items: ["Submittals", "RFI's", "Complete CA Help"],
  },
  {
    title: "Structural Drafting",
    items: ["BIM", "Markups Based Drafting"],
  },
];

export const processSteps = [
  {
    title: "Project Intake",
    body: "Receive information and Design criteria",
  },
  {
    title: "Kick Off Meeting",
    body: "Discuss inputs, project features, reference projects",
  },
  {
    title: "Quotation",
    body: "Provide a detailed of timeline, quote, available as package-based or hourly rates",
  },
  {
    title: "Project Execution",
    body: "Develop calculations, plans based on requirements and building codes",
  },
  {
    title: "Revision",
    body: "Update client's comments/redlines or address City/Plan Check comments",
  },
  {
    title: "Project Completion",
    body: "Deliver the final plans and calculations.",
  },
];

export const whoCards = [
  {
    title: "Professional",
    body: "Our team is comprised of skilled and committed structural engineering professionals located in Kathmandu, Nepal. We are eager to collaborate with you on your upcoming structural engineering projects. With extensive expertise and a passion for excellence, we are dedicated to delivering high-quality results that meet your specific needs. Our team is equipped to handle a range of projects, and we take pride in our ability to provide efficient, cost-effective solutions. We are confident that we can provide the expertise and professionalism you need to achieve your goals.",
  },
  {
    title: "Dedicated",
    body: "Our team is dedicated to providing high-quality service, and we constantly strive for improvement. With a diligent work ethic and a commitment to excellence, we are always seeking to enhance our skills and knowledge to better serve our clients. You can rely on us to deliver exceptional results and exceed your expectations.",
  },
  {
    title: "Experienced",
    body: "Our team has a wealth of industry experience gained through successful completion of numerous outsourced structural engineering projects (25+). This experience has equipped us with the skills and expertise needed to deliver high-quality results that meet the unique needs of each project. You can rely on our team's extensive experience to ensure that your project is completed efficiently and to the highest standards of quality.",
  },
];

export const chooseCards = [
  {
    title: "Delegate",
    body: "By entrusting us with the tedious and repetitive tasks such as modeling and calculations, you can focus on the conceptual planning that is crucial to the success of your project. Our team has the technical skills and experience needed to efficiently and accurately perform these tasks, freeing up your time and resources for more important work. With our support, you can ensure that all aspects of your project are meticulously executed, resulting in a successful outcome.",
  },
  {
    title: "Prolific",
    body: "By collaborating with our team, you can effectively double your productivity, as we work alongside you for a combined total of 80 hours per week. One of the biggest advantages of working with us is the time zone difference between PST and Kathmandu, which allows us to work while you're offline, ensuring that your project moves forward without delay. You can trust that our team will provide reliable and efficient support, delivering quality results that meet your specific project requirements.",
  },
  {
    title: "Competitive",
    body: "Partnering with us can give you a significant competitive advantage by enabling you to accomplish more and meet project deadlines. With our efficient workflows and collaborative approach, we can help you reduce project timelines and achieve your goals faster. Additionally, our cost-effective solutions can help you reduce project costs by 2.5-3 times, allowing you to allocate your resources more strategically.",
  },
];

export const offerSlides = offerServices.map((service) => ({
  image: service.images[0],
  caption: service.title,
  href: `/what-we-offer#${service.id}`,
}));
