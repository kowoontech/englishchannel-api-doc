/**
 * @api {post} /admin/v1/users 25. 비고등록
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > TIP(비고)
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserNote
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users/ataraxia22/notes' \
 * -H "Content-Type: application/json" \
 * -d "{
     "courseId" : 28074,
     "content" : "TEST12"
}"
 * @apiParam (Query) {String} [id] 과정 회원 식별키
 * @apiParam (Body) {Number}[courseId] 강의 식별키(오른쪽에 있는 과정의 식별키와 일치)
 * @apiParam (Body) {String} [content] 비고 내용
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */