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

fetch(repos_url).then((response) => response.json())
    .then((data) => {
        data.forEach((object) => {
//             const $object = $(`
//                 <div class="card" style="width: 18rem; margin-right: 1rem !important; margin-bottom: 1rem !important;">
//                   <div class="card-body">
//                     <h5 class="card-title"><a href="${object.html_url}">${object.name}</a></h5>
//                     ${(language_colors[object.language]) !== undefined ?
//                         `<p class="card-text"><span class="dot ${language_colors[object.language]}"></span> ${object.language}</p>`
//                         : ''}
//                     <p class="card-text">${(object.description != null) ? object.description : "<i>No description given.</i>"}</p>
// <!--                    <a href="#" class="btn btn-primary">View on GitHub</a>-->
//                   </div>
//                 </div>
//             `);
            const $item = $(`
                <div class="" style="margin-right: 1rem !important; margin-bottom: 1rem !important;">
                    <a href="${object.html_url}"><img src="https://github-readme-stats.vercel.app/api/pin/?username=${object.owner.login}&repo=${object.name}"></a>
                </div>
            `);

            $("#projects").append($item);
            // console.log(object)
            // console.log(`${object.name} ${object.url} ${object.description} ${object.language}`);
        });
    }).catch((error) => console.error(error));
