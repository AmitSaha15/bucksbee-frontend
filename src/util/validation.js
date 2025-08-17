export const validateEmail = (email) => {
  if (email.trim()) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }

  return false;
};
