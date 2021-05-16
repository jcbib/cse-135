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

        $options = array (
            'http' => array(
                'header' => 'Content-Type: application/json\r\n',
                'method' => 'POST',
                'content' => json_encode($postData)
            )
        );

        $context = stream_context_create($options);
        $result = file_get_contents($url, FALSE, $context);
        if ($result === FALSE) {
            die('Error');
        }

        $responseData = json_decode($result, TRUE);
        echo "HEEELELELELELLELEOEOEOEOEOEOE";
        echo $responseData;
    }
?>