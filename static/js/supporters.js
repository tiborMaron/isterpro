var nodes = null;
var edges = null;
var network = null;

// Called when the Visualization API is loaded.
function draw() {

    // create nodes with images
    let DIR = '/static/images/';
    nodes = [
        {id: 1, shape: 'circularImage', image: DIR + 'facebook.png', url: 'https://facebook.com'},
        {id: 2, shape: 'circularImage', image: DIR + 'instagram.png', url: 'https://instagram.com'},
        {id: 3, shape: 'circularImage', image: DIR + 'twitter.png', url: 'https://twitter.com'},
        {id: 4, shape: 'circularImage', image: DIR + 'youtube.png', url: 'https://youtube.com'},
    ];

    // create connections
    edges = [
        {from: 1, to: 2},
        {from: 1, to: 4},
        {from: 2, to: 3},
        {from: 3, to: 4},
    ];

    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes: {
            borderWidth: 2,
            size: 40,
            color: {
                border: '#222222',
                background: 'white'
            },
            font: {color: '#eeeeee'}
        },
        edges: {
            color: 'lightgray'
        }
    };

    network = new vis.Network(container, data, options);

    // click event opens a new tab
    network.on('click', function (properties) {
        let ids = properties.nodes;
        if (ids.length !== 0) {
            window.open(nodes[ids[0]].url);
        }
    });
}