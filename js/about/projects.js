// https://api.github.com/users/Nano-AI/repos

const repos_url = "https://api.github.com/users/Nano-AI/repos";

const language_colors = {
    "Java": "brown",
    "Python": "blue",
    "JavaScript": "yellow",
    "HTML": "orangered",
    "C++": "pink",
    "C": "gray"
};

var repos;

$.ajax({
    url: repos_url,
    async: false,
    dataType: 'json',
    success: function(reponse) {
        repos = reponse;
    }
});

document.getElementById("darkSwitch").addEventListener("change", function(event) {
    update_repos(false);
});

function update_repos(first) {
    if (!first)
        $("#projects").empty();
    repos.forEach((object) => {
        var darkmode = localStorage.getItem("darkSwitch") === "dark";
        const $item = $(`
                <div class="" style="margin-right: 1rem !important; margin-bottom: 1rem !important;">
                    <a target="_blank" href="${object.html_url}"><img src="https://github-readme-stats.vercel.app/api/pin/?username=${object.owner.login}&repo=${object.name}${darkmode ? "&theme=dark" : ""}"></a>
                </div>
            `);

        $("#projects").append($item);
    });
}

update_repos(true);

