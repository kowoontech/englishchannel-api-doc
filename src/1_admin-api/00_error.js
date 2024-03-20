/**
 * @api { } {code:'에러코드',message:'에러메시지'} 00. 공통 에러 코드
 *
 * @apiDescription Admin API 공통 에러 코드 <br/>
 *
 * @apiVersion 1.0.0
 * @apiName adminApiError
 * @apiGroup 1. Admin API
 *
 * @apiError (Error) {401} admin-api-0100 로그인 필요
 * @apiErrorExample {json} LOGIN_REQUIRED
 * HTTP/1.1 401
 * {
 *     "code": "admin-api-0100",
 *     "message": "Login is required."
 * }
 *
 * @apiError (Error) {500} admin-api-9999 기타 서버 에러
 * @apiErrorExample {json} SERVER_ERROR
 * HTTP/1.1 500
 * {
 *     "code": "admin-api-9999",
 *     "message": "Internal Server Error."
 * }
 * 
 * @apiError (Error) {400} admin-api-9900 기타 잘못된 요청
 * @apiErrorExample {json} BAD_REQUEST
 * HTTP/1.1 400
 * {
 *     "code": "admin-api-9900",
 *     "message": "Bad Request."
 * }
 */