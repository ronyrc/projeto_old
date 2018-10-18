
//controllers/room.js
const index = async ({ Room }, req, res, next) => {
    try {
      const rooms = await Room.find({});
      res.json(rooms);
    } catch (error) {
      res.status(500).json({error})
    }
  };
  const show = async ({ Room }, req, res, next) => {
    try {
      const room = await Room.findOne({ _id: req.params.id });
      res.json(room);
    } catch (error) {
      res.status(500).json({ error })
    }
  };
  const create = async ({ Room }, req, res, next) => {
    try {
      const room = new Room(req.body);
      await room.save();
      res.json(room)
    } catch (error) {
      res.status(500).json({ error })
    }
  }
  const update = async ({ Room }, req, res, next) => {
    try {
      const room = new Room(req.body);
      await room.update();
    } catch (error) {
      res.status(500).json({ error })
    }
  };
  const destroy = async ({ Room }, req, res, next) => {
    try {
      await Room.remove({ _id: req.params.id})
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