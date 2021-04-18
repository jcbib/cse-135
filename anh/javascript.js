    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("nav-button").onclick = closeNav;
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("nav-button").onclick = openNav;
    }

    setInterval(function () {
        $("#container").toggleText("C");
        $("#container").toggleText("C++");
        $("#container").toggleText("Java");
    }, 500);