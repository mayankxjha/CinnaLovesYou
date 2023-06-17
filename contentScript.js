(() => {
    let imgCount = 1, dragItems;
    // document.querySelector('#mydiv').remove()
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.message === 1 || 3 || 5) {
            // Handle the message from the popup
            console.log("Got it: " + request.message);
            imgCount = request.message
            // Perform any desired actions here
        }
        let div1, div2, img1;
        div2 = document.createElement('div')
        div2.id = "mydiv"
        div2.classList.add('fullScr')
        document.querySelectorAll('.mydivheader').forEach(el => {
            el.remove()
        })
        for (let i = 0; i < imgCount; i++) {
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
                "https://i.postimg.cc/htsTS3Lh/d6q2jw9-db9d6de8-39bb-4b9d-84c3-7e1309db534c.gif",
                "https://i.postimg.cc/W3GJLY9k/icegif-362.gif",
                "https://i.postimg.cc/nzFnrdF7/cinnamoroll-sanrio.gif",
                "https://i.postimg.cc/Zn9tv219/1782737-51eeb.gif",
            "https://i.postimg.cc/pyN7hTf7/1906952-704fd.gif",
            "https://i.postimg.cc/MHjZJnZr/tumblr-pnwr0b-YAmx1xakhj0o1-400.gif",
            "https://i.postimg.cc/GhC9njYF/1e316fab40c98a169d7e0887c3bc07a9990d719d.gif",
            "https://i.postimg.cc/BQ4ZVn9N/9175d6dbced6adedddc04f0948d003b8.jpg"];
            div1 = document.createElement('div')
            img1 = document.createElement('img')
            let source = ""
            const randomCin = () => {
                source = sourceArr[Math.floor(Math.random() * sourceArr.length)]
            }
            randomCin(source)
            window.onbeforeunload = function () {
                randomCin(source)
            }
            img1.src = source
            img1.alt = "tf"
            img1.width = 100
            img1.classList.add('draggable')
            img1.addEventListener("ended", () => {
                img1.src = source
            });
            div1.classList.add('fixed2')
            div1.classList.add("mydivheader")
            div1.classList.add(`pos${i}`)
            // div1.draggable = true
            div1.append(img1)
            // div2.appendChild(div1)
            document.body.prepend(div1)
            dragElement(div1);
        }
        // img1.draggable = true
        // document.body.prepend(div2)
    });

    function dragElement(elmnt) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.querySelector('.draggable')) {
            // if present, the header is where you move the DIV from:
            document.querySelector('.draggable').onmousedown = dragMouseDown;
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

})();