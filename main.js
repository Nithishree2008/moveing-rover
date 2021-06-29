canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

nasa_mars_images_array=["image_1.jpg","image_2.jpg","image_3.jpg","image_4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
Rover_width=100;
Rover_height=90;
Rover_x=10;
Rover_y=10;
background_image=nasa_mars_images_array[random_number];
console.log("backround_image="+background_image);
rover_image="rover.png";
function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=background_image;
}
function uploadbackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_imgTag,Rover_x,Rover_y,Rover_width,Rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown()
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38")
    {
         up();
         console.log("up");
    }
    if(keyPressed=="40")
    {
        down();
        console.log("down");
    }
    if(keyPressed=="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="39")
    {
        right();
        console.log("right");
    }

}
function up()
{
   if(Rover_y>=0) 
   {
       Rover_y=Rover_y-10;
       console.log("when up arrow is pressed, x="+Rover_x+"y="+Rover_y);
       uploadbackground();
       uploadrover();
   }
}
function down()
{
    if(Rover_y<=500)
    {
        Rover_y=Rover_y+10;
        console.log("when down arrow is pressed,x="+Rover_x+"y="+Rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left()
{
    if(Rover_x>=0)
    {
        Rover_x=Rover_x-10;
        console.log("when left arrow is pressed,x="+Rover_x+"y="+Rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right()
{
    if(Rover_x<=700)
    {
        Rover_x=Rover_x+10;
        console.log("when right arrow is pressed,x="+Rover_x+"y="+Rover_y);
        uploadbackground();
        uploadrover();
    }
}

