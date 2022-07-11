alert("Попробуй найти клад");
let size = 600;
let count_clicks = 0;
let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

let treasure = {
    x: getRandomNumber(size),
    y: getRandomNumber(size)
};
let mousePos = {
    x: 0,
    y: 0
};

document.querySelector(".map").onclick = function (e) {
    count_clicks++;
    mousePos.x = e.offsetX;
    mousePos.y = e.offsetY;
    let distByTreasure = getDistance();
    let text = messageForUSer(distByTreasure);
    $('.text__for__user').text(text);
    $('.count__clicks').text(`Кол-во попыток: ${count_clicks}`);
    
    

};
function getDistance() {
    let result = Math.sqrt(Math.pow(mousePos.x - treasure.x, 2) + Math.pow(mousePos.y - treasure.y, 2));
    return result;
}
function messageForUSer(distByTreasure) {
    if (distByTreasure <= 10) {
        alert(`Сегодня твой день. Купи лотерейный билет. Найдено за ${count_clicks} попыток`);
        window.location.reload();
        return;
    } else if (distByTreasure < 20) {
        return "Обожжешься";
    } else if (distByTreasure < 50) {
        return "Горячо.";
    } else if (distByTreasure < 90) {
        return "Ещё теплее."
    } else if (distByTreasure < 150) {
        return "Тепло.";
    } else if (distByTreasure < 200) {
        return "Так себе." ;
    } else if (distByTreasure < 250) {
        return "Холодно." ;
    } else if (distByTreasure < 350) {
        return "Очень холодно." ;
    } return "ОЧЕНЬ ОЧЕНЬ ХОЛОДНО!" 
};

