/**
 * @api {put} api/admin/v1/commonCode/{codeId} 08. 공통 코드 수정
 *
 * @apiDescription 공통 코드 관리
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateCommonCode
 * @apiGroup 1. Admin API > 00. 공통
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/api/admin/v1/commonCode/7' \
 * -H "Content-Type: application/json" \
 * -d "{
           "codeGroup":200,
           "codeGroupName": "처리상태",
           "name": "처리상태수정",
           "sort": 2,
           "useYn":"Y"
       }"
 *
 * @apiParam (Query) codeId 코드 식별키
 *
 * @apiParam (Body) {String} [name] 코드명
 * @apiParam (Body) {Number} [sort] 순위
 * @apiParam (Body) {String} [useYn] 활성여부(Y:활성,N:비활성)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */