const doors = [];
let state="PICK";
let pickedDoor,revealedDoor,switchButton ,stayButton;



function setup(){
    noCanvas();


for(let i=0;i<3;i++){
    doors[i]=createDiv("");
    doors[i].parent('#doors')
    doors[i].class('door');   
    doors[i].prize='🐐';
    doors[i].index=i; 
    doors[i].mousePressed(pickDoor);
}

  switchButton=createButton('switch');
  switchButton.mousePressed(playerSwitch);
  switchButton.hide();

  stayButton=createButton('stay');
  stayButton.mousePressed(checkWin);
  stayButton.hide();

 

  let winningDoor =random(doors);
  winningDoor.prize='🚗';
 
}

function pickDoor(){
    if(state == 'PICK'){
    state='REVEAL';
    this.style('background-color','#AAF');
    pickedDoor=this;
    reveal();
    }

}

function reveal(){

    const options=[];
    for(let i=0;i<doors.length;i++){
        const door=doors[i];
        if(i!==pickedDoor.index && doors[i].prize!=='🚗')
        {
            options.push(door);
        }

    }

    revealedDoor=random(options);
    revealedDoor.html(revealedDoor.prize);
    switchButton.show();
    stayButton.show();
}

function playerSwitch(){

    let newPick;
    for(let i=0;i<doors.length;i++){
        let  door=doors[i];
        if(door !==pickedDoor && door!==revealedDoor)
        {
            newPick=door;
            break;
        }

    }
    pickedDoor=newPick;
    checkWin();
}

function checkWin(){
    switchButton.hide();
    stayButton.hide();
    for(let door of doors){
        door.html(door.prize);
        door.style('background-color','#AAA');

    }
  
    if(pickedDoor.prize==  '🚗'){
        createP("You Win!");
        pickedDoor.style('background-color','#AFA');
    }else{
        createP("You Lose!");
        pickedDoor.style('background-color','#FAA');
    }

   
    
}

