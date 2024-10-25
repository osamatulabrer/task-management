
import { IoSearch } from "react-icons/io5";
import {  TextInput} from "flowbite-react";

function TaskTableHeader(){
    return(
        <div className="flex justify-between px-2 items-center">
                    <h2 className="text-red-700 font-semibold text-3xl">Your Task</h2>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                        </div>
                        <TextInput id="email4" type="email" rightIcon={IoSearch} required />
                    </div>
                </div>
    )
}
export default TaskTableHeader;