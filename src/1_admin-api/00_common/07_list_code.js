/**
 * @api {get} /admin/v1/code/{codeGroupId} 07. 공통코드 목록
 *
 * @apiDescription 셀렉트박스 리스트 조회 시 사용 <br/>
 *                 - 상담관리 : 상담구분(100) , 처리상태(200)<br/>
 *                 - 39.회원주문결제등록: 카드종류(300)<br/>
 *
 * @apiVersion 1.0.0
 * @apiName admin_listCommonCode
 * @apiGroup 1. Admin API > 00. 공통
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/code/100'
 *
 *
 * @apiParam (Path) {String} codeGroupId 공통코드식별키(상담구분:100/ 처리상태:200/ 카드종류:300/ 근무시간:400)
 *
 * @apiSuccess {String} code 코드식별키
 * @apiSuccess {String} name 코드명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 *
 */