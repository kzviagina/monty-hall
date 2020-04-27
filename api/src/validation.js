const { body, validationResult } = require('express-validator');

const rules = () => [
    body('amount').isInt({ min: 1 }),
    body('switchDoor').isBoolean(),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const resErr = [];
    errors.array().map(e => resErr.push({ [e.param]: e.msg }));

    return res.status(400).json({
        errors: resErr,
    });
};

module.exports = {
    rules,
    validate,
};