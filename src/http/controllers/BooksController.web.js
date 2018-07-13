import Book from '../../models/Book';

const Index = (req, res) => {
  Book.find().exec((err, books) => {
    if (err) return console.log(err);
    res.render('pages/books/index', { books });
  })
};

const Create = (req, res) => {
  res.render('pages/books/create');
};

const Store = (req, res) => {
  let data = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  };

  Book.create(data, (err, book) => {
    if (err) return res.redirect('/books/create');
    req.session.flash = {
      type: 'success',
      message: `Successfully added new book: ${book.title}`,
      errors: []
    };
    return res.redirect('/books/' + book._id);
  });
};

const Edit = (req, res) => {
  Book.findById(req.params.id).exec((err, book) => {
    if (err) return res.redirect('/books');
    return res.render('pages/books/edit', book);
  })
};

const Update = (req, res) => {
  let data = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  };

  Book.findByIdAndUpdate(req.params.id, data).exec((err, book) => {
    if (err) return res.redirect('/books/' + book._id);
    req.session.flash = {
      type: 'success',
      message: `Successfully edited book: ${book.title}`,
      errors: []
    };
    return res.redirect('/books/' + book._id);
  })
};

const Show = (req, res) => {
  Book.findById(req.params.id).exec((err, book) => {
    if (err) return res.redirect('/books');
    return res.render('pages/books/show', book);
  })
};

const Destroy = (req, res) => {
  Book.findByIdAndDelete(req.params.id).exec((err, book) => {
    if (err) return res.redirect('/books/' + book._id);
    req.session.flash = {
      type: 'success',
      message: `Successfully removed book: ${book.title}`,
      errors: []
    };
    return res.redirect('/books');
  })
};

export default {
  Index,
  Create,
  Store,
  Edit,
  Update,
  Show,
  Destroy
}