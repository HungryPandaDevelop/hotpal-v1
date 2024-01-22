<?php
header("Access-Control-Allow-Origin: *");


// if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['image'])) {

    $target_dir = '../uploads/'; // Папка для сохранения изображений

    $target_file = $target_dir . basename($_FILES['image']['name']);

    $target_name = $_FILES['image']['name'];
    
    $randomID = uniqid();

    // 
    $target_file = $target_dir . $randomID . '_' . $target_name;
    
    $newFileName = $randomID . '_' . $target_name;

    if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
        
        $imageURL = 'https://hotpal.ru/uploads/' . $newFileName;

        // echo $imageURL;
        $response = array(
            'imageURL' => $imageURL,
            'newFileName' => $newFileName
        );

        echo json_encode($response);
    } else {
        echo 'Произошла ошибка при загрузке изображения.';
    }
// } 
// else {
//     echo 'Недопустимый запрос.';
// }