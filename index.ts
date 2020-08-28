// Import stylesheets
import './css/style.css';

class StartScreen{

constructor(){
  this.playBackGroundMusic();
  this.setTitle();
  this.startScreenCanvas();
}

private playBackGroundMusic(){
  let audioElement = new Audio('http://prmhub.com/downloads/mp3s/01_-_Mighty_Morphin_Power_Rangers/11.Ron.Wasserman.Go,Go.Power.Rangers.TV-[RAW][8EB406D7].mp3');
  audioElement.play();

}

private setTitle():void {
  const el: HTMLElement = document.getElementById('TitleHeader');
  el.append("Hien Ngo Shooting Star");
}

private startScreenCanvas():void {
  let canvas = document.createElement('canvas');


    let body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);

   var ctx = canvas.getContext("2d");
    ctx.fillRect(20, 20, 20, 20);
    ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
    ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
    ctx.fillRect(30, 30, 30, 30);
    ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
    ctx.fillRect(30, 30, 50, -20);
}


}

let startScreen = new StartScreen();