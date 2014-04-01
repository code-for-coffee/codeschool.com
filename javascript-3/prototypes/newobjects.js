/**
 * Created by codeforcoffee on 3/31/14.
 */

function Shoe (shoeSize, shoeColor, forGender, constructStyle) {
    this.size = shoeSize;
    this.color = shoeColor;
    this.gender = forGender;
    this.construction = constructStyle;

    //this.putOn = function() { };
    //this.takeOff = function() {};
}

var beachShoe = new Shoe(10, "blue", "men", "sandal");

Shoe.prototype = {
    putOn: function() { },
    takeOff: function() {}
};


var genericPost =
{x: 0, y: 0, postNum: undefined,
    connectionsTo: undefined,
    sendRopeTo: function ( connectedPost ) {
        if(this.connectionsTo == undefined){
            var postArray = [ ];
            postArray.push(connectedPost);
            this.connectionsTo = postArray;
        } else {
            this.connectionsTo.push(connectedPost);
        }
    }
};
var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);
post1.x = -2;
post1.y = 4;
post1.postNum = 1;
post2.x = 5;
post2.y = 1;
post2.postNum = 2;
post1.sendRopeTo(post2);
post2.sendRopeTo(post1);
