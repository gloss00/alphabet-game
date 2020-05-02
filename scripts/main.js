alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
words = ['Ambulance', 'Baloo', 'Caitlyn', 'Donald Duck', 'Elephant', 'Fire Engine', 'George', 'Hulk', 'Ironman', 'Josh', 'King', 'Lion', 'Mickey Mouse', 'Nemo', 'Olaf', 'Peppa Pig', 'Queen', 'Robert the Robot', 'Something Special', 'Thomas the Tank Engine', 'Umbrella', 'Vanellope', 'Woody', 'Xray', 'Yellow', 'Zebra']

//functions
let currentIndex = "";

nextScreen = () => {
if (currentIndex === ""){
    currentIndex = 0;
    render(currentIndex);

} else if (currentIndex === 25){
        home()
        currentIndex = 0;
        return;
    } else {
        currentIndex ++;
        render(currentIndex);
        return
    }
}

previousScreen = () => {
    if (currentIndex === 0 || currentIndex === "" ){
        home()
        currentIndex = "";
        return;
    } else {
        currentIndex --;
        render(currentIndex);
    };
}

home = () => {
    document.getElementById('image').src = "./images/main.jpg"
    document.getElementById('text').innerText = "The Alphabet Game";
    document.getElementById('player').pause();
}


render = (index) => {
    //image
    document.getElementById('image').src=`./images/${alphabet[index]}.png`
    //sound
    document.getElementById('player').src=`./sounds/${alphabet[index]}.mp3`
    document.getElementById('player').play()
    //text
    document.getElementById('text').innerText = words[index]
}



//event listeners
document.querySelector('.right').addEventListener('click', nextScreen);
document.querySelector('.left').addEventListener('click', previousScreen);
