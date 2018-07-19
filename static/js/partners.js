// Called when the Visualization API is loaded.
function draw() {

    // create nodes with images
    let DIR = '/static/images/partners/';
    let nodes = [
        // Base
        {id: 0, shape: 'circularImage', borderWidth: 0, image: DIR + 'logo.png'},
        {id: 1, shape: 'circularImage', image: DIR + 'media.png'},
        {id: 2, shape: 'circularImage', image: DIR + 'maganszemelyek.png'},
        {id: 3, shape: 'circularImage', image: DIR + 'nonprofit.png'},
        {id: 4, shape: 'circularImage', image: DIR + 'cegek.png'},
        // Red
        {id: 5, shape: 'circularImage', image: DIR + 'partnerek.png'},
        {id: 6, shape: 'circularImage', image: DIR + 'tamogatok.png'},
        // Blue
        {id: 7, shape: 'circularImage', image: DIR + 'internet.png'},
        {id: 8, shape: 'circularImage', image: DIR + 'tv.png'},
        {id: 9, shape: 'circularImage', image: DIR + 'radio.png'},
        {id: 10, shape: 'circularImage', image: DIR + 'sajto.png'},
        // Green
        {id: 11, shape: 'circularImage', image: DIR + 'sportszervezetek.png'},
        {id: 12, shape: 'circularImage', image: DIR + 'civil.png'},
        {id: 13, shape: 'circularImage', image: DIR + 'alapitvanyok.png'},
        {id: 14, shape: 'circularImage', image: DIR + 'egyesuletek.png'},
        // Yellow base
        {id: 15, shape: 'circularImage', image: DIR + 'hiressegek.png'},
        {id: 16, shape: 'circularImage', image: DIR + 'politikusok.png'},
        // Yellow
        {id: 17, shape: 'circularImage', image: DIR + 'muveszek.png'},
        {id: 18, shape: 'circularImage', image: DIR + 'sportolok.png'},
        {id: 19, shape: 'circularImage', image: DIR + 'epkepviselok.png'},
        {id: 20, shape: 'circularImage', image: DIR + 'ogykepviselok.png'},
        {id: 21, shape: 'circularImage', image: DIR + 'okkepviselok.png'},
    ];

    // create connections
    let edges = [
        // Base
        {from: 0, to: 1},
        {from: 0, to: 2},
        {from: 0, to: 3},
        {from: 0, to: 4},
        // Red
        {from: 4, to: 5},
        {from: 4, to: 6},
        // Blue
        {from: 1, to: 7},
        {from: 1, to: 8},
        {from: 1, to: 9},
        {from: 1, to: 10},
        // Green
        {from: 3, to: 11},
        {from: 3, to: 12},
        {from: 3, to: 13},
        {from: 3, to: 14},
        // Yellow base
        {from: 2, to: 15},
        {from: 2, to: 16},
        // Yellow
        {from: 15, to: 17},
        {from: 15, to: 18},
        {from: 16, to: 19},
        {from: 16, to: 20},
        {from: 16, to: 21},
    ];

    // create a network
    let container = document.getElementById('mynetwork');
    let data = {
        nodes: nodes,
        edges: edges
    };
    let calculatedHeight = Math.round($(window).height() * 1.2) + 'px';
    let options = {
        width: '100%',
        height: calculatedHeight,
        nodes: {
            borderWidth: 1,
            size: 60,
            color: {
                border: 'black',
                background: 'white',
                hover: {
                    border: 'grey'
                }
            },
            font: {color: 'black'}
        },
        edges: {
            color: 'black',
        },
        interaction: {
            // dragNodes: false,
            dragView: false,
            zoomView: false,
            hover: true,
        },
    };

    let network = new vis.Network(container, data, options);
    network.once('stabilized', function () {
        network.fit();
    });

    // click event opens a new tab
    // network.on('click', function (properties) {
    //     let ids = properties.nodes;
    //     if (ids.length !== 0) {
    //         window.open(nodes[ids[0]].url);
    //     }
    // });
}