class Buttons{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("virtual pet");
        title.position(130,10);
        var button = createButton("Feed");
        button.position(250,200);
        button.mousePressed(feedDog);
         
    }
}