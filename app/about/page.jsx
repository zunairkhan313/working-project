import Image from "next/image";
import about from "../../public/Images/Factory-Image-5.jpg";
import image2 from "../../public/Images/Who_We_Are_Image_1.jpg";
import image3 from "../../public/Images/Who_We_Are_Image_2.jpg";
import image4 from "../../public/Images/Our_Mission_Image.webp";
import image5 from "../../public/Images/Our_Vision_Image.webp";
import image6 from "../../public/Images/Factory-Image-8.webp";
import '../product/hr.css'
export default function About() {
    return (
        <>
            <div className="bg-white container mt-5">
                <div className="flex">
                    <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText ">
                        <h1 className="heading text-black font-bold">About Us</h1>

                    </div>
                </div>
                <div className="hr-about"></div>
            </div>
            <br />
            <div className="container mt-4">
                {/* first */}
                <div className="row">
                    <div className="col-lg-6 mb-2">
                        <h1 className="text-lg font-bold text-green-800 tracking-widest mt-1">COMPANY PROFILE</h1>
                        <h3 className="text-4xl font-bold text-black">WHO WE ARE</h3><br />
                        <p className="text-[15px]">shandong changlu tools co., ltd. is an industrial and trade enterprise which integrates hardware tools, automobile maintenance tools, machine repair tools and household tools development, production and sales. it is located in linyi, shandong province, the capital of logistics in china. the company covers an area of 50,000 square meters, with a production and storage area of 25,000 square meters. it mainly deals in 16 categories and more than 5,000 specifications such as changlu brand sets of tools, sleeves, sleeve accessories, wrenches, screwdrivers, fastening, shearing, clamps, knocking, etc. it is widely used in machinery, petroleum, chemical, electric power, automobile manufacturing and maintenance, etc. industry. the company is currently the director of china wujiaochua business association, the executive director of the national federation of industry and commerce hardware and electrical chamber of commerce and the director unit of shandong hardware and electrical chamber of commerce.</p>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <Image
                            style={{ "height": "450px" }}
                            objectFit="cover"
                            src={image2}
                            alt="pro"
                        />
                    </div>
                </div>
                {/* first */}
                <div className="row mt-4">
                    <div className="col-lg-6 mt-2 mb-2">
                        <h3 className="text-4xl font-bold text-black">WHO WE ARE</h3><br />
                        <p className="text-[17px]">Through the certification of iso 9001 international quality management system, the company has won the honorary titles of ten national enterprises in china&apos;s automobile maintenance industry, honest manufacturer of hardware chamber of commerce and industry, brand construction demonstration enterprise of hardware and electromechanical industry in shandong province, specialty and innovation enterprise of shandong province, contract-abiding and credit-abiding enterprise of shandong province, etc. cctv honorary broadcasting brand was awarded the title of top ten products of maintenance tools by shanghai automobile insurance chamber of commerce and was awarded the honorary title of honest manufacturer by the national federation of industry and commerce hardware machinery chamber of commerce. long deer insulation tools have passed german vde certification..</p>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <Image
                            style={{ "height": "450px" }}
                            objectFit="cover"
                            src={image3}
                            alt="pro"
                        />
                    </div>
                </div>
                {/* first */}
                <div className="row mt-4">
                    <div className="col-lg-6 mt-3 mb-2">
                        <h3 className="text-4xl font-bold text-black">OUR MISSION</h3><br />
                        <p className="text-[18px]">At Changlu Tools, our mission is to be the trusted partner for creators of all levels, from seasoned professionals to passionate DIYers. We achieve this by providing a comprehensive range of industry-leading power tools and reliable hand tools. We believe that the right tools are essential for transforming ideas into reality, and we are dedicated to offering solutions that empower users to tackle any project with confidence. Our commitment to innovation fuels the development of cutting-edge power tools that boast exceptional performance and durability. We invest heavily in research and development to ensure our power tools integrate the latest advancements in technology, delivering unmatched efficiency and functionality for even the most demanding tasks.</p>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <Image
                            style={{ "height": "450px" }}
                            objectFit="cover"
                            src={image4}
                            alt="pro"
                        />
                    </div>
                </div>
                {/* first */}
                <div className="row mt-4">
                    <div className="col-lg-6 mt-3 mb-2">
                        <h3 className="text-4xl font-bold text-black">OUR VISION</h3><br />
                        <p className="text-[17px]">At Changlu Tools, we dream of a boundless future where creativity flourishes without constraints. In our vision, power tools and hand tools seamlessly merge with the user&apos;s will, effortlessly translating ideas into tangible realities with unparalleled precision and efficiency. We firmly believe that when tools are both intuitive and accessible, they have the power to democratize the act of creation, making it accessible to all. Our mission is to create a world where seasoned professionals and aspiring enthusiasts alike have access to the tools they need to bring their boldest visions to life. Through relentless innovation and unwavering dedication, Changlu Tools is committed to expanding the frontiers of possibility and unlocking the full potential of human ingenuity. Join us as we embark on a journey to transform dreams into reality, one tool at a time.</p>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <Image
                            style={{ "height": "450px", "width": "630px" }}
                            objectFit="cover"
                            src={image5}
                            alt="pro"
                            className="img-fluid"
                        />
                    </div>
                </div>
                {/* first */}
                <div className="row mt-4">
                    <div className="col-lg-6 mt-3 mb-2">
                        <h3 className="text-3xl font-bold text-black">OUR FACTORY</h3><br />
                        <p className="text-lg">Nestled near major transportation arteries for seamless logistics, our expansive 6,000-square-meter facility hums with innovation. This isn't just a production plant; it's a hub for research, development, and the creation of cutting-edge tools for the automotive industry. From specialized auto protection solutions to comprehensive car tool sets, our diverse range caters to a global audience.Our unwavering commitment to quality and exceeding customer expectations has cemented our reputation as a trusted partner worldwide. We are more than just a manufacturer; we are a team dedicated to pushing the boundaries and providing exceptional tools that empower individuals around the world.
                        </p>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <Image
                            style={{ "height": "450px", "width": "630px" }}
                            objectFit="cover"
                            src={image6}
                            alt="pro"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
