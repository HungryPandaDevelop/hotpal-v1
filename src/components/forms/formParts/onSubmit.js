
export const onSubmit = (e, invalid, submitSuccess, setSuccessSend, setCheckErrorSubmit)=>{
  
  let idTimeCheck;
  e.preventDefault();

  if (invalid) {
    setSuccessSend(false);

    setCheckErrorSubmit(true);
    clearTimeout(idTimeCheck);
    idTimeCheck = setTimeout(() => {
      setCheckErrorSubmit(false);
    }, 10000);
  } else {
    setSuccessSend(true);
    submitSuccess();
  }
}