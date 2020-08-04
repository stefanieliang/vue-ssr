const server = require("express")()
const Vue = require("vue")
const {
    createRenderer
} = require("vue-server-renderer")
const fs = require("fs")
const path = require("path")


server.get("*", (req, res) => {
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

    const renderer = createRenderer({
        template: fs.readFileSync(path.join(__dirname, './index.template.html'), 'utf-8')
    })

    const context = {
        title: "123",
        meta: `<meta charset="UTF-8">`,
        url: "url999"
    }

    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end("Server Error!!!")
            return
        }
        res.end(html)
    })
})


server.listen(4000, res => {
    console.log("server running!!")
})