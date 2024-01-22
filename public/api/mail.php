<?php
header("Access-Control-Allow-Origin: *");

$mail = isset($_GET['mail']) ? $_GET['mail'] : null;
$name = isset($_GET['name']) ? $_GET['name'] : null;
$host = isset($_GET['host']) ? $_GET['host'] : null;
// $mail = 'bink@inbox.ru';
// $mail = 'bink3715406@yandex.ru';
$vertificationId = isset($_GET['vertificationId']) ? $_GET['vertificationId'] : null;


$date = date("Y-m-d H:i:s");

$htmlContent = ' 
	<html> 
	<head> 
		<title>Welcome to HotPal</title> 
	</head> 
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<style>
	

	</style>
	<body class="body" style="font-family: arial;">

	<table  class="table" cellspacing="0" border="0" 
	style="padding: 30px;  width: 100%;  height: 100%;"  >
		<tr>
			<td>
				<table style=" background-color: #fff; border-radius: 30px;    width: 630px;    text-align: center;    padding-top: 30px; position: relative;">
					<tr>
						<td>
							<img width="290px" src="https://hotpal.ru/mail/logo.jpg" alt="">
						</td>
					</tr>
					<tr>
						<td>
		<h2 style="font-size: 40px; margin: 15px 0px;">Здравствуйте, '.$name.'!</h2>
						</td>
		
					</tr>
					<tr>
						<td>
							Пожалуйста,
							<div>
							
							<a style="font-weight: 700; color: #00AEEF;" href="http://'.$host.'/reg-end?vertificationId='.$vertificationId.'">подтвердите вашу почту,</a></div>
							<br>
						</td>
					</tr>
					<tr>
						<td>
							и начните пользоваться нашим сервисом
							
							<div>
								без ограничений!
							</div>
						</td>
					</tr>
					<tr>
						<td style="font-size: 0px;">
							<img src="https://hotpal.ru/mail/mail.jpg" alt="">
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	
	</body> 
	</html>'; 

// Создаем дату и время отправки письма
$subject = 'Verification Hotpal.ru';


$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

// Additional headers 
$headers .= 'From: <support@hotpal.ru>' . "\r\n"; 
// $headers .= 'Cc: hotpal@example.com' . "\r\n"; 
// $headers .= 'Bcc: support@hotpal.ru' . "\r\n"; 
$headers .= 'X-Mailer: PHP/' . phpversion();

$mailSent = mail($mail, $subject, $htmlContent, $headers);

if($mailSent){
	echo 'отправлено на '.$mail;
}else{
	echo 'Произошел сбой';
};


/*


<table cellspacing="0" style="border: 2px dashed #FB4314; width: 100%;"> 
<tr> 
<th>Здравствуйте, '.$name.'</th>
</tr> 
<tr> 
	<td>Спасибо, что выбрали сервис знакомств HotPal.ru в качестве помощника по поиску своего статься.</td> 
</tr> 
<tr style="background-color: #e0e0e0;"> 
	<th>Спасибо за выбор нашего сервиса.</td> 
</tr> 
<tr> 
	<td>Для окончания регистрации на сайте, Вам необходимо перейти по ссылке: <a href="http://'.$host.'/reg-end?vertificationId='.$vertificationId.'">www.hotpal</td> 
</tr> 
<tr> 
	<td> С уважением, команда HotPal.</td> 
</tr> 

<tr>
<td>
	Время отправки'.$date.'
</td>
</tr>
</table> 
*/

/*



		*/