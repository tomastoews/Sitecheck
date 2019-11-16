var searchItem = document.querySelector('#search-item');
var search = document.querySelector('#search');
var messagesItem = document.querySelector('#messages-item');
var closeMessages = document.querySelector('#close-messages');
var messages = document.querySelector('#messages');

var toggleDisplay = function (element) {
    if (element.style.display === 'flex') {
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }
}

searchItem.addEventListener('click', function() { toggleDisplay(search) });
messagesItem.addEventListener('click', function () { toggleDisplay(messages) });
closeMessages.addEventListener('click', function () { toggleDisplay(messages) });