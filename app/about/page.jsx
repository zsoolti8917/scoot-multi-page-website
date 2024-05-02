import { FAQBlock } from "@/components/FAQBlock";
import HeaderFooter from "@/components/HeaderFooter";
import OurValues from "@/components/OurValues";
import SidePageCircleInfo from "@/components/SidePageCircleInfo";
import SidepageHeader from "@/components/SidepageHeader";

export default function AboutPage() {
    return (
        <>
        <SidepageHeader title="About" />
        <SidePageCircleInfo />
        <OurValues title="Our Values"/>
        <FAQBlock />
        </>
    );
  }
  