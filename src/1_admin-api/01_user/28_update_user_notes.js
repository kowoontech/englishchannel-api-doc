/**
 * @api {put} /admin/v1/users/notes/{id} 28. 비고 수정
 *
 * @apiDescription 회원관리 > 기본 탭 > 예약 > 예약등록 > TIP
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateUserNote
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/users/notes/2666892' \
 * -H "Content-Type: application/json" \
 * -d "{
           "content" : "수정"
       }"
 *
 * @apiParam (Path) {Long} [id] 비고식별키
 * 
 * @apiParam (Body) {String} [content] 비고 내용
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */