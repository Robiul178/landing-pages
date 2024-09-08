
import Image from "next/image";
import Ai from '../asset/Ai.svg';
import design from '../asset/design.svg';
import tools from '../asset/tools.svg';
import pricing from '../asset/pricing.svg';
import production from '../asset/production.svg';
import task from '../asset/task.svg';
import TaskTable from "@/table/table";


export default function Home() {
  return (
    <main className="lg:p-8 sm:p-6 md:p-4">
      <h2 className="text-5xl font-semibold leading-[3rem] mb-6">All-in-one platform <br /> with scalability.</h2>
      <p className="text-xl mb-[70px] text-[#5C5959]">We provide tools and support to automate and optimize <br />
        your supply chain from start to finish. Collaborate with <br /> your teammates,.
      </p>

      <section>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="w-full h-auto bg-white">
            <div className="py-[44px] ps-[41px]">
              <Image
                src={Ai}
                alt="Ai img"
                className="bg-[#DDEEE1] w-12 h-12 p-2 mb-1"
              />
              <h2 className="text-2xl font-semibold mb-2">AI Design</h2>
              <p className="pr-[73px] text-[18px] text-[#5C5959]">Built-in AI design tools to go from text or sketch to photorealistic product in seconds</p>
            </div>
          </div>
          <div className="w-full h-auto bg-white">
            <div className="py-[44px] ps-[41px]">
              <Image
                src={tools}
                alt="Ai img"
                className="bg-[#D5E4FF] w-12 h-12 p-2 mb-1"
              />
              <h2 className="text-2xl font-semibold mb-2">Collaboration Tools</h2>
              <p className="pr-[73px] text-[18px] text-[#5C5959]">Comment, @ mention, and collaborate in-context, in real-time, on any design</p>
            </div>
          </div>
          <div className="w-full h-auto bg-white">
            <div className="py-[44px] ps-[41px]">
              <Image
                src={task}
                alt="Ai img"
                className="bg-[#FFDAD6] w-12 h-12 p-2 mb-1"
              />
              <h2 className="text-2xl font-semibold mb-2">Task Management</h2>
              <p className="pr-[73px] text-[18px] text-[#5C5959]">Tools to provide clarity on responsibilities, due dates, and more</p>
            </div>
          </div>
          <div className="w-full h-auto bg-white">
            <div className="py-[44px] ps-[41px]">
              <Image
                src={pricing}
                alt="Ai img"
                className="bg-[#DDEEE1] w-12 h-12 p-2 mb-1"
              />
              <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
              <p className="pr-[73px] text-[18px] text-[#5C5959]">Dynamic, guaranteed pricing, optimized for the lowest total landed cost</p>
            </div>
          </div>
          <div className="w-full h-auto bg-white">
            <div className="py-[44px] ps-[41px]">
              <Image
                src={design}
                alt="Ai img"
                className="bg-[#D5E4FF] w-12 h-12 p-2 mb-1"
              />
              <h2 className="text-2xl font-semibold mb-2">Design Assistance</h2>
              <p className="pr-[73px] text-[18px] text-[#5C5959]">Built-in AI design tools to go from text or sketch to photorealistic product in seconds</p>
            </div>
          </div>
          <div className="w-full h-auto bg-white">
            <div className="py-[44px] ps-[41px]">
              <Image
                src={production}
                alt="Ai img"
                className="bg-[#FFDAD6] w-12 h-12 p-2 mb-1"
              />
              <h2 className="text-2xl font-semibold mb-2">Production</h2>
              <p className="pr-[73px] text-[18px] text-[#5C5959]">A worldwide network of manufacturers able to handle orders of any size and complexity</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <TaskTable />
      </div>

    </main>
  );
}
