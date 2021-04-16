document.addEventListener("DOMContentLoaded", () => {

    const counter = document.getElementById("counter");
    
    const minus = document.getElementById("minus");
    minus.addEventListener("click", minusTime);

    const plus = document.getElementById("plus");
    plus.addEventListener("click", plusTime);

    const pause = document.getElementById("pause");
    pause.addEventListener("click", pauseTime);

    const heart = document.getElementById("heart");
    heart.addEventListener("click", heartLike);

    const commentForm = document.getElementById("comment-form");
    commentForm.addEventListener("submit", addNewComment)
    
    
});
var toggle = true;
function pauseTime()
{
    toggle = !toggle;
    updateButtons();

}
function updateButtons()
{
    if (toggle)
    {
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
    }
    else 
    {
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        pause.innerHTML = "resume";
    }
}

setInterval(addTimer, 1000);
var currentTime = 0;
function addTimer()
{  
    if (toggle)
    {
        currentTime = currentTime + 1;
        counter.innerHTML = currentTime;
    }
    else
    {
        return;
    }
}

function minusTime()
{
    currentTime = currentTime - 1;
    counter.innerHTML = currentTime;
}

function plusTime()
{
    currentTime = currentTime + 1;
    counter.innerHTML = currentTime;
}

function heartLike()
{
    // var newLike = document.createElement("ul");
    // newLike.innerText = "I like this";
    // const likes = document.querySelector("likes");
    // likes.appendChild(newLike);
    var newHeartMsg = `I ❤️ this time: ${currentTime}`;
    var newHeartLine = document.createElement("li")
    newHeartLine.innerText = newHeartMsg;
    appendNewHeart(newHeartLine);
}
function appendNewHeart(heart)
{
    const heartLine = document.getElementById("hearts")
    heartLine.appendChild(heart);
}


function addNewComment(event)
{   
    event.preventDefault();
    var newCommentValue = document.getElementById("comment-input").value;
    var newCommentLine = document.createElement("li")
    newCommentLine.innerText = newCommentValue;
    
    appendNewComment(newCommentLine);
}

function appendNewComment(comment)
{
    const commentLine = document.getElementById("list")
    commentLine.appendChild(comment);
}

