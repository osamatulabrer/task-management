import Container from "../../components/container";
import task from '../../images/task.png'



function Banner(){
    return(
        <Container className='grid grid-cols-2 py-8 items-center'>
            <div>
                <h1 className="text-5xl capitalize pb-5 font-semibold text-red-700 dark:text-yellow-300">Task  Management</h1>
                <p className="text-lg dark:text-stone-200">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
            </div>
            <div className="mx-auto">
                <img className="max-w-sm" src={task} alt="img" />
            </div>
            
        </Container>
    )
}
export default Banner;