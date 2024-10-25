import Banner from "../sections/banner/banner";
import { Footer } from "../sections/footer/footer";
import Header from "../sections/header/header";
import TaskTable from "../sections/taskTable/taskTable";



function Layout(){
    return(
        <>
       <Header/>
       <Banner/>
       <TaskTable/>
       <Footer/>
        </>
    )
}
export default Layout;