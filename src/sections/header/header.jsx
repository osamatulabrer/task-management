import { useEffect, useState } from "react";
import Container from "../../components/container";
import logo from '../../images/logo.png'
import { MdOutlineLightMode } from "react-icons/md";

function Header(){
    let [theme,setTheme] = useState(false)
    useEffect(()=>{
        document.documentElement.classList.toggle('dark')
        // if(theme){
        // }else(
        //     document.documentElement.classList.remove('dark')
        // )
    },[theme])




    return(
        <Container className="flex justify-between items-center py-5 border-b px-2 dark:border-[#666]">
        <img  src={logo} alt="logo" />
        <MdOutlineLightMode onClick={()=>{setTheme(!theme)}} className={`text-xl cursor-pointer ${theme && 'text-white'}`}/>
        </Container>
    )
}
export default Header;