import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../utils/fakeDB';

const JobDetails = () => {
    const jobTries = useLoaderData();
    const {id, job_description, job_responsibilities, educational_requirements, experience, Salary, Job, Phone, Email, Address, img_1, img_2, img_3, img_4, img_5} = jobTries;
    // console.log(jobTries);
    // const product = jobTries.find((p) => p.id === id)

    const handleJobData = id =>{
        // console.log(id)
        addToDb(id)
    }

    return (

        <div>
            <h1 className='text-center  font-bold text-2xl bg-pink-100 p-10 mx-10 rounded-xl'>Job Details</h1>
        <div className='grid md:grid-cols-2'>
            <div className='md:ml-20 ml-4 mt-20 '>

             <b>Job Description:</b> <p className='text-gray-500'> {job_description}</p> 
            <br/>

            <b>Job Responsibility:</b>  <p className='text-gray-500'> {job_responsibilities}</p><br/>

             <b>Educational Requirements:</b> <p className='text-gray-500'>{educational_requirements}</p><br/>

             <b>Experiences:</b> <p className='text-gray-500'> {experience}</p> <br />
            </div>


            <div>
            <div className='md:ml-20 ml-10 mt-20 bg-gray-200 mb-7 p-10 md:mr-60 mr-10 rounded-xl'>
                <h1 className='font-bold '>Job Details</h1> <br />


                <div className='flex items-center gap-2'>
                    <img className='h-5 w-5' src={img_1} alt="" />

                    <p className='mb-2'> <b>Salary :</b> <span className='text-gray-500'>{Salary}</span> </p>
                </div>


                <div className='flex items-center gap-2'>
                    <img className='h-5 w-5 ' src={img_2} alt="" />

                    <p className='mb-5 mt-4'> <b>Job_Title :</b> <span className='text-gray-500  mb-5'> {Job} </span> </p>
                </div>

                <br />

                <h1 className='font-bold mb-5'>Contact Information</h1>


                <div className='flex items-center gap-2'>
                    <img className='h-5 w-5' src={img_3} alt="" />

                    <p className='mb-2'> <b>Phone :</b> <span className='text-gray-500'>{Phone}</span> </p>
                </div>


                <div className='flex items-center gap-2'>
                    <img className='h-5 w-5' src={img_4} alt="" />

                    <p className='mb-2'> <b>E-mail :</b> <span className='text-gray-500'>{Email}</span> </p>
                </div>

                <div className='flex items-center gap-2'>
                    <img className='h-5 w-5' src={img_5} alt="" />

                    <p className='mb-2'> <b>Address :</b> <span className='text-gray-500'>{Address}</span> </p>
                </div>

            </div>
            <button onClick={()=>handleJobData(id)} className='btn btn-primary md:mb-10 mb-5 md:w-96 w-40 ml-20'>Apply Now</button> 
            </div>

        </div>

        </div>
    );
};

export default JobDetails;