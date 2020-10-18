document.addEventListener("DOMContentLoaded", () => {
    var isJump=false;
    document.addEventListener("keyup", (e) => {
        
        if(e.key == "ArrowUp"){
            
            if(isJump==false){
                isJump=true;
                dinoJump();
            
            }
        }
    });
    
    var gameEnd = document.getElementById("gameEnd");
    var gameStarts = document.getElementById("gameStart");
   
    const dino = document.getElementById("dino");
    let position = 0;
   
    const cactus = document.getElementById("cactus");
    var cactusPosition;
    var score=0;
    document.getElementById("score").innerHTML=score;
    var cactusMoving;
    var cactusMoveIntervalId;
    gameStarts.onclick = function gameStart(){
        gameEnd.style.display="none";
        cactusPosition=1000;
        score = 0;
   
        document.getElementById("score").innerHTML=score;
        cactusMoving=true;
        cactusMove();
    }
   
    function cactusMove(){
        if(cactusMoving==true){
        cactusMoveIntervalId = setInterval(() => {
        cactusPosition -=10;
        cactus.style.left = cactusPosition + 'px';
        
        if((position<=60) && (cactusPosition<=50)) {
            gameOver();
        };
        if(cactusPosition==0){
            clearInterval(cactusMoveIntervalId);
            cactusPosition=1000;
            cactusMove(cactusMoving);
        }

    },20);
}
}
    function gameOver(){        
        clearInterval(cactusMoveIntervalId);
        
        gameEnd.style.display="block";
        cactusMoving = false;
    }
    function dinoJump(){

        let count = 0;
        let dinoUpIntervalId = setInterval(() => {
            if(count == 15) {
                
                clearInterval(dinoUpIntervalId);
            
            let dinoDownIntervalId = setInterval(() => {
                if(count == 1) {
                    isJump=false;
                    clearInterval(dinoDownIntervalId);
                }
                    console.log(position);
                    count--;
                    position -= 10;
                    dino.style.bottom = position + 'px';            
            }, 40);
        }
            console.log(position);
            count++;
            position = position + 10;
            dino.style.bottom = position + 'px';
            console.log(cactusPosition);
            if(cactusPosition==10 && position>=60){
                score=score+50;
                document.getElementById("score").innerHTML=score;
            }
        }, 20);
    }
        
     
});