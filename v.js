var menuicon=document.querySelector(".menuicon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container")
menuicon.onclick=function(){
    sidebar.classList.toggle("sidelists");
container.classList.toggle("containerl")
}

// Video URL mapping
const videoURLs = {
    1: "https://www.youtube.com/embed/KJwYBJMSbPI?si=unIQ6LjzmC1wxGPv",
    2: "https://www.youtube.com/embed/aBfJtTm_XD4?si=aAfDDfsd8wQsrcrO",
    3: "https://www.youtube.com/embed/8adtdg0N2-g?si=N1NMl5dISNoLNgvO",
    4: "https://www.youtube.com/embed/bDJKs6r___g?si=7IA6F1TjN2pc1G4E",
    5: "https://www.youtube.com/embed/5kozt0uDa4c?si=xtHqKBtjR7osheD6",
    6: "https://www.youtube.com/embed/qDvFdj-pFMc?si=brzbvHuibDp1g5f9",
    7: "https://www.youtube.com/embed/OPOxe-0NW0U?si=c6NMt3yRGk5QntwO",
    8: "https://www.youtube.com/embed/5vsOv_bcnhs?si=JaJ2LiOS216rN3ja",
    9: "https://www.youtube.com/embed/ZPGi2yBqdqw?si=_thKkFFUP-8c-5cf",
    10: "https://www.youtube.com/embed/dXIyMS61B68?si=zWhU6sOcX35u7rPM",
    11: "https://www.youtube.com/embed/MjIobmG3qqA?si=5tq0jq9dteBIAStf",
    12: "https://www.youtube.com/embed/tgVYh94QH8k?si=8SHyOPLnvILD-8mT",
    // Add up to 20 videos
};

// Extract video ID from URL
const urlParams = new URLSearchParams(window.location.search);
const videoId = parseInt(urlParams.get('video'), 10);

const videoFrame = document.getElementById('videoFrame');
const videoInfo = document.getElementById('videoInfo');

if (videoURLs[videoId]) {
    videoFrame.src = videoURLs[videoId];
    videoInfo.textContent = `Now playing: Video ${videoId}`;
} else {
    videoFrame.src = '';
    videoInfo.textContent = 'Invalid video selection.';
}