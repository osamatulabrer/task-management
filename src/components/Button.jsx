
import { Button } from "flowbite-react";
function ButtonRow(props){
    return(
        <div className={props.className}>
            <Button className="mr-1" color="success">
            Add Task
            </Button>
            <Button className="" color="failure">
            Clear Tasks
            </Button>
      </div>
    )
}
export default ButtonRow;