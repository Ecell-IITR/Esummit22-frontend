import { useState } from 'react';
import CustomGradientBtn from './customGradientBtn';
import Share from './dashboard/share_popup';
import Upload from './dashboard/upload_popup';
import { isAuthenticated } from '../utils';
export const CAPTask = ({
  description,
  Due_date,
  points,
  id,
  sharesesc,
  shareurl,
}) => {
  const [changeModal, setChangeModal] = useState(false);
  const [UploadToggle, setUploadToggle] = useState(false);
  const [show, setShow] = useState(false);
  const user = isAuthenticated();
  console.log(user);
  return (
    <>
      <Upload
        profileId={user.user.id}
        id={id}
        show={show}
        setShow={(e) => {
          setShow(e);
        }}
      />
      <div className='tasks-container'>
        {/* <div><Upload id={id} /></div> */}
        <div className='tasks-container-discription'>{description}</div>
        <div className='tasks-container-date'>
          Due Date: {new Date(Due_date).toDateString()}
        </div>
        <div className='tasks-container-share'>
          <div
            className='tasks-container-share-button'
            onClick={() => {
              setChangeModal(true);
            }}
          >
            <CustomGradientBtn text='Share' color='black' />
          </div>
          <div className='tasks-container-share-score'>{points} points</div>
          <div
            className='tasks-container-share-button'
            onClick={() => {
              setShow(true);
            }}
          >
            <CustomGradientBtn text='Upload' color='black' />
          </div>
        </div>
        <div>
          {changeModal && (
            <Share
              closeModal={setChangeModal}
              desc={sharesesc}
              link={shareurl}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CAPTask;
