// https://api.github.com/users/Nano-AI/repos

const readme_url = "https://raw.githubusercontent.com/Nano-AI/Nano-AI/master/README.md";

fetch(readme_url).then((response) => response.text())
    .then((text) => {
        var converter = new showdown.Converter(),
            html      = converter.makeHtml(text);
        $("#readme").append($(replaceAll(html, "src=\"./", "src=\"https://raw.githubusercontent.com/Nano-AI/Nano-AI/master/")));
    }).catch((error) => console.error(error));

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
