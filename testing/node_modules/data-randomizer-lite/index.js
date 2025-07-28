//Random Number generator between two values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Random email generator
function randomEmail(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  let email = "";
  for (let i = 0; i < length; i++) {
    email += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  email += "@gmail.com";
  return email;
}

//random password generator
function randomPassword(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

//random color code generator
function randomColor() {
  const chars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return color;
}


//random name generator
function randomName() {
    const firstNames = [
    "Emma", "Liam", "Olivia", "Noah", "Ava", "Elijah", "Sophia", "James",
    "Mia", "Benjamin", "Charlotte", "Lucas", "Amelia", "Henry", "Harper"
    ];

    const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller",
    "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez"
    ];
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${first} ${last}`;
}


module.exports={
    getRandomInt,
    randomEmail,
    randomPassword,
    randomColor,
    randomName
}