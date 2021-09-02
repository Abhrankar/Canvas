canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("click", my_mouseclick);
function my_mouseclick(e) {
   mouse_x = e.clientX - canvas.offsetLeft;
   mouse_y = e.clientY - canvas.offsetTop;
   color = document.getElementById("Canvas_input").value;
    circle(mouse_x, mouse_y);
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}