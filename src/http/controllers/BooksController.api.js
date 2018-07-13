import Book from '../../models/Book';

const Index = (req, res) => {
  Book.find().exec((err, books) => {
    if (err) {
      res.json({
        success: false,
        errors: err.message
      });
    }

    res.json({ success: true, message: 'Books received successfully.', data: books });
  })
};

const Store = (req, res) => {
  let data = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  };

  Book.create(data, (err, book) => {
    if (err) {
      res.json({
        success: false,
        errors: err.message
      });
    }

    res.json({ success: true, message: 'Book created successfully.', data: book });
  });
};

const Update = (req, res) => {
  let data = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  };

  Book.findByIdAndUpdate(req.params.id, data).exec((err, book) => {
    if (err) {
      res.json({
        success: false,
        errors: err.message
      });
    }

    res.json({ success: true, message: 'Book updated successfully.', data: book });
  })
};

const Show = (req, res) => {
  Book.findById(req.params.id).exec((err, book) => {
    if (err) {
      res.json({
        success: false,
        errors: err.message
      });
    }

    res.json({ success: true, message: 'Book recived successfully.', data: book });
  })
};

const Destroy = (req, res) => {
  Book.findByIdAndDelete(req.params.id).exec((err, book) => {
    if (err) {
      res.json({
        success: false,
        errors: err.message
      });
    }

    res.json({ success: true, message: 'Book deleted successfully.', data: book });
  })
};

export default {
  Index,
  Store,
  Update,
  Show,
  Destroy
}