import React, { useState } from 'react'
import { z } from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers'
import axios from 'axios'
import {
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
  IconButton,
  Select,
  FormControl,
  InputLabel,
  Input,
  FormLabel,
    ButtonBase,
  
} from '@mui/material';

// const schema=z.object({
//     name:z.string().min(3).max(100)
// })

// type expenseFormData = z.infer < typeof schema >;


const UpdateForm = () => {

    const [userData,setUserData] =useState( {
        name: 'mahima',
        address: '12 f',
        familyMouths: 'family',
        phoneNumber: 1222,
        weekGroup: 'orange',
        community: 'community',
        idNumber:'id'
    })
    const { register, handleSubmit } = useForm()
    
    const onSubmit = (data) => { 
        setUserData({ name: data.name,
                      address: data.address,
                     familyMouths: data.familyMouths ,
            phoneNumber: data.phoneNumber,
            weekGroup: data.weekGroup,
            community: data.community,
            idNumber:data.idNumber
            
                     
       }) 
        console.log(userData)

 }
    
    return (
      <div >
    
      <form onSubmit={handleSubmit(onSubmit)} >
          { console.log(userData)}
          <div>
          <FormLabel className='name' style={{display:'block'}}>Name</FormLabel>
          <TextField type='text' {...register('name')} id='name' name='name' ></TextField>
          </div>
          <div>
          <FormLabel className='address' style={{display:'block'}}>Address</FormLabel>
          <TextField type='text' {...register('address')} id='address' name='address'></TextField>
          </div>
          <div>
          <FormLabel className='familyMouths' style={{display:'block'}}>Family Mouths</FormLabel>
          <TextField type='text' {...register('familyMouths')} id='familyMouths' name='familyMouths'></TextField>
          </div>
          <div>
          <FormLabel className='phoneNumber' style={{display:'block'}}>Phone Number</FormLabel>
          <TextField type='text' {...register('phoneNumber')} id='phoneNumber' name='phoneNumber'></TextField>
          </div>
         <div>
          <FormLabel className='weekGroup' style={{display:'block'}}>Week Group</FormLabel>
          <TextField type='text' {...register('weekGroup')} id='weekGroup' name='weekGroup'></TextField>
         </div>   
         <div>
          <FormLabel className='weekGroup' style={{display:'block'}}>Week Group</FormLabel>
          <TextField type='text' {...register('weekGroup')} id='weekGroup' name='weekGroup'></TextField>
        </div>  
         <div>
          <FormLabel className='community' style={{display:'block'}}>Community</FormLabel>
          <TextField type='text' {...register('community')} id='community' name='community'></TextField>
        </div>   
          <div>
          <FormLabel className='idNumber' style={{display:'block'}}>Id Number</FormLabel>
          <TextField type='text' {...register('idNumber')} id='idNumber' name='idNumber'></TextField>
         </div>       
         <Button type='submit' > Submit</Button>
            </form>
            </div>
  )
}

export default UpdateForm