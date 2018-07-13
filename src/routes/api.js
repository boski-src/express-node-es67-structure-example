import express from 'express';
const router = express.Router();

// Controllers
import BooksController from '../http/controllers/BooksController.api';

//Requests
import BooksRequests from '../http/requests/BooksRequest';

// router.get('/', (res, req) => {
// });

router.get('/books', BooksController.Index);
router.post('/books', BooksRequests, BooksController.Store);
router.get('/books/:id', BooksController.Show);
router.patch('/books/:id', BooksRequests, BooksController.Update);
router.delete('/books/:id', BooksController.Destroy);

export default router;