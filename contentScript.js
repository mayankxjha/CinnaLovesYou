(() => {
    // chrome.runtime.onMessage.addListener((obj, sender, response) => {
    let div1, div2, img1, img2;
    div1 = document.createElement('div')
    div2 = document.createElement('div')
    img1 = document.createElement('img')
    let sourceArr = ["https://i.postimg.cc/J0ynNsXf/cinnamoroll-sanrio.gif",
        "https://i.postimg.cc/6Qwyk5sZ/tumblr-lp8lzame1s1qapbyt540.gif",
        "https://i.postimg.cc/k4V4PV5T/52bbcb94b0bcec2f2d7d44b24eb6ee48.gif",
        "https://i.postimg.cc/zvcFXHw3/AS0007463-04.gif",
        "https://i.postimg.cc/23N3wzr2/cinnamoroll-36.gif",
        "https://i.postimg.cc/g07RfLp0/icegif-600.gif",
        "https://i.postimg.cc/rsNDFKBx/cb98cc487a59fbecfe9606e5dfd372e7.gif",
        "https://i.postimg.cc/9FwkSyjD/Pak.gif",
        "https://i.postimg.cc/9ffTztbb/1941750-05a01.gif",
        "https://i.postimg.cc/CK688B6g/1984725-141d7.gif",
        "https://i.postimg.cc/bwp1fj2K/d4qftu0-9cbf2b0d-9538-4279-96f9-a45b9ba03407.gif",
        "https://i.postimg.cc/htsTS3Lh/d6q2jw9-db9d6de8-39bb-4b9d-84c3-7e1309db534c.gif"];
    let source = ""
    const randomCin = () => {
        source = sourceArr[Math.floor(Math.random() * sourceArr.length)]
        console.log(source)
    }
    randomCin()
    window.onbeforeunload = function () {
        randomCin()
    }
    img1.src = source
    img1.alt = "tf"
    img1.width = 100
    // img1.draggable = true
    img1.addEventListener("ended", () => {
        img1.src = source
    });

    div1.classList.add('fixed2')
    div2.classList.add('fullScr')
    div2.id = "mydiv"
    div1.id="mydivheader"
    div2.appendChild(div1)
    div1.append(img1)
    document.body.prepend(div2)
    dragElement(document.getElementById("mydiv"));
    function dragElement(elmnt) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    console.log('i do be working')
    // })
})();