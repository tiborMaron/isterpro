// Called when the Visualization API is loaded.
function draw() {

    // create nodes with images
    let DIR = '/static/images/';
    let nodes = [
        {id: 0, size: 70, shape: 'circle', label: 'Social media'},
        {id: 1, shape: 'circularImage', image: DIR + 'facebook.png', url: 'https://facebook.com'},
        {id: 2, shape: 'circularImage', image: DIR + 'instagram.png', url: 'https://instagram.com'},
        {id: 3, shape: 'circularImage', image: DIR + 'twitter.png', url: 'https://twitter.com'},
        {id: 4, shape: 'circularImage', image: DIR + 'youtube.png', url: 'https://youtube.com'},
        {id: 5, shape: 'circularImage', image: DIR + 'snapchat.png', url: 'https://snapchat.com'},
    ];

    // create connections
    let edges = [
        {from: 0, to: 1},
        {from: 0, to: 2},
        {from: 0, to: 3},
        {from: 0, to: 4},
        {from: 0, to: 5},
    ];

    // create a network
    let container = document.getElementById('mynetwork');
    let data = {
        nodes: nodes,
        edges: edges
    };
    let options = {
        nodes: {
            borderWidth: 2,
            size: 40,
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
            color: 'black'
        },
        interaction: {
            dragNodes: false,
            dragView: false,
            zoomView: false,
            hover: true,
        }
    };

    let network = new vis.Network(container, data, options);

    // click event opens a new tab
    network.on('click', function (properties) {
        let ids = properties.nodes;
        if (ids.length !== 0) {
            window.open(nodes[ids[0]].url);
        }
    });
}