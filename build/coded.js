console.log('Hi')
const userDataFromFile = require('./../data.json');


for (let i=0;i<4;i++){
    console.log(`cat-${i}-name`)
    document.getElementById(`cat-${i}-name`).innerHTML = userDataFromFile[i].category
    document.getElementById(`cat-${i}-score`).innerHTML = userDataFromFile[i].score
    document.getElementById(`cat-${i}-icon`).src = userDataFromFile[i].icon
}
