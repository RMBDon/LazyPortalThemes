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
                    versionDiv.appendChild(themeDiv);
                });
            })
            .catch(error => console.error('Error fetching Markdown:', error));
    });
});
