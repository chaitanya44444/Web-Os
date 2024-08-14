document.addEventListener('DOMContentLoaded', function() {
    var windowScreen = document.querySelector("#window");
    var windowScreenClose = document.querySelector("#windowclose");
    var windowScreenOpen = document.querySelector("#windowopen");

    windowScreenClose.addEventListener("click", function() {
        closeWindow(windowScreen);
    });

    windowScreenOpen.addEventListener("click", function() {
        openWindow(windowScreen);
    });

    function closeWindow(element) {
        element.style.display = "none";
    }

    function openWindow(element) {
        element.style.display = "flex";
    }

    dragElement(windowScreen);

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        var header = document.getElementById(elmnt.id + "header");

        if (header) {
            header.onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime;
    }

    setInterval(updateTime, 1000);
});
document.addEventListener('DOMContentLoaded', function() {
    // Make the welcome window draggable
    dragElement(document.getElementById("welcome"));

    // Event listener for the Hacker Notes icon
    document.getElementById("hackerNotesIcon").addEventListener("click", function() {
        openWindow(document.getElementById("welcome"));
    });

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function openWindow(element) {
        element.style.display = "block";
    }
});
var selectedIcon = undefined
function selectIcon(element) {
    element.classList.add("selected");
    selectedIcon = element
  } 
function deselectIcon(element) {
    element.classList.remove("selected");
    selectedIcon = undefined
  }
function handleIconTap(element) {
    if (element.classList.contains("selected")) {
      deselectIcon(element)
      openWindow(window)
    } else {
      selectIcon(element)
    }
  }
dragElement(document.querySelector("#notes"))