// 100-await.js
import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.allSettled([
      uploadPhoto(),
      createUser(),
    ]);

    // Check if both promises were fulfilled successfully
    if (photoResponse.status === 'fulfilled' && userResponse.status === 'fulfilled') {
      return {
        photo: photoResponse.value,
        user: userResponse.value,
      };
    } else {
      // Handle case where one or both promises rejected
      return {
        photo: null,
        user: null,
      };
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error('Error in asyncUploadUser:', error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;