var $ = go.GraphObject.make;

function makeIndicator(propName) { // the data property name
    return $(go.Shape,
        "Circle", {
            width: 8,
            height: 8,
            fill: "white",
            strokeWidth: 0,
            margin: 5
        },
        new go.Binding("fill", propName));
}

function makeImagePath(icon) {
    return "../samples/images/" + icon;
}

function init() {
    console.log("script is working");
    var diagram = $(go.Diagram, "myDiagramDiv");

    diagram.nodeTemplate =
        $(go.Node, "Vertical",
            $(go.Panel, "Auto", {
                    background: "blue"
                }, {
                    portId: "xx"
                }, // this whole panel acts as the only port for the node
                $(go.Shape, // the border
                    {
                        fill: "transparent",
                        stroke: "lightgray"
                    }),
                $(go.Panel, "Vertical", // everything within the border
                    $(go.Panel, "Horizontal", // the row of status indicators
                        makeIndicator("ind0"),
                        makeIndicator("ind1"),
                        makeIndicator("ind2")
                    ), // end Horizontal Panel
                    // $(go.Picture,
                    //   { width: 32, height: 32, margin: 4 },
                    //   new go.Binding("source", "icon", makeImagePath)),
                    $(go.TextBlock, {
                            stretch: go.GraphObject.Horizontal,
                            textAlign: "center"
                        },
                        new go.Binding("text", "number"),
                        new go.Binding("background", "color"))
                ) // end Vertical Panel
            ), // end Auto Panel
            $(go.TextBlock, {
                    margin: 4
                },
                new go.Binding("text"))
        );

    diagram.model.nodeDataArray = [{
            key: 1,
            text: "Device Type A",
            number: 17,
            color: "moccasin",
            ind0: "red",
            ind1: "orange",
            ind2: "mediumspringgreen"
        },
        {
            key: 2,
            text: "Device Type B",
            number: 97,
            color: "mistyrose",
            ind0: "lightgray",
            ind1: "orange",
            ind2: "green"
        }
    ];
    diagram.model.linkDataArray = [{
        from: 1,
        to: 2
    }];


}