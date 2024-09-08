
import { BUTTON } from "./button";
import { IMG } from "./img";

export function Navbar(){

    return <div  className=" rounded-lg shadow-xl w-full flex justify-evenly p-5 bg-white ">
 {/*<BUTTON onClick={(e)=>{ }} label="Your Account"></BUTTON>*/}
 <div className="mr-96"><IMG ></IMG></div>
 <div className="flex ml-96 ">
 <BUTTON label="Prompts" onClick={(e)=>{e}} bgcolour="bg-white" textcolour="text-blue" hovrcolour="hover:bg-grey hover:text-blue"></BUTTON>
 <BUTTON label="Resources" onClick={(e)=>{e}} bgcolour="bg-white" textcolour="text-blue" hovrcolour="hover:bg-grey hover:text-blue"></BUTTON>
 <BUTTON label="Blog" onClick={(e)=>{e}} bgcolour="bg-white" textcolour="text-blue" hovrcolour="hover:bg-grey hover:text-blue"></BUTTON>
 <BUTTON label="Your Account" onClick={(e)=>{e}} bgcolour="bg-blue" textcolour="text-white" hovrcolour="hover:bg-black"></BUTTON>
    </div>
    </div>
}