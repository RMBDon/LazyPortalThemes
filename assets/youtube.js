// youtube.js
document.addEventListener("DOMContentLoaded", function() {
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        const videoId = container.dataset.videoId;
        if (videoId) {
            const iframe = document.createElement('iframe');
            iframe.width = '560';
            iframe.height = '315';
            iframe.src = `https://www.youtube.com/embed/0eIsjmw41Ww`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            container.appendChild(iframe);
        }
    });
});
