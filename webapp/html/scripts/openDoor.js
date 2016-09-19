webiopi().ready(function() {
        webiopi().setFunction(17,"out");
        down();

        var content, button;
        content = $("#content");

        button = webiopi().createButton("button", "Door", upAndDown);
        content.append(button);        		
        });

// Set the GPIO 17 up, wait 1sec, then set it down.
function upAndDown() {
        webiopi().digitalWrite(17, 1);
        console.log("and UP");
        setTimeout(down, 1000)
}

// Set the GPIO 17 down immediatly.
function down()
{
        console.log("and DOWN");
        webiopi().digitalWrite(17, 0);
}
