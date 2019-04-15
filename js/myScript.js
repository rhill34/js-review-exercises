function js2()
{
    for(i = 0; i<100; i++)
    {
        if( (i % 3 == 0) && (i % 5 == 0))
        {

            console.log("Hee-Haw!");
        }
        else if(i % 3 == 0)
        {
            console.log("Hee!");
        }
        else if(i % 5 == 0)
        {
            console.log("Haw!");
        }
        else
        {
            console.log(i);

        }
    }
}

/**
 * This is the js review part 3
 */
function js3()
{
    var x, text, y;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 100) {
        text = "Input not valid";
    } else {
        text = "Input OK";

        for(var i = 0; i <= x; i++)
        {
            if( (i % 3 == 0) && (i % 5 == 0))
            {

                console.log("Hee-Haw!");
                document.writeln("Hee-Haw!");
                //document.getElementById("assert").innerHTML = "Hee-Haw!";
            }
            else if(i % 3 == 0)
            {
                console.log("Hee!");
                document.writeln("Hee!");
                // document.getElementById("assert").innerHTML = "Hee!";
            }
            else if(i % 5 == 0)
            {
                console.log("Haw!");
                document.writeln("Haw!");
                // document.getElementById("assert").innerHTML = "Haw!";
            }
            else
            {
                console.log(i);
                document.writeln(i +"\r");
                //document.getElementById("assert").innerHTML = i;

            }
        }
    }
    //loop to go over the input amount with the statements from the JS2 review question


    //Display the status of input
    document.getElementById("demo").innerHTML = text;
    //document.getElementById("assert").innerHTML = y;
}

/**
 * This is the js review part 3 with recursion
 * No overloading in JS
 */
function js3Recursive()
{
    var x,text;
    x= document.getElementById("numb1").value;

    if (isNaN(x) || x < 1 || x > 100) {
        text = "Input not valid";
    } else {
        text = "Input OK";
        js3Recurs(x);
    }
        document.getElementById("assert").innerHTML = text;
}

/**
 *
 * @param x
 * @returns number
 * */
function js3Recurs(x)
{
    if (x <= 1)
    {
        document.writeln(x);
    } else if( x % 3 == 0) {
        document.writeln("Hee!");
        return js3Recurs(x - 1);
    } else if (x%5==0){
        document.writeln("Haw!");
        return js3Recurs(x - 1);
    } else if ((x%3==0) && (x%5==0)){
        document.writeln("Hee-Haw!");
        return js3Recurs(x - 1);
    }else {
        document.writeln(x);
        return js3Recurs(x - 1);
    }
}