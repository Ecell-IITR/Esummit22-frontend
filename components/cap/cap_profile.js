import React from 'react';
import { useState } from 'react';
import FetchApi from '../../utils/fetchAPI';
import { CA_PROFILE_API } from '../../utils/APIs';
import { getAuthToken } from '../../utils';
export const Profile = ({
  name = '',
  points,
  id,
  college,
  rank,
  invite_id,
}) => {
  return (
    <div className='profile-container'>
      <div className='profile-image'>
        <p>{name[0]}</p>
      </div>

      <div className='profile-details'>
        <div className='profile-details-name'>
          <div className='profile-details-name-one'> {name} </div>
          <div className='profile-details-name-points'>{points} Points</div>
        </div>
        <div className='profile-details-name2'>
          <div className='profile-white-text'>Campus Ambassador</div>
          <img className='profile-circle' src='/circle.png' alt='' />
          <div className='profile-white-text'> {college}</div>
        </div>
        <div className='profile-details-name3'>
          <div className='profile-white-text ca-profile-id'>ESummit ID</div>
          <div className='profile-golden-text'>{id}</div>
          <img className='profile-circle' src='/circle.png' alt='' />
          <div className='profile-white-text'>Invite ID</div>
          <div className='profile-golden-text'>{invite_id}</div>
          <img className='profile-circle' src='/circle.png' alt='' />
          <div className='profile-white-text'>Rank</div>
          <div className='profile-golden-text'>{rank}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
