/**
 * recursive function
 * A function which calls itself but has an condition to stop other wise it will go into infinite loop.
 */

var counter = 25; 
function A () {
    console.log(`%cline number ${counter} `,`color=rgb(255,10,155)`);    
    counter--;
    if (counter >=10){
        A();
    }
}
A();