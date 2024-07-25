/**
 * @api {get} /admin/v1/statistics/sms/{id}/target 04. 대상자 보기
 *
 * @apiDescription  통계보고서 > sms전송현황 > 목록 조회> 대상자보기<br/>
 *
 * @apiVersion 1.0.0
 * @apiName admin_getSmsTarget
 * @apiGroup 1. Admin API > 6. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/statistics/sms/5'
 *
 * @apiParam (Query) id sms 식별키
 *
 * @apiSuccess {Object[]} list 수취인 정보
 * @apiSuccess {String} list.id 수취인 식별키
 * @apiSuccess {String} target.email 사용
 * @apiSuccess {String} target.recipientPhone 수취인 번호
 * @apiSuccess {String} target.recipientName 수취인 이름
 * @apiSuccess {String} target.status 발송상태 (WAITING: 대기, SUCCESS:성공, FAIL: 실패)
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "list": [
        {
            "listNumber": 18,
            "id": 21,
            "email": null,
            "recipientPhone": "010-2974-5976",
            "recipientName": "테스트",
            "status": "SUCCESS"
        },
        {
            "listNumber": 17,
            "id": 20,
            "email": null,
            "recipientPhone": "010-2974-5976",
            "recipientName": "테스트",
            "status": "SUCCESS"
        },
        {
            "listNumber": 16,
            "id": 19,
            "email": null,
            "recipientPhone": "010-2974-5976",
            "recipientName": "테스트",
            "status": "WAITING"
        },
        {
            "listNumber": 15,
            "id": 18,
            "email": null,
            "recipientPhone": "010-2974-5976",
            "recipientName": "테스트",
            "status": "WAITING"
        },
        {
            "listNumber": 14,
            "id": 17,
            "email": null,
            "recipientPhone": "010-2974-5976",
            "recipientName": "테스트",
            "status": "WAITING"
        },
        {
            "listNumber": 13,
            "id": 16,
            "email": null,
            "recipientPhone": "010-2974-5976",
            "recipientName": "테스트",
            "status": "WAITING"
        },
        {
            "listNumber": 12,
            "id": 15,
            "email": null,
            "recipientPhone": "010-2974-5976",
            "recipientName": "테스트",
            "status": "WAITING"
        },
        {
            "listNumber": 11,
            "id": 11,
            "email": "이메일9@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국9",
            "status": "FAIL"
        },
        {
            "listNumber": 10,
            "id": 10,
            "email": "이메일9@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국9",
            "status": "FAIL"
        },
        {
            "listNumber": 9,
            "id": 9,
            "email": "이메일8@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국8",
            "status": "FAIL"
        }
    ],
    "totalCount": 18,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "totalPage": 2,
    "endPage": 2,
    "hasNext": false,
    "isFirst": true,
    "isLast": true,
    "hasPrev": false
}
 */