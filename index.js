
let mouseX = 0;
let mouseY = 0;

const star = document.querySelector(".starSvg");
let rotationAngle = 0; 


document.addEventListener("mousemove", (event) => {

  mouseX = event.clientX;
  mouseY = event.clientY;

  rotationAngle += 2;
  star.style.transform = `rotate(${rotationAngle}deg)`;
})

const circles = document.querySelectorAll(".circles");


circles.forEach((circle) => {
  circle.x = 0;
  circle.y = 0;
})

const moveCursor = () => {

  let x = mouseX;
  let y = mouseY;

  circles.forEach((circle, index) => {
    circle.style.left = (x + 10) + 'px';  
    circle.style.top = (y + 40) + 'px';

    // circle.style.scale = circles.length - index) / circles.length;
    circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;


  })
  requestAnimationFrame(moveCursor);
}

requestAnimationFrame(moveCursor);

const githubButton = document.querySelector(".githubButton");

githubButton.addEventListener("click", () => {
  window.open('https://github.com/pandeyronak13', '_blank');
})
