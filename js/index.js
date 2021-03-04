const pinned_repos_url = "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=Nano-AI";

var pinned_repos;

$.ajax({
    url: pinned_repos_url,
    async: false,
    dataType: 'json',
    success: function (response) {
        pinned_repos = response;
    }
});

document.getElementById("darkSwitch").addEventListener("change", function(event) {
    update_repos(false);
});

function update_repos(first) {
    if (!first)
        $("#projects").empty();
    var darkmode = localStorage.getItem("darkSwitch") === "dark";
    pinned_repos.forEach(object => {
        const $item = $(`
                <div class="" style="margin-right: 1rem !important; margin-bottom: 1rem !important;">
                    <a target="_blank" href="${object.link}"><img src="https://github-readme-stats.vercel.app/api/pin/?username=${object.owner}&repo=${object.repo}${darkmode ? "&theme=dark" : ""}"></a>
                </div>
            `);
        $("#projects").append($item);
    });
}

update_repos(true);
