// import signUpUser from './4-user-promise'
// import uploadPhoto from './5-photo-reject'

// export default function handleProfileSignup(firstName, lastName, fileName) {
//   const signUpPromise = signUpUser(firstName, lastName);
//   const uploadPromise = uploadPhoto(fileName);

//   return Promise.allSettled([signUpPromise, uploadPromise]).then((response) => response.forEach((response) => ({
//     status: result.status,
//     value: result.status === 'fulfilled' ? result.value : result.reason,
//   })));

// }

import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise]).then((responses) => 
    responses.map((response) => ({
      status: response.status,
      value: response.status === 'fulfilled' ? response.value : response.reason,
    }))
  );
}
