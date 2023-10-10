// animation.js 파일
export function startAnimation() {
    const blocks = document.querySelectorAll(".animated-block");
  
    blocks.forEach(function(block, index) {
      block.style.transition = "transform 1s, opacity 1s";
      block.style.transform = "translateY(100px)";
      block.style.opacity = "0";
  
      function animateBlock() {
        block.style.transform = "translateY(0)";
        block.style.opacity = "1";
  
        setTimeout(function() {
          block.style.transform = "translateY(-100px)";
          block.style.opacity = "0";
  
          setTimeout(function() {
            block.style.transform = "translateY(100px)";
            block.style.opacity = "0";
  
            setTimeout(animateBlock, 1000);
          }, 1000);
        }, 5000);
      }
  
      setTimeout(animateBlock, index * 200);
    });
  }