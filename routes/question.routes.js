const express = require('express');
const { validateToken } = require('../middlewares/validations');
const { authorize } = require('../middlewares/authorize');
const QuestionController = require('../controllers/question.controller');

const router = express.Router();
const questionController = new QuestionController();

router.post(
  '/question',
    validateToken,
      authorize(['createQuestion']),
        questionController.createQuestion
        );

        router.get('/questions', validateToken, questionController.getQuestions);
        router.get('/questions/:id', validateToken, questionController.getQuestion);
        router.get('/questions/:id/full', validateToken, questionController.getQuestionWithOptions);
        router.put(
          '/questions/:id',
            validateToken,
              authorize(['updateQuestion']),
                questionController.updateQuestion
                );

                router.delete(
                  '/questions/:id',
                    validateToken,
                      authorize(['deleteQuestion']),
                        questionController.deleteQuestion
                        );

                        module.exports = router;