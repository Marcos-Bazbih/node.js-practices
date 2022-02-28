const GetPosts = (req, res) => {
    const posts = require("../posts.json");
    if (posts) res.send({ posts });
    res.status(401).send({ massage: "no posts found" });
};

const GetPostById = (req, res) => {
    const posts = require("../posts.json");
    const post = posts.find((postItem) => { postItem.id === parseInt(req.params.id) })
    if (post) res.send({ post });
    res.status(401).send({ massage: `no movie with ${req.params.id} id found` });
};
