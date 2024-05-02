import CareersCircleInfo from "@/components/CareersCircleInfo";
import JobSelection from "@/components/JobSelection";
import OurValues from "@/components/OurValues";
import SidepageHeader from "@/components/SidepageHeader";

export default function CareersPage() {
    return (
      <>
      <SidepageHeader title="Careers" />
        <CareersCircleInfo />
      <OurValues title="Why join us?"/>
      <JobSelection />
      </>
    );
  }
  