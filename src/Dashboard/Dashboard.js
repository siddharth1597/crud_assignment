import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteUsers, initialUsers } from '../utils/action';

const Dashboard = () => {
    const [list, setList] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    console.log(data)
    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('https://blue-journalist-bbrpv.ineuron.app:4000/users');  
            dispatch(initialUsers(response.data.data));
            setList(response.data.data.map((item, index) => {
                return(
                    <tr key={item._id}>
                        <td className='border-b border-slate-100 p-4 text-slate-500'>{index + 1}</td>
                        <td className='border-b border-slate-100 p-4 text-slate-500'>{item.firstName + ' ' + item.lastName}</td>
                        <td className='border-b border-slate-100 p-4 text-slate-500'>{item.phoneNumber}</td>
                        <td className='border-b border-slate-100 p-4 text-slate-500'>{item.age}</td>
                        <td className='border-b border-slate-100 p-4 text-slate-500'>
                            <button className='rounded bg-blue-600 text-white py-2 px-4 hover:bg-blue-500' id={item._id}>Edit</button>
                        </td>
                        <td className='border-b border-slate-100 p-4 text-slate-500'>
                            <button className='rounded bg-red-600 text-white py-2 px-3 hover:bg-red-500' id={item._id}
                                onClick={(e) => DeleteHandler(e)}>Delete</button>
                        </td>
                    </tr>
                );
            }));
        }
        getUsers();
    }, [])

    const DeleteHandler = (e) => {
        dispatch(deleteUsers(e.target.id));
    }

    return (
    <div>
        <Link to={`/user/create`}>
            <button className='py-3 px-6 bg-green-600 rounded text-white hover:bg-green-500'>+ Add New User</button>
        </Link>
        <div className='pt-3 mt-10'>
            <h4 className=' font-semibold text-xl'>List of Users</h4>
            <table className="table-auto border-collapse mt-10 mx-auto border">
                <thead className=''>
                    <tr>
                        <th className='border-b text-l pr-6 pl-8 py-3 text-slate-700 text-left'>SNo.</th>
                        <th className='border-b text-l pr-6 pl-8 py-3 text-slate-700 text-left'>Name</th>
                        <th className='border-b text-l pr-6 pl-8 py-3 text-slate-700 text-left'>Mobile No.</th>
                        <th className='border-b text-l pr-6 pl-8 py-3 text-slate-700 text-left'>Age</th>
                        <th className='border-b text-l pr-6 pl-8 py-3 text-slate-700 text-left'></th>
                        <th className='border-b text-l pr-6 pl-8 py-3 text-slate-700 text-left'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 1 ? 
                        data.map((item, index) => {
                            return(
                                <tr key={item._id}>
                                    <td className='border-b border-slate-100 p-4 text-slate-500'>{index + 1}</td>
                                    <td className='border-b border-slate-100 p-4 text-slate-500'>{item.firstName + ' ' + item.lastName}</td>
                                    <td className='border-b border-slate-100 p-4 text-slate-500'>{item.phoneNumber}</td>
                                    <td className='border-b border-slate-100 p-4 text-slate-500'>{item.age}</td>
                                    <td className='border-b border-slate-100 p-4 text-slate-500'>
                                        <Link to={`user/update/${item._id}`}>
                                            <button className='rounded bg-blue-600 text-white py-2 px-4 hover:bg-blue-500' id={item._id}>Edit</button>
                                        </Link>
                                    </td>
                                    <td className='border-b border-slate-100 p-4 text-slate-500'>
                                        <button className='rounded bg-red-600 text-white py-2 px-3 hover:bg-red-500' id={item._id}
                                            onClick={(e) => DeleteHandler(e)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    : list}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Dashboard;