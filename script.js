//initialize the variables
let SongIndex = 1;
let audioElement = new Audio('song/song1.mp3');
let MasterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('BottomProgressBar');
let gif = document.getElementById('Bgif');
let SongItems = Array.from(document.getElementsByClassName('items'))
let MasterSongName = document.getElementById('MasterSongName')
let Songs = [
    {SongName: "Shiv Samarahe ",     FilePath:"Song/song1.mp3", CoverPath: "Cover/cover1.jpg", SingerName:"Singer : Hansraj Raghuvanshi"},
    {SongName: "Lagi Lagan ",        FilePath:"Song/song2.mp3", CoverPath: "Cover/cover2.jpg", SingerName:"Singer : Hansraj Raghuvanshi"},
    {SongName: "Radhe Radhe",        FilePath:"Song/song3.mp3", CoverPath: "Cover/cover3.jpg", SingerName:"Singer : Hansraj Raghuvanshi"},
    {SongName: "Har Har Sambhu",     FilePath:"Song/song4.mp3", CoverPath: "Cover/cover4.jfif", SingerName:"Singer: Jeetu and Abhilipsa"},
    {SongName: "Mera Bhola hai",     FilePath:"Song/song5.mp3", CoverPath: "Cover/cover5.jpg", SingerName:"Singer : Hansraj Raghuvanshi"},
    {SongName: "Ram Siya Ram",       FilePath:"Song/song6.mp3", CoverPath: "Cover/cover6.jpg", SingerName:"Singer : Scahet"},
    {SongName: "Mann Mera",          FilePath:"Song/song7.mp3", CoverPath: "Cover/cover7.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "To Fir Aao ",        FilePath:"Song/song8.mp3", CoverPath: "Cover/cover8.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "Gale Lag Ja",        FilePath:"Song/song9.mp3", CoverPath: "Cover/cover9.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "Saajna X Aadat",     FilePath:"Song/song10.mp3", CoverPath: "Cover/cover10.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "Uska Hi Bana",       FilePath:"Song/song11.mp3", CoverPath: "Cover/cover11.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "Zara Zara",          FilePath:"Song/song12.mp3", CoverPath: "Cover/cover12.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "Dilawara",           FilePath:"Song/song13.mp3", CoverPath: "Cover/cover13.jpg", SingerName:"Singer : The PropheC "},
    {SongName: "Saari ki Saari",     FilePath:"Song/song14.mp3", CoverPath: "Cover/cover14.jpg", SingerName:"Singer : Darshan Raval .."},
    {SongName: "9:45       ",        FilePath:"Song/song15.mp3", CoverPath: "Cover/cover15.jpg", SingerName:"Singer : Prabh & Jay Trak"},
    {SongName: "Afeemi",             FilePath:"Song/song16.mp3", CoverPath: "Cover/cover16.jpg", SingerName:"Singer : Sanah and Jigar"},
    {SongName: "Mi Amor       ",     FilePath:"Song/song17.mp3", CoverPath: "Cover/cover17.jpg", SingerName:"Singer : Sharn"},
    {SongName: "Meet",               FilePath:"Song/song18.mp3", CoverPath: "Cover/cover18.jpg", SingerName:"Singer : Arijit Singh .."},
    {SongName: "Punjabiyan Di Dhee", FilePath:"Song/song19.mp3", CoverPath: "Cover/cover19.jpg", SingerName:"Singer: Guru Randhawa"},
    {SongName: "Mast Nazro Se",      FilePath:"Song/song20.mp3", CoverPath: "Cover/cover20.jpg", SingerName:"Singer: Jubin Nautiyal .."},
    {SongName: "Tu Hi Das De",       FilePath:"Song/song21.mp3", CoverPath: "Cover/cover21.jpg", SingerName:"Singer: Simar and Mickey Singh"},
    {SongName: "Harleys In Hawai",   FilePath:"Song/song22.mp3", CoverPath: "Cover/cover22.jpg", SingerName:"Singer : Katy Pery"},
    {SongName: "Closer",             FilePath:"Song/song23.mp3", CoverPath: "Cover/cover23.jpg", SingerName:"Singer : The Chainsmokers"},
    {SongName: "Ishq De  Fanniyar",  FilePath:"Song/song24.mp3", CoverPath: "Cover/cover24.jpg", SingerName:"Singer : Jyotica"},
];

SongItems.forEach((e,i)=>{
    e.getElementsByTagName("img")[0].src = Songs[i].CoverPath;
    e.getElementsByClassName("SongName")[0].innerText = Songs[i].SongName;
    e.getElementsByClassName('singername')[0].innerText = Songs[i].SingerName;
})


//Handle Play/pause click
MasterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle')
        MasterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
        MasterSongName.style.opacity=1;
    }
    else{
        audioElement.pause();
        MasterPlay.classList.add('fa-play-circle')
        MasterPlay.classList.remove('fa-pause-circle')
        gif.style.opacity=0;
        MasterSongName.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    myProgressBar.value = progress;
    if(progress==100 && SongIndex<24){
        SongIndex+=1;
        audioElement.src=`Song/song${SongIndex}.mp3`;
        MasterSongName.innerText = Songs[SongIndex-1].SongName;
        audioElement.play();
    }
    else if(progress==100 && SongIndex==24){
        SongIndex=1;
        audioElement.src=`Song/song${SongIndex}.mp3`;
        MasterSongName.innerText = Songs[SongIndex-1].SongName;
        audioElement.play();
    }
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('Cplay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle')
            element.classList.add('fa-play-circle')
        })

}

const PlayCards = ()=>{
    Array.from(document.getElementsByClassName('Cplay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();
            SongIndex = parseInt(e.target.id);
            audioElement.src=`Song/song${SongIndex}.mp3`;
            MasterSongName.innerText = Songs[SongIndex-1].SongName;
            MasterSongName.style.opacity=1;
            audioElement.currentTime=0;
            if(audioElement.paused || audioElement.currentTime<=0){
                e.target.classList.remove('fa-play-circle')
                e.target.classList.add('fa-pause-circle')
                audioElement.play();
                MasterPlay.classList.remove('fa-play-circle')
                MasterPlay.classList.add('fa-pause-circle')
                gif.style.opacity=1;
                MasterSongName.innerText = Songs[SongIndex-1].SongName;
                MasterSongName.style.opacity=1;
            }
            else{
                e.target.classList.add('fa-play-circle')
                e.target.classList.remove('fa-pause-circle')
                audioElement.pause();
                MasterPlay.classList.add('fa-play-circle')
                MasterPlay.classList.remove('fa-pause-circle')
                gif.style.opacity=0;
                MasterSongName.style.opacity=0;
            }
        })
    })
}

PlayCards();
//Next
document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex==24)
    SongIndex=1;
    // else if(SongIndex==0)SongIndex+=2;
    else SongIndex+=1;
    audioElement.src=`Song/song${SongIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    MasterPlay.classList.remove('fa-play-circle')
    MasterPlay.classList.add('fa-pause-circle')
    gif.style.opacity=1;
    MasterSongName.innerText = Songs[SongIndex-1].SongName;
    MasterSongName.style.opacity=1;
})

//Previous
document.getElementById('previous').addEventListener('click',()=>{
    if(SongIndex>1)
    SongIndex-=1;
    else SongIndex=24;
    audioElement.src=`Song/song${SongIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    MasterPlay.classList.remove('fa-play-circle')
    MasterPlay.classList.add('fa-pause-circle')
    gif.style.opacity=1;
    MasterSongName.innerText = Songs[SongIndex-1].SongName;
    MasterSongName.style.opacity=1;
})

//  ---------------------- Add Dark Theme --------------------------------

document.getElementById("moon").addEventListener("click",()=>{
        document.body.classList.toggle("dark-theme")
        let icon = document.getElementById("moon");
        if(document.body.classList.contains("dark-theme")){
            icon.src="/Extras/sun.png"
        }
        else{
            icon.src="/Extras/moon.png"
        }
});

document.getElementById("ref").addEventListener("click",()=>{
    window.location.reload();
});