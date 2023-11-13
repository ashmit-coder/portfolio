import GlassSlab from "./GlassSlab"
const Mainpage = () =>{
    return(
        < div className=" relative   flex flex-col p-24" id="Main">


    <GlassSlab/>
    <img src="/images/blob cut.png" alt="blob 1" className="w-80 absolute z-10 -top-4 right-28"/>
    <img src="/images/blob2.png" alt="blob 2" className="w-[35rem] absolute z-10 -left-32 top-8"/>
    <img src="/images/circle.png" alt="circle" className="w-[25rem] absolute z-10 top-[32rem] right-9"/>
    <img src="/images/blob1.png" alt="blob3" className="w-[45rem] absolute z-10 top-96 left-[20%]"/>

      </div>
    )
}
export default Mainpage