const postsRouter = require("express").Router();


postsRouter.get("/", GetPosts);
postsRouter.get("/:id", GetPostById);
postsRouter.post("/", AddPost);
postsRouter.put("/:id", UpdatePost);
postsRouter.delete("/:id", DeletePost);