


webix.ready(function () {
    webix.ui({
        view: "form",
        elements: [{
            rows: [
                {
                    cols: [{},
                        {
                            view: "sidebar", css:"webix_dark", width: 200, 
                            data: [
                                {
                                    id: "charp", value: "C#"
                                },
                                {
                                    id: "cplusplus", value:"C++"
                                },
                                {
                                    id: "algorithm", value: "Algorithm"
                                },

                                ]
                        }
                    ]
                }
            ]
        }]
    });

})