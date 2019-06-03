
module.exports=class Game{
   
    constructor(){
        this.score=0;
        this.balls=[];
    }

    role(pin){
        this.balls.push(pin);

    }

    result(){

        for (let i =0;i<this.balls.length;i+=2){
            // a spare 
            if(this.balls[i]+this.balls[i+1]==10)
            {
                if(this.balls[i+2])
                    this.score+=this.balls[i+2];
            }

            // a strike
            if(this.balls[i]==10)
                {
                    if(this.balls[i+1])
                        this.score+=this.balls[i+1];
                    if(this.balls[i+2])
                        this.score+=this.balls[i+2];
                }

            if(this.balls[i])
                this.score+=this.balls[i];
            if(this.balls[i+1])
                this.score+=this.balls[i+1];
        }
        return this.score;
    }
}