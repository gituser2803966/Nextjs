const valid = (firstName, lastName, username, password, cf_password) => {
  if (!firstName || !lastName || !username || !password || !cf_password) {
    return "please add all fileds";
  }

  if (password.length < 6) {
    return "Password must be at least 6 character.";
  }

  if (password !== cf_password) {
    return "Confirm password did not match";
  }
};

export default valid;
