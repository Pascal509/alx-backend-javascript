// import { uploadPhoto, createUser } from './utils'

// export default function handleProfileSignup() {
//   Promise.all([uploadPhoto(), createUser()]).then((res) => {
//     console.log(resolve[0].body, resolve[1].firstName, resolve[1].lastName)
//   }).catch(() => {
//     console.log('Signup system offline')
//   })
// }

import { uploadPhoto, createUser} from './utils'

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((responses) => {
    const [photoResponse, userResponse] = responses;
    console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  })

}