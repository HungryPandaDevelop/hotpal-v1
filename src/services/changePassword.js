import { 
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';

import { toast } from 'react-toastify';



export const changePassword =  async (formData) => {

  const auth = getAuth();

  const user = auth.currentUser;

  const { checkPassword, changePassword, checkChangePassword } = formData;

  const credential = EmailAuthProvider.credential(
    user.email,
    checkPassword
  );



  if(checkPassword){

    await reauthenticateWithCredential(user, credential).then(() => {
      // toast.success('Обновили user');

      if(changePassword && changePassword.length > 4){
        if((changePassword === checkChangePassword)){
          updatePassword(user, changePassword).then(() => {
            toast.success('Обновили пароль');
          }).catch((error) => {});
        }else{
          toast.error('Пароли не совпадают');
        }
      }else{
        toast.error('Пароль должен быть больше 6 символов');
      }

    }).catch((error) => {
      console.log(error)
      toast.error('Не тот пароль');

    });
  }



}