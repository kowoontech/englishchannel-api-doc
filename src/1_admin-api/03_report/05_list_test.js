/**
 * @api {get} /admin/v1/reservations/test/noreport 05. 테스트
 *
 * @apiDescription 회원관리 > 학사보고서 > 학사보고서 미작성 목록<br/>
 * 운영자 계정 : 회원관리 > 학사보고서 <br/>
 * 강사 계정 : 학사보고서 <br/>
 *
 * @apiVersion 1.0.0
 * @apiName listTest
 * @apiGroup 1. Admin API > 03. 학사보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/reservation/test?yearMonth=2023-01'
 *
 * @apiParam (Query) yearMonth 년월(yyyy-MM)
 */