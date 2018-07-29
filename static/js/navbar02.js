

function addLink(id, url) {
    $(`#${id}`).click(function () {
        window.location.href = url;
    })
}


$(document).ready(function () {
    addLink("news", "/hu/news");
    addLink("main", "/");
    /*addLink("supporter", "#");*/
    addLink("partners", "/hu/partners");
    addLink("programs", "/hu/programs");
    addLink("tenders", "/hu/tenders");
    addLink("supporters", "/hu/supporters");
    /*addLink("dots", "#");*/
    /*addLink("hun_language", "#");*/
    /*addLink("eng_language", "#");*/
});