console.log("Welcome to Spotify");

let MasterSongName = document.getElementById('MasterSongName');

let AudioElement = new Audio('Songs/3.mp3');
let MasterPlay = document.getElementById('MasterPlay');
let gif = document.getElementById('gif');

let MyProgressBar = document.getElementById('MyProgressBar');

let Songs = [
    { SongName: "Light Switch - Charlie Puth", FilePath: "Songs/1.mp3", CoverPath: "Covers/1.jpg" },
    { SongName: "Beautiful People - Ed Sheeran", FilePath: "Songs/2.mp3", CoverPath: "Covers/2.jpg" },
    { SongName: "Left And Right - Charlie Puth,Jung Kook", FilePath: "Songs/3.mp3", CoverPath: "Covers/3.jpg" },
    { SongName: "Night Changes - One Direction", FilePath: "Songs/4.mp3", CoverPath: "Covers/4.jpg" },
    { SongName: "That's What I Want - Lil Nas X", FilePath: "Songs/5.mp3", CoverPath: "Covers/5.jpg" },
    { SongName: "You, Me and Steve - Garfunkel, Oates", FilePath: "Songs/6.mp3", CoverPath: "Covers/6.jpg" },
    { SongName: "As It Was - Harry Styles", FilePath: "Songs/7.mp3", CoverPath: "Covers/7.jpg" },
]

let SongItem = Array.from(document.getElementsByClassName('SongItem'));
let SongIndex = 0;
let SongItemPlay = Array.from(document.getElementsByClassName('SongItemPlay'));

//Playing the Selected song from the list 

const MakeAllPlays = () => {

    SongItemPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

SongItemPlay.forEach((element) => {

    element.addEventListener('click', (e) => {
        MakeAllPlays();
        SongIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        AudioElement.src = `Songs/${SongIndex}.mp3`;
        MasterSongName.innerText = Songs[SongIndex-1].SongName;
        AudioElement.currentTime = 0;
        AudioElement.play();
        gif.style.opacity = 1;

        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
    });

});



//Handling of Play/Pause Click 

MasterPlay.addEventListener('click', () => {

    if (AudioElement.paused || AudioElement.currentTime <= 0) {
        AudioElement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        AudioElement.pause();
        MasterPlay.classList.add('fa-circle-play');
        MasterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
});

//Handling of Progress Bar

AudioElement.addEventListener('timeupdate', () => {
    //Update Seek Bar 
    let Progress = parseInt((AudioElement.currentTime / AudioElement.duration) * 100);
    MyProgressBar.value = Progress;
});

MyProgressBar.addEventListener('change', () => {
    //Update audio acc. to Seekbar
    AudioElement.currentTime = (MyProgressBar.value * AudioElement.duration) / 100;
});

let Previous = document.getElementById('Previous');
let Next = document.getElementById('Next');

Previous.addEventListener('click', () => {
    if (SongIndex <= 1) {
        SongIndex = 1;
    }
    else {
        SongIndex -= 1;
    }

    MakeAllPlays();
    AudioElement.src = `Songs/${SongIndex}.mp3`;
    MasterSongName.innerText = Songs[SongIndex-1].SongName;
    AudioElement.currentTime = 0;
    AudioElement.play();
    gif.style.opacity = 1;

    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');
})

Next.addEventListener('click', () => {
    if (SongIndex >= 7) {
        SongIndex = 1;
    }
    else {
        SongIndex += 1;
    }

    MakeAllPlays();
    AudioElement.src = `Songs/${SongIndex}.mp3`;
    MasterSongName.innerText = Songs[SongIndex-1].SongName;
    AudioElement.currentTime = 0;
    AudioElement.play();
    gif.style.opacity = 1;

    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');
})