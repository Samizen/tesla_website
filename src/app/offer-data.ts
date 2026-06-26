import type { StaticImageData } from "next/image";
import caOne from "../../assets/Photos/Complete CA Help/CA 1.jpeg";
import cmuOne from "../../assets/Photos/Concrete Block Masonry/CMU 1.png";
import cmuTwo from "../../assets/Photos/Concrete Block Masonry/CMU 2.png";
import concreteOne from "../../assets/Photos/Concrete Podium/Concrete Podium 1.png";
import concreteTwo from "../../assets/Photos/Concrete Podium/Concrete Podium 2.png";
import concreteThree from "../../assets/Photos/Concrete Podium/Concrete Podium 3.png";
import concreteFour from "../../assets/Photos/Concrete Podium/Concrete Podium 4.png";
import concreteFive from "../../assets/Photos/Concrete Podium/Concrete Podium 5.png";
import draftingOne from "../../assets/Photos/Drafting/Drafting1.png";
import draftingTwo from "../../assets/Photos/Drafting/Drafting2.png";
import nonStructuralOne from "../../assets/Photos/Non structural/NS 1.png";
import nonStructuralTwo from "../../assets/Photos/Non structural/NS 2.jpeg";
import nonStructuralThree from "../../assets/Photos/Non structural/NS 3.png";
import retrofitOne from "../../assets/Photos/Retorfit/Retrofit1.png";
import retrofitTwo from "../../assets/Photos/Retorfit/Retrofit2.png";
import retrofitThree from "../../assets/Photos/Retorfit/Retrofit3.png";
import steelOne from "../../assets/Photos/Steel/Steel1.png";
import steelTwo from "../../assets/Photos/Steel/Steel2.png";
import steelThree from "../../assets/Photos/Steel/Steel3.png";
import steelFour from "../../assets/Photos/Steel/Steel4.png";
import woodOne from "../../assets/Photos/Wood/Wood 1.png";
import woodTwo from "../../assets/Photos/Wood/Wood 2.png";
import woodThree from "../../assets/Photos/Wood/Wood 3.png";
import woodFour from "../../assets/Photos/Wood/Wood 4.png";

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
    images: [nonStructuralOne, nonStructuralTwo, nonStructuralThree],
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
    images: [caOne],
    imageFit: "contain",
  },
  {
    id: "reinforced-concrete-block-masonry",
    title: "Reinforced Concrete Block Masonry",
    body: "We design and detail reinforced concrete masonry unit (CMU) structures for commercial, industrial, and residential applications. Our scope includes shear wall design, out-of-plane flexural analysis, lintel and bond beam detailing, and full compliance with TMS 402/602 and CBC masonry provisions - delivering durable, cost-effective lateral and gravity systems.",
    tags: ["CMU Shear Walls", "TMS 402/602", "Lintel Design", "Bond Beams", "Out-of-Plane Analysis", "CBC Masonry"],
    images: [cmuOne, cmuTwo],
    imageFit: "contain",
  },
  {
    id: "structural-drafting",
    title: "Structural Drafting",
    body: "Our drafting team produces high-quality structural drawings using BIM platforms and markup-based workflows. We create coordinated structural models in Revit, produce construction document sets, and perform markup-based drafting for plan check corrections and addenda. Deliverables are precise, buildable, and fully coordinated with architectural and MEP disciplines.",
    tags: ["Revit BIM", "Markup Drafting", "Plan Check Corrections", "CD Sets", "3D Coordination"],
    images: [draftingOne, draftingTwo],
    imageFit: "contain",
  },
];
