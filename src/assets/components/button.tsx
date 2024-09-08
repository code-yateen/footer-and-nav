

interface buttonprops {
    label : string
    onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
    bgcolour: string
    textcolour:string
    hovrcolour:string
}
export function BUTTON({label,onClick, bgcolour ,textcolour,hovrcolour}:buttonprops){
return  <button className={`h-10 max-w-fit p-5 rounded ${bgcolour} ${textcolour} ${hovrcolour} items-center flex justify-center`} onClick={onClick}>{label}</button>
    
}