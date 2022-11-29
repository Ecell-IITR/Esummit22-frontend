import FetchApi from '../utils/fetchAPI';
import { FOOTER_QUERY_API } from '../utils/APIs';
import { toast } from 'react-toastify';
import React, { useState } from 'react';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState(null);
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      contact,
      message,
      query,
    };
    FetchApi('post', FOOTER_QUERY_API, data, null)
      .then((res) => {
        toast.success('Query Submitted !');
        setName('');
        setEmail('');
        setMessage('');
        setQuery();
        setContact(null);
      })
      .catch((err) => {
        console.log(err);
        const errors = err.response.data;
        for (let value of Object.values(errors)) {
          toast.error('Error !', value[0]);
        }
        this.setState({
          name: '',
          email: '',
          message: '',
          contact: null,
          query: '',
        });
      });
  };

  return (
    <div className='new-footer-container' id='footer'>
      <div className='new-footer-container-child width-30'>
        <a
          href='https://ecelliitr.org/'
          target='_blank'
          rel='noopener noreferrer'
        ></a>
        <div className='new-footer-section-esummit-logo'>
          <img src='Esummitlogofinal.webp' alt='summitLogo' />
        </div>
        <div>
          <div className='new-footer-section-contact-container new-footer-section-contact-container-additional-margin0'>
            <h2 className='new-footer-section-contact-heading blinker-font'>
              EMAIL
            </h2>
            <h3 className='new-footer-section-contact-subheading'>
              esummit@iitr.ac.in
            </h3>
          </div>
          <div className='new-footer-section-contact-container new-footer-section-contact-container-additional-margin'>
            <h2 className='new-footer-section-contact-heading blinker-font'>
              FOLLOW US AT
            </h2>
            <div className='new-footer-section-contact-subheading logo-container'>
              <a
                href='https://www.facebook.com/ecelliitr'
                target='_blank'
                rel='noopener noreferrer'
                className='new-footer-section-contact-link'
              >
                <img
                  src='facebook.webp'
                  className='new-footer-section-contact-logo'
                  alt='facebook icon'
                />
              </a>
              <a
                className='new-footer-section-contact-link'
                href='https://twitter.com/ECell_IITR'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='Twitter.png'
                  className='new-footer-section-contact-logo'
                  alt='twitter icon'
                />
              </a>

              <a
                href='https://www.instagram.com/ecelliitr/'
                target='_blank'
                className='new-footer-section-contact-link'
                rel='noopener noreferrer'
              >
                <img
                  src='Instagram.webp'
                  className='new-footer-section-contact-logo'
                  alt=' instagram icon'
                />
              </a>
              <a
                className='new-footer-section-contact-link'
                href='https://www.linkedin.com/company/esummit'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='LinkedIN.webp'
                  className='new-footer-section-contact-logo'
                  alt='linkedin icon'
                />
              </a>
              <a
                className='new-footer-section-contact-link'
                href='https://www.youtube.com/channel/UCf1py66Ov1easJAswwjxQZw'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='Youtube.webp'
                  className='new-footer-section-contact-logo'
                  alt='youtube icon'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='new-footer-container-child width-40'>
        <a
          href='https://ecelliitr.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='new-footer-section-ecell-logo' />
        </a>
        <div>
          <div className='new-footer-section-contact-container new-footer-section-contact-container-additional-margin01'>
            <h2 className='new-footer-section-contact-heading blinker-font'>
              PHONE
            </h2>
            <div className='new-footer-section-contact-subheading'>
              Sarvesh: <br /> <p>+91 96236 32358 </p> <br /> Pratuysh: <br />{' '}
              <p> +91 97990 42645 </p>
            </div>
          </div>
          <div className='new-footer-section-contact-container new-footer-section-contact-container-additional-margin1'>
            <h2 className='new-footer-section-contact-heading blinker-font'>
              OUR ADDRESS
            </h2>
            <div className='new-footer-section-contact-subheading prewrap'>
              E-Cell Office SAC Building
              <br /> IIT Roorkee <br /> Roorkee, Uttrakhand-
              <br />
              247667, INDIA
            </div>
          </div>
        </div>
      </div>
      <div className='new-footer-container-child width-45 padding-left-3rem'>
        <form className='new-footer-form'>
          <div className='new-footer-form-input-container'>
            <input
              id='inputName'
              type='text'
              className='new-footer-form-field width-100 height-100'
              placeholder='Name'
              name='name'
              value={name}
              autoCorrect='off'
              autoComplete='off'
              autoCapitalize='off'
              spellCheck='false'
              onChange={(event) => setName(event.target.value)}
              //   onChange={this.onChange}
              required
            />
          </div>
          <div className='new-footer-form-input-container'>
            <input
              id='inputEmail'
              type='email'
              className='new-footer-form-field width-100 height-100'
              placeholder='Email'
              name='email'
              value={email}
              autoCorrect='off'
              autoComplete='off'
              autoCapitalize='off'
              spellCheck='false'
              onChange={(event) => setEmail(event.target.value)}
              //   onChange={this.onChange}
              required
            />
          </div>
          <div className='new-footer-form-input-contact'>
            <div className='new-footer-form-input-container mr-4'>
              <input
                id='inputContact'
                type='number'
                className='new-footer-form-field width-99 height-100'
                placeholder='Contact Number'
                name='contact'
                value={contact}
                autoCorrect='off'
                autoComplete='off'
                autoCapitalize='off'
                spellCheck='false'
                onChange={(event) => setContact(event.target.value)}
                //   onChange={this.onChange}
                required
              />
            </div>
            <div className='new-footer-form-input-container'>
              <input
                id='inputContact'
                type='text'
                className='new-footer-form-field  width-100 height-100'
                placeholder='Query Regarding'
                name='query'
                value={query}
                autoCorrect='off'
                autoComplete='off'
                autoCapitalize='off'
                spellCheck='false'
                onChange={(event) => setQuery(event.target.value)}
                //   onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className='new-footer-form-input-container'>
            <textarea
              id='inputMessage'
              type='text'
              className='new-footer-form-field textarea-field'
              placeholder='Write your message'
              name='message'
              value={message}
              rows='5'
              autoCorrect='off'
              autoComplete='off'
              autoCapitalize='off'
              spellCheck='false'
              onChange={(event) => setMessage(event.target.value)}
     
              required
            />
          </div>
          
          <div className='clip_footer' onClick={handleSubmit}>
            {' '}
            SUBMIT{' '}
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Footer;
