import { ErrorHandler, callService } from "../core/handler";
import { validationResult } from "express-validator";

class BaseController {
	constructor() {
	}

	async default(req, res, next) {
		
		try {
			let response = await callService(
				req.method,
				req.originalUrl,
				req.body,
				{
					"Content-Type": "application/json"
				}
			);
			return res.status(response.status).json(response.data);
		} catch (error) {
			console.log(error);
			return this.handleError(next, 500, { message: error });
		}
	}

	async validateFields(req, next) {
		return new Promise((resolve, reject) => {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return this.handleError(next, 422, errors.array());
			}
			resolve();
		});
	}

	handleError(next, status = 500, message = "") {
		return next(new ErrorHandler(status, message));
	}
}
export default BaseController;
