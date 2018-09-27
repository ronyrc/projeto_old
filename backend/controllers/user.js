
//controllers/user.js
const index = async ({ User }, req, res, next) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).json({error})
    }
  };
  const show = async ({ User }, req, res, next) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error })
    }
  };
  const create = async ({ User }, req, res, next) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.json(user)
    } catch (error) {
      res.status(500).json({ error })
    }
  }
  const update = async ({ User }, req, res, next) => {
    try {
      const user = new User(req.body);
      await user.update();
    } catch (error) {
      res.status(500).json({ error })
    }
  };
  const destroy = async ({ User }, req, res, next) => {
    try {
      await User.remove({ _id: req.params.id})
      res.status(200).json()
    } catch (error) {
      res.status(500).json({ error })
    }
  }
  module.exports = {
    index,
    create,
    show,
    update,
    destroy
  }