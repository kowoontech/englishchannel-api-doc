/**
 * @api {put} /admin/v1/templates/1 46. 템플릿 수정
 *
 * @apiDescription 회원관리 > 회원 등록 / 수정 > 특이사항
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateTemplate
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/templates/1' \
 * -H "Content-Type: application/json" \
 * -d "{
           "text" : "수정template3",
           "description" : "수정test용3"
       }"
 *
 * @apiParam (Body) {String} text 템플릿
 * @apiParam (Body) {String} [description] 템플릿에 대한 설명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */