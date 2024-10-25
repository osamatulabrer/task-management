

import { Button, Modal ,Label,TextInput,Textarea,Select,Checkbox} from "flowbite-react";
import { useState } from "react";
// import { useState } from "react";







export function ModalPopup({onOpenModal,onClose}) {

let [data,setData] = useState({
  title:" ",
  description:" ",
  assignTo:" ",
  priority:" "

})

let [error,setError] = useState({
  title:null,
  description:null,
  assignTo:null,
  priority:null

})



let changeHandler = function(e){

  let newObject = {
    ...data,
    [e.target.name]:e.target.value
  }
  setData(newObject)
  setError({
    title:null,
    description:null,
    assignTo:null,
    priority:null
  })
}






  let submitHandler = (event)=>{
    event.preventDefault();

   let error = 'you have mistaken'


   if(data.title === ' '){
    setError({
      ...error,
      title:error
    })
 
   }
   else if(data.description === ' '){
    setError({
      ...error,
      description:error
    })
   }
   else if(data.assignTo === ' '){
    setError({
      ...error,
      assignTo:error
    })
   }
   else if(data.priority === ' '){
    setError({
      ...error,
      priority:error
    })
   }
  }
  return (
    <>
     
      <Modal show={onOpenModal} onClose={() => onClose()}>
        <Modal.Header className="text-2xl text-rose-700 font-semibold text-center pb-4">add new task</Modal.Header>
        <Modal.Body>
          <form className="space-y-6 flex flex-wrap" onSubmit={submitHandler}>
          <div className="mb-2 block">
          <Label htmlFor="text1" value="title..." />
        </div>
        <TextInput name="title" className="w-full" id="text1" type="text" onChange={changeHandler}/>
      {error.title && <span className="text-red-600">{error.title}</span>}
      
            <div className="w-full ">
                 <div className="mb-2 block">
                    <Label htmlFor="description" value="description" />
                 </div>
                <Textarea name="description" onChange={changeHandler} className="resize-none resize-y-[130px]" id="description" rows={4} />
                {error.description && <span className="text-red-600">{error.description}</span>}
            </div>
            <div className="w-2/3">
      <div className="mb-2 pr-2 block">
        <Label htmlFor="countries" value="Assign To" />
      </div>
      <Select name="assignTo" onChange={changeHandler} id="countries">
      
        <option value="person one">person one</option>
        <option value="person two">person two</option>
        <option value="person three">person three</option>
        <option value="person four">person four</option>
     
      </Select>
      {error.assignTo && <span className="text-red-600">{error.assignTo}</span>}
    </div>
    <div className="w-1/3">
      <div className="mb-2 block">
        <Label htmlFor="Priority" value="Priority" />
      </div>
      <Select name="priority" onChange={changeHandler} id="priority">
      
        <option value="high">high</option>
        <option value="mideum">mideum</option>
        <option value="low">low</option>
      </Select>
      {error.priority && <span className="text-red-600">{error.priority}</span>}
    </div>
          <Button type="submit" className="mt-3"> add task </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}



     










        




