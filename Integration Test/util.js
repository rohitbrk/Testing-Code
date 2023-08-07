const generateInfo = (name, age) => {
  return `${name} is ${age} years old and has vote right !`;
};

const canVote = (age) => {
  if (age < 18) return false;
  return true;
};

const validateVoter = (name, age) => {
  let info;
  const eligibleToVote = canVote(age);
  if (eligibleToVote) {
    info = generateInfo(name, age);
    return info;
  }
  return false;
};

module.exports = { validateVoter };
