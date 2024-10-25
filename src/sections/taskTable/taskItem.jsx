
import { Table} from "flowbite-react";

function TaskItem(){
    return(
        <Table.Row className="bg-white dark:border-gray-800 dark:bg-gray-800">
                            
                          
        <Table.Cell>1</Table.Cell>
        <Table.Cell>api</Table.Cell>
        <Table.Cell>Create an API by using laravel platform</Table.Cell>
        <Table.Cell>Nasrullah Mansur</Table.Cell>
        <Table.Cell>high</Table.Cell>
        <Table.Cell>
        <a  href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-2">
            Edit
        </a>
        <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
            delete
        </a>
        </Table.Cell>
    </Table.Row>
    )
}
export default TaskItem;