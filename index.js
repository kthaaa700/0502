// document는 브라우저에서 렌더링
const title = document.querySelector("#title");

const BASE_COLOR = "black";
const OTHER_COLOR = "red";

const handleClick = () => {
    const currentColor=title.style.color;
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
    
}

const init = () => {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

// if use handResize() is execute right now.
title.addEventListener("click", handleClick);
