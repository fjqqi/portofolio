import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Tag } from "./components/homepage/Tag";

export default function Home() {
  return (
    <>
      <div className="min-w-screen">
        <Navbar />
        {/* <div className="px-28 mt-28 min-h-screen">
          <div className="">Hi Im Fiqqi</div>
        </div> */}

        <div className="lg:px-60 mt-40 home w-full flex ">
          <div className="left-home text-primary mt-4">
            <p className="text-8xl">Hello. Im Fiqqi</p>

            <p className="text-6xl mt-4">A * Web Developer</p>

            <p className="text-xl w-[80%] mt-9">
              I'm passionate about crafting experiences that are engaging,
              accessible, clean and user-centric. btw i listen to music 24/7.
            </p>
          </div>

          <div className="right-home text-primary">
            <div className="bg-primary w-fit rounded-[64px] p-6">
              <div className="h-[486px]  w-fit p-5 rounded-[64px]    relative justify-center ">
                <div className="frame">
                  <Image
                    src={"https://awsimages.detik.net.id/community/media/visual/2019/10/10/bb1bf3b6-6460-46dd-9de4-f7baea9c0afc_34.jpeg?w=1200"}
                    className=""
                    width={500}
                    height={500}
                    alt="@fjqqi"
                  />

                </div>

                <div className=" text-black bottom-12 left-0 right-0 min-w-full h-20 absolute px-4">
                  
                  <Tag text={'Fiqqi Basri'} link={'https://www.facebook.com/fjqqi/'} icon={ <FaFacebook className="size-6" />} className='bg-blueTag right-6 rotate-[5deg]'/>
                  <Tag text={'Fjqqi'} icon={ <FaGithub className="size-6 " />} className={`bg-purpleTag right-16 rotate-[8deg] top-16`}/>
                  <Tag text={'@fjqqi'} icon={ <FaInstagram className="size-6" />} className={`left-8 bg-orangeTag top-16 rotate-[-10deg]`}/>
                </div>
              </div>

            </div>
            {/* <p className="text-6xl mt-4">A * Web Developer</p>

            <p className="text-xl w-1/2 mt-9">
              I'm passionate about crafting experiences that are engaging,
              accessible, clean and user-centric. btw i listen to music 24/7.
            </p> */}
          </div>
        </div>

        <div className="min-h-screen"></div>
      </div>
    </>
  );
}
