

import { Button, Modal ,Label,TextInput,Textarea,Select,Checkbox} from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { popupValidation } from "./form-validation/popup";








export function ModalPopup({onOpenModal,onClose,onCreate}) {
 


  const { register, handleSubmit,  formState: { errors } ,reset} = useForm({
    resolver: yupResolver(popupValidation)
  });
  const onSubmit = data => {
    onCreate(data);
    reset()
    onClose()
  }
 
  return (
    <>
     
      <Modal show={onOpenModal} onClose={() => onClose()}>
        <Modal.Header className="text-2xl text-rose-700 font-semibold text-center pb-4">add new task</Modal.Header>
        <Modal.Body>
          <form className="space-y-6 flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2 block">
          <Label htmlFor="text1" value="title..." />
        </div>
        <TextInput  className="w-full" id="text1" type="text"  {...register("title")}/>
        {errors.title && <span className="text-rose-600">{errors.title.message}</span>}
       



            <div className="w-full ">
                 <div className="mb-2 block">
                    <Label htmlFor="description" value="description" />
                 </div>
                <Textarea   className="resize-none resize-y-[130px]" id="description" rows={4}  {...register("description")} />
                {errors.description && <span className="text-rose-600">{errors.description.message}</span>}

            </div>
            <div className="w-2/3">
      <div className="mb-2 pr-2 block">
        <Label htmlFor="countries" value="Assign To" />
      </div>
      <Select  id="countries"  {...register("assignTo")}>
      
        <option value="" disabled>person</option>
        <option value="person one">person one</option>
        <option value="person two">person two</option>
        <option value="person three">person three</option>
        <option value="person four">person four</option>
     
      </Select>
      {errors.assignTo && <span className="text-rose-600">{errors.assignTo.message}</span>}
    </div>
    <div className="w-1/3">
      <div className="mb-2 block">
        <Label htmlFor="Priority" value="Priority" />
      </div>
      <Select  id="priority"  {...register("priority")}>
      
        <option value="" disabled>high</option>
        <option value="high">high</option>
        <option value="mideum">mideum</option>
        <option value="low">low</option>
      </Select>
      {errors.priority && <span className="text-rose-600">{errors.priority.message}</span>}
    </div>
          <Button type="submit" className="mt-3"> add task </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}



     










        




