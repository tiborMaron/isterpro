function addFlagListener() {
    $(".flag-img").click(function (event) {
        let targetFlag = event.target.id;
        $(".flag-img").removeClass("flag-active");
        $(`#${targetFlag}`).addClass("flag-active");

    })
}

$(document).ready(function () {
    addFlagListener()
})

