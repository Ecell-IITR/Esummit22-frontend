import React from 'react';
import { useState, useEffect } from 'react';
import FetchApi from '../../utils/fetchAPI';
import { NON_CA_PROFILE_API } from '../../utils/APIs';
import { getAuthToken } from '../../utils';
function name_editor(text){
  let string_arr=text.split(" ")
  console.log()
  if(string_arr.length==1){
    return text.slice(0,16) + ".."
  }else {
  var x=16;
  var return_text=""
  for(var i=0;i<string_arr.length;i++)
     if (x-string_arr[i].length>0){
       return_text+=string_arr[i]+" "
       x-=string_arr[i].length
     }
     else{
      return_text+="</br>"+string_arr[i]
      x=16-string_arr[i].length
     }
     return return_text
  }
  
}
export const NProfile = () => {
  const [caData, setcaData] = useState([]);
  useEffect(() => {
    FetchApi('get', NON_CA_PROFILE_API, null, getAuthToken())
      .then((res) => {
        setcaData(res.data[0]);
        // console.log(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className='nprofile-container'>
        <div className='dot'></div>
        <div className='dot1'></div>
        <div className='nprofile-image'>
          <p>{caData?.profile?.full_name[0]}</p>
        </div>
        <div className='nprofile-details-name-one' dangerouslySetInnerHTML={{
                      __html: caData?.profile?.full_name.length>16? name_editor(caData?.profile?.full_name):caData?.profile?.full_name,
                    }}>
          
        </div>

        <div className='nprofile-white-text'> {caData?.college}</div>

        <div className='nprofile-white-text2'>
          <div className='nprofile-white-text3'>ESummit ID </div>{' '}
          {caData?.esummit_id}
        </div>
      </div>
    </>
  );
};

export default NProfile;
