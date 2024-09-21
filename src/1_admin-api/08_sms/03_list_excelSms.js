/**
 * @api {get} /admin/v1/templates/excel/sms 03. sms 엑셀
 *
 * @apiDescription SMS전송현황> 엑셀 다운로드<br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName listSmsexcel
 * @apiGroup 1. Admin API > 08. SMS
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080//api/admin/v1/templates/excel/sms'
 *
 * @apiParam (Query) {String} type 발송 대상 유형 (S:일반회원, T:강사, A:관리자)
 * @apiParam (Query) {String} search 검색 조건 (name:이름, id:아이디)
 * @apiParam (Query) {String} keyword 검색어
 *
 * @apiSuccess {Number} id 식별키
 * @apiSuccess {String} senderPhone 발송자번호
 * @apiSuccess {String} createdBy 발송자식별키
 * @apiSuccess {String} senderName 발송자(이름)
 * @apiSuccess {String} content 내용
 * @apiSuccess {String} date 발송날짜
 * @apiSuccess {String} time 발송시간
 * @apiSuccess {String} sendType 발송타입[SMS:S , LMS:L]
 * @apiSuccess {String} [status] 발송상태[WAITING, SUCCESS, FAIL]
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
[
    {
        "id": 31,
        "senderPhone": "0220821105",
        "createdBy": "U1370839971594082",
        "senderName": "채인숙",
        "content": "123123123123123",
        "date": "2024-09-20",
        "time": "21:26:17",
        "sendType": null,
        "status": "WAITING"
    },
    {
 */