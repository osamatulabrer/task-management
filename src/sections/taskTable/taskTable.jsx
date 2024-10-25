import Container from "../../components/container";
import {  Table,Button } from "flowbite-react";
import TaskTableHeader from "./taskTableHeader";
import TaskItem from "./taskItem";
import { ModalPopup } from "../../components/modalPopup";
import { useState } from "react";
import { createPortal } from 'react-dom';

function NoData() {
 
  return (
    <Table.Row className="bg-white dark:border-gray-800 dark:bg-gray-800">
      <Table.Cell
        colSpan={6}
        className=" text-center text-xl capitalize mx-auto"
      >
        no data found
      </Table.Cell>
    </Table.Row>
  );
}

function TaskTable() {
  let [openModal,setOpenModal] = useState(false)
  return (
    <Container className="mt-5 mb-14">
     
        <div className="flex justify-end">
            <Button onClick={()=> setOpenModal(true)} className="mr-1" color="success">
            Add Task
            </Button>
            <Button  color="failure">
            Clear Tasks
            </Button>
      </div>
      <div className="p-3 border dark:border-[#666] my-5 rounded-sm">
        <TaskTableHeader />

        <div className="overflow-x-auto mt-2">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>title</Table.HeadCell>
              <Table.HeadCell>description</Table.HeadCell>
              <Table.HeadCell>assigned to</Table.HeadCell>
              <Table.HeadCell>priority</Table.HeadCell>
              <Table.HeadCell>action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <NoData />
            </Table.Body>
          </Table>
        </div>
      </div>
      {
        openModal &&
      createPortal(<ModalPopup onClose={()=>{setOpenModal(false)}} onOpenModal={openModal}/>,document.getElementById('modal'))}
    </Container>
  );
}
export default TaskTable;
