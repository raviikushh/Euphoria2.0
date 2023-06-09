//initialize the variables
let SongIndex = 1;
let audioElement = new Audio('song1.mp3');
let MasterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('BottomProgressBar');
let gif = document.getElementById('Bgif');
let SongItems = Array.from(document.getElementsByClassName('items'))
let MasterSongName = document.getElementById('MasterSongName')
let Songs = [
    {SongName: "Shiv Samarahe ",     FilePath:"song1.mp3", CoverPath: "cover19.jpeg", SingerName:"Singer : Hansraj Raghuvanshi"},
    {SongName: "Lagi Lagan ",        FilePath:"song2.mp3", CoverPath: "cover20.jpeg", SingerName:"Singer : Hansraj Raghuvanshi"},
    {SongName: "Radhe Radhe",        FilePath:"song3.mp3", CoverPath: "cover21.jpeg", SingerName:"Singer : Hansraj Raghuvanshi"},
    {SongName: "Har Har Sambhu",     FilePath:"song4.mp3", CoverPath: "cover4.jfif", SingerName:"Singer: Jeetu and Abhilipsa"},
    {SongName: "Mera Bhola hai",     FilePath:"song5.mp3", CoverPath: "cover22.jpeg", SingerName:"Singer : Hansraj Raghuvanshi"},
    {SongName: "Ram Siya Ram",       FilePath:"song6.mp3", CoverPath: "cover23.jpeg", SingerName:"Singer : Scahet"},
    {SongName: "Mann Mera",          FilePath:"song7.mp3", CoverPath: "cover7.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "To Fir Aao ",        FilePath:"song8.mp3", CoverPath: "cover8.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "Gale Lag Ja",        FilePath:"song9.mp3", CoverPath: "cover9.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "Saajna X Aadat",     FilePath:"song10.mp3", CoverPath: "cover10.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "Uska Hi Bana",       FilePath:"song11.mp3", CoverPath: "cover11.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "Zara Zara",          FilePath:"song12.mp3", CoverPath: "cover12.jpg", SingerName:"Singer : Jalraj"},
    {SongName: "I Like You So Much", FilePath:"song13.mp3", CoverPath: "cover13.jpeg", SingerName:"Singer : Ysabelle "},
    {SongName: "Saari ki Saari",     FilePath:"song14.mp3", CoverPath: "cover14.jpeg", SingerName:"Singer : Darshan Raval"},
    {SongName: "Su Kare Che",        FilePath:"song15.mp3", CoverPath: "cover15.jpeg", SingerName:"Singer : Bilz and Kashif"},
    {SongName: "Afeemi",             FilePath:"song16.mp3", CoverPath: "cover16.jpeg", SingerName:"Singer : Sanah and Jigar"},
    {SongName: "shinunoga e-wa",     FilePath:"song17.mp3", CoverPath: "cover17.jpeg", SingerName:"Singer : Fujii Kaze"},
    {SongName: "Meet",               FilePath:"song18.mp3", CoverPath: "cover18.jpeg", SingerName:"Singer : Arijit Singh"},
    {SongName: "Punjabiyan Di Dhee", FilePath:"song19.mp3", CoverPath: "cover1.jpg", SingerName:"Singer: Guru Randhawa"},
    {SongName: "Mast Nazro Se",      FilePath:"song20.mp3", CoverPath: "cover2.jpg", SingerName:"Singer: Jubin Nautiyal "},
    {SongName: "Tu Hi Das De",       FilePath:"song21.mp3", CoverPath: "cover3.jpg", SingerName:"Singer: Simar and Mickey Singh"},
    {SongName: "Harleys In Hawai",   FilePath:"song22.mp3", CoverPath: "cover5.jpg", SingerName:"Singer : Katy Pery"},
    {SongName: "Closer",             FilePath:"song23.mp3", CoverPath: "cover6.jpg", SingerName:"Singer : The Chainsmokers"},
    {SongName: "Bepanah Ishq",       FilePath:"song24.mp3", CoverPath: "cover24.jpeg", SingerName:"Singer : Payal & Yasser"},
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
        audioElement.src=`song${SongIndex}.mp3`;
        MasterSongName.innerText = Songs[SongIndex-1].SongName;
        audioElement.play();
    }
    else if(progress==100 && SongIndex==24){
        SongIndex=1;
        audioElement.src=`song${SongIndex}.mp3`;
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
            audioElement.src=`song${SongIndex}.mp3`;
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
    audioElement.src=`song${SongIndex}.mp3`;
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
    audioElement.src=`song${SongIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    MasterPlay.classList.remove('fa-play-circle')
    MasterPlay.classList.add('fa-pause-circle')
    gif.style.opacity=1;
    MasterSongName.innerText = Songs[SongIndex-1].SongName;
    MasterSongName.style.opacity=1;
})

