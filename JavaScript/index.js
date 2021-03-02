const pinned_repos_url = "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=Nano-AI";

fetch(pinned_repos_url).then(response => response.json())
    .then(repos => {
        repos.forEach(object => {
            console.log(object)
            const $item = $(`
                <div class="" style="margin-right: 1rem !important; margin-bottom: 1rem !important;">
                    <a target="_blank" href="${object.link}"><img src="https://github-readme-stats.vercel.app/api/pin/?username=${object.owner}&repo=${object.repo}"></a>
                </div>
            `);
            $("#projects").append($item);
        })
    }).catch((error) => console.error(error));
