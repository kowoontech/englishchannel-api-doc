/**
 * @api {get} /admin/v1/templates/1 38. 특이사항 템플릿
 *
 * @apiDescription 회원관리 > 회원등록 > 특이사항 필드에 들어 갈 템플릿<br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_getRegisterNoteTemplate
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/templates/1'
 *
 *
 * @apiSuccess {Number} id 템플릿 식별키
 * @apiSuccess {String} text 템플릿
 * @apiSuccess {String} description 템플릿에 대한 설명
 * @apiSuccess {String} modifiedBy 작성자 식별키
 * @apiSuccess {String} modifiedName 작성자이름
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": 1,
    "text": "■ 등록조건 : \n ■ 교재 : \n ■ 교재이력 : \n ■ 차량등록 : \n ■ 기타 : ",
    "description": "회원 특이사항",
    "modifiedBy": "U1658468539178711",
    "modifiedName": "박수현"
}
 */