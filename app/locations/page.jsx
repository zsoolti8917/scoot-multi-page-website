import HeaderFooter from "@/components/HeaderFooter";
import LocationsInfo from "@/components/LocationsInfo";
import LocationsMap from "@/components/LocationsMap";
import SidepageHeader from "@/components/SidepageHeader";

export default function LocationsPage() {
    return (
      <>
      <SidepageHeader title="Locations" />
      <LocationsMap />
      <LocationsInfo />
      </>
    );
  }
  