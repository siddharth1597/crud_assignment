import React, { useState } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { createUsers } from '../utils/action'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [allFields, setAllFields] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        age: ''
    });

    const AddUser = (e) => {
        e.preventDefault();
        Object.assign(allFields, {
            _id: shortid.generate(),
            createdAt: new Date().toUTCString(),
            updatedAt: new Date().toUTCString(),
            __v: 0
        })
        dispatch(createUsers(allFields))
        navigate('/')
    }

    return (
        <div className='pt-10'>
            <form className='shadow max-w-xl p-7 mx-auto text-left flex flex-col bg-slate-100'>
                <h3 className='mb-6 font-semibold'>Create User</h3>
                <div className='flex'>
                    <input className='p-2 border border-gray-300 w-1/2' value={allFields.firstName} type={`text`} placeholder={`First Name`}
                        onChange={(e) => setAllFields({...allFields, firstName: e.target.value})} />
                    <input className='p-2 ml-3 border border-gray-300 w-1/2' value={allFields.lastName} type={`text`} placeholder={`Last Name`} 
                        onChange={(e) => setAllFields({...allFields, lastName: e.target.value})} />
                </div>
                <input className='mt-4 p-2 w-1/2 border border-gray-300' value={allFields.phoneNumber} type={`number`} placeholder={`Phone Number`}
                    onChange={(e) => setAllFields({...allFields, phoneNumber: e.target.value})} />
                <input className='mt-4 p-2 w-1/2 border border-gray-300' value={allFields.age} type={`number`} placeholder={`Age`}
                    onChange={(e) => setAllFields({...allFields, age: e.target.value})} />

                <button className='mx-auto py-2 px-16 mt-7 bg-green-500 text-white w-fit' onClick={(e) => AddUser(e)}>Create</button>
            </form>
        </div>
    )
}

export default CreateUser
