import type { StaticImageData } from "next/image";
import carouselOne from "../../assets/carousel_1.png";
import carouselTwo from "../../assets/carousel_2.png";
import carouselThree from "../../assets/carousel_3.png";
import concreteOne from "../../images/Concrete Podium 1.png";
import concreteTwo from "../../images/Concrete Podium 2.png";
import concreteThree from "../../images/Concrete Podium 3.png";
import concreteFour from "../../images/Concrete Podium 4.png";
import concreteFive from "../../images/Concrete Podium 5.png";
import retrofitOne from "../../images/Retrofit1.png";
import retrofitTwo from "../../images/Retrofit2.png";
import retrofitThree from "../../images/Retrofit3.png";
import steelOne from "../../images/Steel1.png";
import steelTwo from "../../images/Steel2.png";
import steelThree from "../../images/Steel3.png";
import steelFour from "../../images/Steel4.png";
import woodOne from "../../images/Wood 1.png";
import woodTwo from "../../images/Wood 2.png";
import woodThree from "../../images/Wood 3.png";
import woodFour from "../../images/Wood 4.png";

export type OfferService = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  images: StaticImageData[];
  imageFit?: "cover" | "contain";
};

export const offerServices: OfferService[] = [
  {
    id: "concrete-podium",
    title: "Concrete Podium",
    body: "We deliver precision-engineered concrete podium structures for mixed-use, commercial, and residential developments. Our team handles full structural analysis, detailing, and coordination - from foundation to transfer slab - ensuring code-compliant, cost-efficient designs that integrate seamlessly with the floors above.",
    tags: ["Post-Tensioned Transfer Slabs", "Shear Walls", "Foundation Design", "CBC Compliance"],
    images: [concreteOne, concreteTwo, concreteThree, concreteFour, concreteFive],
  },
  {
    id: "wood-residential-commercial-units",
    title: "Wood Residential / Commercial Units",
    body: "From single-family homes to multi-story Type V commercial buildings, we provide complete structural engineering for wood-framed construction. Our services cover gravity and lateral system design, shear wall schedules, hold-down details, and diaphragm design - all tailored to California's demanding seismic and wind requirements.",
    tags: ["Type V Construction", "Shear Wall Schedules", "Gravity Systems", "Diaphragm Design", "Multi-Story Wood"],
    images: [woodOne, woodTwo, woodThree, woodFour],
  },
  {
    id: "steel-structures",
    title: "Steel Structures",
    body: "We specialize in design and detailing of all major steel lateral systems including Buckling-Restrained Braced Frames (BRBF), Special Concentrically Braced Frames (SCBF), Ordinary Concentrically Braced Frames (OCBF), and Special Moment Resisting Frames (SMRF). Our engineers optimize for performance, fabrication efficiency, and constructability.",
    tags: ["BRBF", "SCBF", "OCBF", "SMRF", "Connection Design", "AISC 360 / 341"],
    images: [steelOne, steelTwo, steelThree, steelFour],
  },
  {
    id: "non-structural-components",
    title: "Non-Structural Components",
    body: "Ensuring the seismic anchoring and bracing of electrical and mechanical equipment is critical for life-safety compliance. We provide anchorage calculations, bracing design, and coordination for HVAC units, electrical panels, piping, conduit, and other non-structural components per ASCE 7 and CBC requirements.",
    tags: ["HVAC Anchorage", "Electrical Panel Bracing", "ASCE 7 Chapter 13", "Seismic Anchorage", "MEP Coordination"],
    images: [carouselTwo, steelTwo, carouselOne],
    imageFit: "contain",
  },
  {
    id: "seismic-retrofitting",
    title: "Seismic Retrofitting",
    body: "We assess and strengthen existing structures - wood, concrete, and steel - to meet modern seismic standards. Our retrofit services include soft-story retrofits, cripple wall bracing, concrete shear wall additions, and steel moment frame insertions. We prepare full permit-ready packages compliant with IEBC and CBC retrofit provisions.",
    tags: ["Soft-Story Retrofit", "Cripple Wall Bracing", "Concrete Retrofit", "Steel Retrofit", "IEBC Compliance"],
    images: [retrofitOne, retrofitTwo, retrofitThree],
  },
  {
    id: "complete-ca-help",
    title: "Complete CA Help",
    body: "We support project teams throughout the construction administration phase, managing Submittals and Requests for Information (RFIs) with speed and precision. Our engineers review shop drawings, respond to field questions, issue supplemental instructions, and track documentation - keeping projects moving and protecting structural intent on-site.",
    tags: ["Submittal Review", "RFI Response", "Shop Drawing Review", "Field Support", "Construction Admin"],
    images: [concreteFive, carouselTwo, carouselThree],
    imageFit: "contain",
  },
  {
    id: "reinforced-concrete-block-masonry",
    title: "Reinforced Concrete Block Masonry",
    body: "We design and detail reinforced concrete masonry unit (CMU) structures for commercial, industrial, and residential applications. Our scope includes shear wall design, out-of-plane flexural analysis, lintel and bond beam detailing, and full compliance with TMS 402/602 and CBC masonry provisions - delivering durable, cost-effective lateral and gravity systems.",
    tags: ["CMU Shear Walls", "TMS 402/602", "Lintel Design", "Bond Beams", "Out-of-Plane Analysis", "CBC Masonry"],
    images: [concreteThree, concreteFour, concreteTwo],
  },
  {
    id: "structural-drafting",
    title: "Structural Drafting",
    body: "Our drafting team produces high-quality structural drawings using BIM platforms and markup-based workflows. We create coordinated structural models in Revit, produce construction document sets, and perform markup-based drafting for plan check corrections and addenda. Deliverables are precise, buildable, and fully coordinated with architectural and MEP disciplines.",
    tags: ["Revit BIM", "Markup Drafting", "Plan Check Corrections", "CD Sets", "3D Coordination"],
    images: [carouselThree, steelThree, carouselOne],
    imageFit: "contain",
  },
];
