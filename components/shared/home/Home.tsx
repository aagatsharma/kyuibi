import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import AnimatedNumber from "../AnimateNumber";

const Home = () => {
  return (
    <div className=" max-w-7xl m-auto pt-10  h-full px-5">
      <div className="flex flex-col md:flex-row items-center gap-10  ">
        <div className="flex-1 space-y-10">
          <div className=" gap-2 ">
            <h1 className=" text-7xl">Hey</h1>
            <h1 className=" text-7xl">There !</h1>
          </div>
          <div>
            <p className="text-xl tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              in debitis minus, dolorem nobis nulla? Sapiente eos unde molestias
              nihil velit sunt laudantium qui vero. Deleniti veritatis quidem
              exercitationem quibusdam.
            </p>
          </div>
          <div className="flex gap-6">
            <Button className=" rounded" size={"lg"}>
              Start Here !
            </Button>
            <Button className=" rounded" size={"lg"} variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
        <div>
          <Image src={"/demo.png"} alt="Demo" width={600} height={500} />
        </div>
      </div>
      <div className="flex flex-col max-w-4xl m-auto pt-20 h-full md:flex-row ">
        <div className="grid grid-flow-col h-28 items-center gap-x-4  ">
          <div className="flex flex-col items-center">
            <div className="flex">
              <AnimatedNumber stopAt={60} />
              <p className=" text-4xl self-center"> +</p>
            </div>
            <span className="text-lg">PROJECTS</span>
          </div>
          <Separator orientation="vertical" />
          <div>
            <p className="text-xl tracking-wide ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              quod fugit cumque,
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col h-28 items-center gap-x-5  ">
          <div className="flex flex-col items-center">
            <div className="flex">
              <AnimatedNumber stopAt={40} />
              <p className=" text-4xl self-center"> +</p>
            </div>

            <span className="text-lg ">CLIENTS</span>
          </div>
          <Separator orientation="vertical" className=" ml-3.5" />
          <p className="text-xl tracking-wide  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quod
            fugit cumque,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
