/**
 * @api {post} /admin/v1/users/{id}/ldfs 47. ldf 등록
 *
 * @apiDescription 강사 계정 로그인 : 회원목록 > ldf탭 > 등록<br/>
 * test: reservationId : 2431378
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserLdf
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users/M1654741178072018/ldfs' \
 * -H "Content-Type: application/json" \
 * -d "{
           "reservationId":2431385,
           "lesson":"lesson",
           "contentSp": "contentSp",
           "contentV": "contentV",
           "contentSg": "contentSg",
           "contentC": "contentC"
       }"
 *
 * @apiParam (Path) {String} id 회원 식별키
 *
 *
 * @apiParam (Body) {Number} reservationId ldf 목록에 가지고 있는 ldfId(ldf식별키)
 * @apiParam (Body) {String} [lesson] Lesson
 * @apiParam (Body) {String} [contentSp] Stress and Pronunciation
 * @apiParam (Body) {String} [contentV] Vocabulary
 * @apiParam (Body) {String} [contentSg] Sentence Structure & Grammar
 * @apiParam (Body) {String} [contentC] Comment
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */