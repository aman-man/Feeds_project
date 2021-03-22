const { Feeds } = require('./feeds.model');

exports.saveFeed = async (req, res) => {
  try {
    const newFeed = new Feeds(req.body);
    const response = await newFeed.save();
    const status = {
      data: response,
      message: 'Saved'
    }
    res.send(status);
  } catch (err) {
    const status = {
      error: err,
      message: 'Not Saved'
    }
    res.send(status);
  }
};

exports.getAllFeed = async (req, res) => {
  try {
    const allFeeds = await Feeds.find();
    const status = {
      data: allFeeds,
      message: 'Success'
    }
    res.send(status);
  } catch (err) {
    const status = {
      error: err,
      message: 'Could not able to get Feeds'
    }
    res.send(status);
  }
}

exports.getSingleFeed = async (req, res) => {
  try {
    const feed = await Feeds.findOne({ _id: req.query.id });
    const status = {
      data: feed,
      message: 'Success'
    }
    res.send(status);
  } catch (err) {
    const status = {
      error: err,
      message: 'Could not able to get Feeds'
    }
    res.send(status);
  }
}

exports.updateFeed = async (req, res) => {
  try {
    const editFeed = await Feeds.findOne({ _id: req.body.id });
    editFeed.text = req.body.text;
    await editFeed.save();
    const status = {
      message: 'Success'
    }
    res.send(status);
  } catch (err) {
    const status = {
      error: err,
      message: 'Could not able to get Feeds'
    }
    res.send(status);
  }
}

exports.deleteFeed = async (req, res) => {
  try {
    const feed = await Feeds.deleteOne({ _id: req.query.id });
    const status = {
      data: feed,
      message: 'Success'
    }
    res.send(status);
  } catch (err) {
    const status = {
      error: err,
      message: 'Could not able to delete'
    }
    res.send(status);
  }
}
