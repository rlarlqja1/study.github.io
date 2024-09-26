// 시간
var Target = document.getElementById("clock");
function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();

    Target.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}
clock();
setInterval(clock, 1000);


// 모달창
var m_open = document.querySelectorAll('.left_text');
var btnPopClose = document.querySelectorAll('.modal .close_btn');
var m_openID;


for(var i = 0; i < m_open.length; i++){
    m_open[i].addEventListener('click', function(){
        m_openID = this.getAttribute('href');
        document.querySelector(m_openID).style.display = 'block';
    });
}


for(var j = 0; j < m_open.length; j++){
    btnPopClose[j].addEventListener('click', function(){
        this.parentNode.parentNode.style.display = 'none';
    });
}

