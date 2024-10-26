import { useEffect, useState } from "react";
import Container from "../../components/container";
import { MdOutlineLightMode } from "react-icons/md";
import logo1 from '../../images/logo1.png'

function Header(){
    let [theme,setTheme] = useState(false);

    let themeHandler = ()=>{
        setTheme(!theme)
     

        
    }


    useEffect(()=>{
        if(theme){
            document.documentElement.classList.add('dark')
        }else(
            document.documentElement.classList.remove('dark')
        )
        localStorage.setItem('darkTheme',theme)
    },[theme])




    return(
        <Container className="flex justify-between items-center py-5 border-b px-2 dark:border-[#666]">
        <img className="h-[90px]" src={logo1} alt="IMAGE" />
        <MdOutlineLightMode onClick={themeHandler} className={`text-xl cursor-pointer ${theme && 'text-white'}`}/>
        </Container>
    )
}
export default Header;