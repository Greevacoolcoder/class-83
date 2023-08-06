var last_position_of_x,last_position_of_y; //used to store the touch screen positions

color="black";
width_of_line = 2;

canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width = screen.width - 70;
new_height = screen.height - 300;

        if(width < 992)
        {
            document.getElementById("myCanvas").width = new_width;
            document.getElementById("myCanvas").height = new_height;
            document.body.style.overflow = "hidden"; // means screen wont scroll
        }

        canvas.addEventListener("touchstart" , my_touchstart);

function my_touchstart(e)
{
    console.log("my_touchstart is started");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e)
{
    console.log("my_touchMove is started");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y =" +last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("Current position of x and y coordinates =");
    console.log("x =" + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(cuurent_position_of_touch_x,current-position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}