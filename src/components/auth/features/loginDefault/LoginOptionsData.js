import instagram from '@assets/images/socialmedia/insta.png';
import facebook2 from '@assets/images/socialmedia/facebook2.png';
import QRCode from '@assets/images/socialmedia/QR_code.png';
import person from '@assets/images/socialmedia/person.png';
import google from '@assets/images/socialmedia/google.png';

export const LoginOptionsData = [
  {
    id: 1,
    image: QRCode,
    title: 'QR',
    content: 'Use QR code',
  },
  {
    id: 2,
    image: person,
    title: 'email-username',
    content: 'Use email / username',
  },
  {
    id: 3,
    image: facebook2,
    title: 'facebook',
    content: 'Continue with Facebook',
  },
  {
    id: 4,
    image: google,
    title: 'google',
    content: 'Continue with Google',
  },
  {
    id: 5,
    image: instagram,
    title: 'instagram',
    content: 'Continue with Instagram',
  },
  // {
  //   id: 6,
  //   image: 'twitter',
  //   title: 'Continue with Twitter',
  // },
  // {
  //   id: 7,
  //   image: 'apple',
  //   title: 'Continue with Apple',
  // },
];
