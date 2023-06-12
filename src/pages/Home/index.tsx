import { useDispatch, useSelector } from "react-redux";
import {AppDispatch, fetchUsers, User,} from "../../store";
import { useEffect, useState } from "react";
import schema from './validation'
import { zodResolver } from '@hookform/resolvers/zod';
import {
  getUsers,

} from "../../store/users/selectors";
import Table from "../../components/Table";
import { useForm, FormProvider } from "react-hook-form";
import Modal from "../../components/Modal";
import Spacer from "../../components/Spacer";
import Input from "../../components/Input";



const defaultValues =  {
  email: '',
  firstName: '',
  lastName: '',
}

const COLUMNS = [
  { columnName: "id", name: "Id" },
  { columnName: "email", name: "Email" },
];


const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector(getUsers);
  const [open, setOpen] = useState(false);



  const methods = useForm<Partial<User>>( {
    defaultValues,
    resolver: zodResolver(schema)
  });
  const {
    formState: {errors},
    trigger
  }  = methods



  const handleClose = () => {
    const errors = trigger()
    console.log(errors)

    //setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleSave = async () =>{
    const hasErrors = await trigger()

    if(!hasErrors){
      return
    }
  }

  console.log(errors?.email?.message);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={handleOpen}>New</button>
      <Table data={users} columns={COLUMNS} />
      <Modal show={open}>
        <FormProvider {...methods}>
            <Input label='Email' name='email'/>
          <div style={{color: 'red'}}>{errors?.email?.message}</div>
            <Input label='First Name' name='firstName'/>
          <div style={{color: 'red'}}>{errors?.firstName?.message}</div>
            <Input label='Last name' name='lastName'/>
          <div style={{color: 'red'}}>{errors?.lastName?.message}</div>
        <button onClick={handleClose}>Cancel</button>
        <Spacer width={50} />
        <button onClick={handleSave}>Save</button>
        </FormProvider>
      </Modal>
    </div>
  );
};

export default Home;
