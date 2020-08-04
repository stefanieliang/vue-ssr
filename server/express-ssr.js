const server = require("express")()
const Vue = require("vue")
const renderer = require("vue-server-renderer").createRenderer()

server.get("/*", (req, res) => {
    const app = new Vue({
        template: "<div @click='onClick'>hello {{ name }}</div>",
        data() {
            return {
                name: "lddddddddd"
            }
        },
        methods: {
            onClick() {
                console.log("click...")
            }
        },
    })

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end("Server Error!!!")
            return
        }
        res.end(html)
    })
})

server.listen(3000, res => {
    console.log("server running!!!")
})