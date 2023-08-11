export const calculateAge = (date)=>{
  const birthDate = new Date(date);
  const difference = Date.now() - birthDate.getTime();
  const age = new Date(difference);

  return Math.abs(age.getUTCFullYear() - 1970);
}