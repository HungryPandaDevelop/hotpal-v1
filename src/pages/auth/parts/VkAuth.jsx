import * as VKID from '@vkid/sdk';

const VkAuth = ({ btnText }) => {

  // 1 SQNGs8975Bqb3WXXvVTe
  // 2 cdd89711cdd89711cdd897112bcece28f7ccdd8cdd89711a854a5835481e5726665df3d
  VKID.Config.set({
    // Идентификатор приложения.
    app: 51822566,
    // Адрес для перехода после авторизации
    redirectUrl: 'https://hotpal.ru/check-vk',
  });

  const handleClick = () => {
    // Открытие авторизации.
    VKID.Auth.login()
  }



  return (
    <div className='btn btn-reg btn-vk' onClick={handleClick}><i> </i><span>{btnText}</span></div>
  )
}

export default VkAuth