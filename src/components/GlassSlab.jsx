import Nav from "./Nav";
import Btn from "./Btn";
const GlassSlab = () =>{

    return(
        <div >
        <div className=" glass-slab text-slate-50 text-[80px] bg-white bg-opacity-10 rounded-3xl py-12 px-16 flex flex-col gap-7 relative z-20 backdrop-blur-[10px] " style={{"box-shadow": "0px 0px 10px 5px rgba(0, 0, 0, 0.15), inset 0 0 15px 10px rgba(256,256,256,0.28)"}}>
            <Nav/>
        <div className="Name flex flex-col">
            <div className="-mb-7">
                Ashmit
            </div>
                Jagtap
        </div>

        <div className="Description text-xl pr-[43%] grid gap-4">
    <p>
                I am Ashmit Jagtap, a dedicated backend developer originating from the dynamic tech community at the Indian Institute of Information Technology Pune (IIITP), Batch of 2026.
        </p>

<p>
In the era of technology, I specialize in crafting efficient backend solutions using Node.js and JavaScript. My journey in software development is characterized by a profound curiosity ever since i was introduced to programming.
</p>
<p>

I'd be more than excited to contribute to today's continually evolving technology. I excel in turning ideas into reality by blending creativity and practicality, fueled by my commitment to the work I delve into!
</p>
        </div>

        <Btn/>
        </div>
        </div>
    )

}
export default GlassSlab;