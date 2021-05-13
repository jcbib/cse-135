<?php
    if (isset($_COOKIE['hasJS'])) {
        // JS is enabled, do not need to do anything.
    } else {
        echo "Javascript is disabled.";
    }
?>