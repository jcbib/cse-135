<?php
    if (isset($_COOKIE['hasJS'])) {
        // JS is enabled, do not need to do anything.
    } else {
        $cookiesEn = FALSE;
        $url = 'http://jak-cse135.site/testnojs.php';
        setcookie('testcookie', 'hello');

        if (isset($_COOKIE['testcookie'])) {
            $cookiesEn = FALSE;
        } 

        $postData = array(
            'userAgent' => $_SERVER['HTTP_USER_AGENT'],
            'userLanguage' => substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2),
            'cookiesEnabled' => $cookiesEn,
            'jsEnabled' => FALSE,
            'imageEnabled' => FALSE,
            'cssEnabled' => FALSE,
            'screenDimensions' => 'JavaScript Disabled, Unable to Retrieve',
            'windowsDimensions' => 'JavaScript Disabled, Unable to Retrieve',
            'networkConnectionType' => 'JavaScript Disabled, Unable to Retrieve'
        );

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $server_output = curl_exec($ch);
        curl_close($ch);


        // $options = array (
        //     'http' => array(
        //         'method' => 'POST',
        //         'header' => "Content-Type: application/json\r\n". 
        //                     "Accept: application/json\r\n",
        //         'content' => http_build_query($postData)
        //     )
        // );

        // $context = stream_context_create($options);
        // $result = file_get_contents($url, false, $context);
        // if ($result === FALSE) {
        //     die('Error');
        // }
        echo "hello";
        print_r($ch);
        print_r($server_output);
        $responseData = json_decode($server_output, TRUE);
        print_r($responseData);
    }
?>