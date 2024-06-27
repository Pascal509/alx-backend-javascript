// 4-user-promise.js
export default function signUpUser(firstName, lastName) {
    return new Promise((resolve) => {
      resolve({
        firstName: firstName,
        lastName: lastName,
      });
    });
  }
  
// export default function signUpUser(firstName, lastName) {
//     return Promise.resolve({ firstName, lastName });
//   }