/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'red',
                            type: 'image',
                            tag: 'img',
                            rect: ['11.7%', '21.3%', '25.6%', '57.6%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"01.jpg",'0px','0px']
                        },
                        {
                            id: 'green',
                            type: 'image',
                            tag: 'img',
                            rect: ['62.8%', '21.3%', '25.6%', '57.5%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"02.jpg",'0px','0px']
                        },
                        {
                            id: 'black',
                            type: 'image',
                            rect: ['83.1%', '61.8%', '0.9%', '2.7%', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"04.png",'0px','0px']
                        },
                        {
                            id: 'rotation',
                            type: 'image',
                            rect: ['37.2%', '21.3%', '25.6%', '57.5%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rotation.gif",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '1800px', '800px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "left",
                            1000,
                            3000,
                            "linear",
                            "${red}",
                            '37.22%',
                            '11.67%'
                        ],
                        [
                            "eid49",
                            "opacity",
                            5250,
                            1363,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "left",
                            1000,
                            3000,
                            "linear",
                            "${green}",
                            '37.22%',
                            '62.78%'
                        ],
                        [
                            "eid33",
                            "width",
                            5066,
                            0,
                            "linear",
                            "${red}",
                            '25.56%',
                            '25.56%'
                        ],
                        [
                            "eid32",
                            "height",
                            5066,
                            0,
                            "linear",
                            "${red}",
                            '57.55%',
                            '57.55%'
                        ],
                        [
                            "eid34",
                            "width",
                            5066,
                            0,
                            "linear",
                            "${green}",
                            '25.56%',
                            '25.56%'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${black}",
                            '0',
                            '0'
                        ],
                        [
                            "eid24",
                            "opacity",
                            4000,
                            0,
                            "linear",
                            "${black}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid52",
                            "background-color",
                            5250,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid31",
                            "top",
                            4000,
                            1066,
                            "linear",
                            "${black}",
                            '61.75%',
                            '94%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Untitled-1_edgeActions.js");
})("EDGE-4245129");
