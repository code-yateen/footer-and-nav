import { IMG } from "./img";
import { Links } from "./links";

export function Footer(){
    return <footer className="w-screen min-h-72 bg-white pt-20 flex justify-evenly ">
<div>
    <IMG></IMG>
    <p className="mt-5">The most advanced ChatGPT prompt and resource <br />
        library with custom GPTs and helpful resources. Designed <br />
        for professionals.</p>
</div>
<div>
    <Links onClick={(e)=>{e}} label={"Prompts"}></Links>
    <Links onClick={(e)=>{e}} label={"AI Resources"}></Links>
</div>
<div>
<Links onClick={(e)=>{e}} label={"AI for Work Newsletter"}></Links>
<Links onClick={(e)=>{e}} label={"Sponsorships"}></Links>
<Links onClick={(e)=>{e}} label={"About"}></Links>
</div>
<div>
<Links onClick={(e)=>{e}} label={"Contact"}></Links>
<Links onClick={(e)=>{e}} label={"Terms"}></Links>
<Links onClick={(e)=>{e}} label={"Privacy"}></Links>
</div>
    </footer>
    }