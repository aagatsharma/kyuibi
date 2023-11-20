import Home from "@/components/shared/home/Home";
import Services from "@/components/shared/home/Services";

export default function page() {
  return (
    <div className=" pt-20">
      <Home />
      <Services />
      {/* <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section>Contact</section> */}
    </div>
  );
}
