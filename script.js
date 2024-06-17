document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById('content');
    const versions = ['version1', 'version2', 'version3'];
    const basePath = 'css/';

    versions.forEach(version => {
        const versionPath = `${basePath}${version}/README.md`;

        fetch(versionPath)
            .then(response => response.text())
            .then(markdown => {
                const htmlContent = marked.parse(markdown);
                const versionDiv = document.createElement('div');
                versionDiv.classList.add('version');
                versionDiv.innerHTML = `<h2>${version}</h2>${htmlContent}`;
                contentDiv.appendChild(versionDiv);

                const cssFiles = ['theme1.css', 'theme2.css'];
                cssFiles.forEach(cssFile => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = `${basePath}${version}/${cssFile}`;
                    document.head.appendChild(link);

                    const themeDiv = document.createElement('div');
                    themeDiv.classList.add('theme');
                    themeDiv.innerHTML = `<p>Theme: ${cssFile}</p>`;

                    // Add images
                    const img1 = document.createElement('img');
                    img1.src = `${basePath}${version}/images/theme1.jpg`;
                    img1.alt = 'Theme 1 Image';
                    themeDiv.appendChild(img1);

                    const img2 = document.createElement('img');
                    img2.src = `${basePath}${version}/images/theme2.jpg`;
                    img2.alt = 'Theme 2 Image';
                    themeDiv.appendChild(img2);

                    // Add videos (YouTube embed)
                    const videoDiv = document.createElement('div');
                    videoDiv.classList.add('video-container');
                    videoDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_HERE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    themeDiv.appendChild(videoDiv);

                    versionDiv.appendChild(themeDiv);
                });
            })
            .catch(error => console.error('Error fetching Markdown:', error));
    });
});
