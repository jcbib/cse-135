<?php
    if (isset($_COOKIE['hasJS'])) {
        // JS is enabled, do not need to do anything.
    } else {
        $cookiesEn = FALSE;
        $url = 'http://jak-cse135.site/api/static';
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

        $payload = json_encode($postData);

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $result = curl_exec($ch);
        curl_close($ch);

        $responseData = json_decode($result, TRUE);
        print_r($responseData);
        echo "\n\n";
        print_r($postData);
        echo "\n\n";
        print_r(json_encode($postData));
    }
?>