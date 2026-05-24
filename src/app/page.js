import AllRoomDetails from "@/components/AllRoomDetails";
import Banner from "@/components/Banner";
import HowStudyNookWorks from "@/components/HowStudyNookWorks";
import WhyChooseStudyNook from "@/components/WhyChooseStudyNook";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
     <AllRoomDetails/>

     <HowStudyNookWorks/>
     <WhyChooseStudyNook/>

    </div>
  );
}
