/**
 * @api {put} /admin/v1/teachers/sort 18. 강사 순서 변경
 *
 * @apiDescription 강사관리 > 목록 조회 > 순서변경 <br/>
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateTeacherSort
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/api/admin/v1/teachers/sort'
 * -H "Content-Type: application/json" \
 * -d "{
           "userId":"M1726648755607877",
           "sort" : 4
       }"
 *
 * 
 * @apiParam (Body) {String} userId 강사 식별키
 * @apiParam (Body) {Number} sort 순서
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */