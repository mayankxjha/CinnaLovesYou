const form = document.querySelector('#Form')
const radioButtons = document.querySelectorAll('input[name="CinnaCount"]');
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: 1})
        .then(data => {
            // console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
});

function saveSelectedValue() {
    radioButtons.forEach(btn => {
        if (btn.checked) {
            chrome.storage.local.set({co1: btn.value}, function () {
                console.log("Selected value saved: " + btn.value);
            });
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {message: btn.value})
                    .then(data => {
                        // console.log(data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            });
        }
    })
}

function loadSelectedValue() {
    chrome.storage.local.get(['co1'], function (result) {
        if (result.co1) {
            document.querySelector(`#test${result.co1}`).checked = true;
        }
    });
}

radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', saveSelectedValue);
    chrome.storage.local.get(['co1'], function (result) {
    });
});

// Load the saved value when the popup is opened
loadSelectedValue();