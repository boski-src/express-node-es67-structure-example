import express from 'express';
const router = express.Router();

// Controllers
import HomeController from '../http/controllers/HomeController';
import BooksController from '../http/controllers/BooksController.web';

//Requests
import BooksRequests from '../http/requests/BooksRequest';

router.get('/', HomeController.Index);

router.get('/books', BooksController.Index);
router.get('/books/create', BooksController.Create);
router.post('/books', BooksRequests, BooksController.Store);
router.get('/books/:id', BooksController.Show);
router.get('/books/:id/edit', BooksController.Edit);
router.patch('/books/:id', BooksRequests, BooksController.Update);
router.delete('/books/:id', BooksController.Destroy);

export default router;