function myfunc(){
    let rnum = Math.floor(Math.random() * 9);

    switch(rnum){
        case(0):case(7):case(4):
        result = "rock";
        break;
        case(1):case(3):case(8):
        result = "paper";;
        break;
        case(2):case(5):case(6):
        result = "scissor";
        break

    }
   return result;

}


function toNum(input){
    console.log(input)
    switch(input){
        case("rock"):
        num = 0;
        break;
        case("scissor"):
        num = 1;
        break;
        case("paper"):
        num = 2;
        break;
    }
    return num; 
}


var arrays = {};
for(let n=0; n<100000; n++){
    let choice = myfunc(); 
    if(!arrays[choice]){
        arrays[choice] = 0;
    }
    arrays[choice] ++;
}
console.log(arrays);