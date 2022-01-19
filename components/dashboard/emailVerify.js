import TransparentGradientButton from '../transparentGradientButton';

export const VerifyEmailForTask = ({ type }) => {
  return (
    <div className='email-verify-main-container'>
      <div className='email-verify-subcontianer'>
        <div className='email-verify-imgcontainer'>
          <img src='viewTask.webp' alt='EmailVerification' />
        </div>
        <div className='email-verify-text'>
          Verify Your Email to View {type}.
        </div>
        <div className='email-verify-btn-container'>
          <TransparentGradientButton text='Verify Now' />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailForTask;
