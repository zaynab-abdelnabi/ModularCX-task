const Post = require("../models/post");

class Controller {
  // get all posts
  getAll(req, res, next) {
    Post.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({
        success: true,
        message: "Get all posts successfully",
        response,
      });
    });
  }

  // get one post by id
  getById(req, res, next) {
    let { id } = req.params;
    Post.findOne({ _id: id }, (err, response) => {
      if (err) {
        if (err.path === "_id") {
          res.status(400).send({
            success: false,
            message: `id \'${id}\' is invalid`,
            response,
          });
        }
        return next(err);
      }
      if (response === null) {
        res.status(404).send({ success: false, message: "Post is not found" });
      }
      res.status(200).send({
        success: true,
        message: "Get post by Id successfully",
        response,
      });
    });
  }

  // add new post
  post(req, res, next) {
    let body = req.body;
    let doc = new Post(body);
    doc.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({
        success: true,
        message: "New post successfully created",
        response,
      });
    });
  }

  // update existing post
  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;

    Post.findByIdAndUpdate(
      { _id: id },
      {
        $set: body,
      },
      (err, response) => {
        if (err) {
          if (err.path === "_id") {
            res.status(400).send({
              success: false,
              message: `id \'${id}\' is invalid`,
              response,
            });
          }
          return next(err);
        }
        if (response === null) {
          res
            .status(404)
            .send({ success: false, message: "Post is not found" });
        }
        res.status(200).send({
          success: true,
          message: "Post updated successfully",
          response,
        });
      }
    );
  }

  // delete existing post
  delete(req, res, next) {
    let { id } = req.params;
    Post.findByIdAndDelete({ _id: id }, (err, response) => {
      if (err) {
        if (err.path === "_id") {
          res.status(400).send({
            success: false,
            message: `id \'${id}\' is invalid`,
            response,
          });
        }
        return next(err);
      }
      if (response === null) {
        res.status(404).send({ success: false, message: "Post is not found" });
      }
      res.status(200).send({
        success: true,
        message: "Post deleted successfully",
        response,
      });
    });
  }
}

const controller = new Controller();
module.exports = controller;
