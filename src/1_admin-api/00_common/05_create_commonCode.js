/**
 * @api {post} /admin/v1/commonCode 05. 공통 코드 등록
 *
 * @apiDescription 공통 코드 관리
 *
 * @apiVersion 1.0.0
 * @apiName admin_createCommonCode
 * @apiGroup 1. Admin API > 00. 공통
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/commonCode' \
 * -H "Content-Type: application/json" \
 * -d "{
           "codeGroup":200,
           "codeGroupName": "처리상태",
           "code": 200,
           "name": "처리상태1",
           "sort": 2,
           "useYn":"Y"
       }"
 *
 * @apiParam (Body) {Number} codeGroup 코드그룹 식별키
 * @apiParam (Body) {String} codeGroupName 코드그룹명
 * @apiParam (Body) {Number} code 코드 식별키
 * @apiParam (Body) {Number} name 코드명
 * @apiParam (Body) {Number} sort 순위
 * @apiParam (Body) {String} useYn 활성여부(Y:활성,N:비활성)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */