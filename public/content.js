setTimeout(function(){
    const shortsContainer = document.getElementById("shorts-inner-container");
console.log(shortsContainer);
if (shortsContainer) {
  shortsContainer.classList.add("remove-overlay");
  const style = document.createElement("style");
  style.id = "remove-overlay";
  style.innerHTML = `
    .remove-overlay {
    .overlay.ytd-reel-video-renderer{
    opacity: 0 !important;
    }
    }
    `;
  document.head.appendChild(style);
}
}, 500)
