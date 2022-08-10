import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { MdWebAsset} from 'react-icons/md';
import { SiMarketo} from 'react-icons/si';
import { HiInformationCircle} from 'react-icons/hi';
import { SiMicrosoftteams} from 'react-icons/si';
import { GiTimeBomb} from 'react-icons/gi';


const Service = () => {
    return (
        <div className='mt-10'>
           <h2 className='text-4xl font-bold text-center'>Using Protrack you can Manage and Maintain</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mx-16  mt-10">
        <div className="card max-w-lg bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 ">
            
                <figure className='text-5xl mt-5'>
                <AiFillAppstore></AiFillAppstore> 
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="text-3xl font-bold"> App Development</h2>
                  <p>
                    The productivity tool teams love, paired with the features and
                    security needed for scale.
                  </p>
                  <div className="card-actions">
                    
                  </div>
                </div>
              </div>
              <div className="card max-w-lg bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 ">
                <figure className='text-5xl mt-5'>
                <MdWebAsset></MdWebAsset>
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="text-3xl font-bold">Asset Development</h2>
                  <p>
                    The productivity tool teams love, paired with the features and
                    security needed for scale.
                  </p>
                  <div className="card-actions">
                  
                  </div>
                </div>
              </div>           
              <div className="card max-w-lg bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
                <figure className='text-5xl mt-5'>
                 <SiMarketo></SiMarketo>
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="text-3xl font-bold">Marketing</h2>
                  <p>
                    The productivity tool teams love, paired with the features and
                    security needed for scale.
                  </p>
                  <div className="card-actions">
                    
                  </div>
                </div>
              </div>
  
              <div className="card max-w-lg bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
                <figure className='text-5xl mt-5'>
                <HiInformationCircle></HiInformationCircle>
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="text-3xl font-bold">Information Purpose</h2>
                  <p>
                    The productivity tool teams love, paired with the features and
                    security needed for scale.
                  </p>
                  <div className="card-actions">
                 
                  </div>
                </div>
              </div>
  
              <div className="card max-w-lg bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 ">
                <figure className='text-5xl mt-5'>
                 <SiMicrosoftteams></SiMicrosoftteams>
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="text-3xl font-bold">Team Collaboration</h2>
                  <p>
                    The productivity tool teams love, paired with the features and
                    security needed for scale.
                  </p>
                  <div className="card-actions">
                   
                  </div>
                </div>
              </div>
  
              <div className="card max-w-lg bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 ">
                <figure className='text-5xl mt-5'>
               <GiTimeBomb></GiTimeBomb>
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="text-3xl font-bold">Tracking Time</h2>
                  <p>
                    The productivity tool teams love, paired with the features and
                    security needed for scale.
                  </p>
                  <div className="card-actions">
               
                  </div>
                </div>
              </div>
  
  
        </div>
        </div>
    );
};

export default Service;