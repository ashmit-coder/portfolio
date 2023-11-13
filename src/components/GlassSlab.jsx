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

        <div className="Description text-xl pr-[40%]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolor voluptates, doloremque autem deserunt eos repudiandae sapiente doloribus esse ullam dolores ex ipsam, nostrum tempore explicabo cum, praesentium laborum voluptatum corrupti. Consequuntur voluptates quae adipisci repudiandae ipsam placeat officia nam unde, libero natus reiciendis inventore eum ex, praesentium quo! Aliquam eaque voluptates ullam eum voluptatum debitis doloribus quo placeat, voluptatibus nisi magnam adipisci quia a? Eius quisquam deserunt fugiat saepe. Numquam, in voluptatem perferendis porro facilis magni laboriosam eligendi natus quia laborum architecto nam minima? Beatae commodi natus quos consequuntur, voluptas omnis quibusdam, vero harum possimus dolorum, animi id fuga?
        </div>

        <Btn/>
        </div>
        </div>
    )

}
export default GlassSlab;