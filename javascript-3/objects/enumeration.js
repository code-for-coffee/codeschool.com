/**
 * Created by codeforcoffee on 3/31/14.
 */
var numFish = 0;
for (key in aquarium) {
    console.log(key);
    if (aquarium[key].type == "fish") {
        numFish++;
    }
}