var div,
    container = document.getElementById("container");

for (var i = 0; i < 5; i++){
    div = document.createElement('div');
    div.onlock = function() {
        alert('this is box #' + i);
    };
    container.appendChild(div)
}