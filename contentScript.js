(()=>{
        // chrome.runtime.onMessage.addListener((obj, sender, response) => {
        let div1, div2, img1, img2;
        div1 = document.createElement('div')
        img1 = document.createElement('img')

        img1.src = "./assets/tumblr-lp8lzame1s1qapbyt540.gif"
        img1.width = 150

        div1.classList.add('fixed1')

        div1.append(img1)

        document.body.append(div1)
        console.log('i do be working')
        // })
})();