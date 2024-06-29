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
 * @apiSuccess {String} target.email 사용x
 * @apiSuccess {String} target.recipientPhone 수취인 메일
 * @apiSuccess {String} target.recipientName 수취인 이름
 * @apiSuccess {String} target.status 발송상태 (WAITING: 대기, SUCCESS:성공, FAIL: 실패)
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "list": [
        {
            "id": 10,
            "email": "이메일9@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국9",
            "status": "FAIL"
        },
        {
            "id": 9,
            "email": "이메일8@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국8",
            "status": "FAIL"
        },
        {
            "id": 8,
            "email": "이메일7@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국7",
            "status": "FAIL"
        },
        {
            "id": 7,
            "email": "이메일6@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국6",
            "status": "FAIL"
        },
        {
            "id": 6,
            "email": "이메일5@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국5",
            "status": "FAIL"
        },
        {
            "id": 5,
            "email": "이메일5@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국5",
            "status": "SUCCESS"
        },
        {
            "id": 4,
            "email": "이메일4@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국4",
            "status": "SUCCESS"
        },
        {
            "id": 3,
            "email": "이메일3@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국3",
            "status": "WAITING"
        },
        {
            "id": 2,
            "email": "이메일2@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국2",
            "status": "WAITING"
        },
        {
            "id": 1,
            "email": "이메일1@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국",
            "status": "WAITING"
        }
    ],
    "totalCount": 10,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "totalPage": 1,
    "endPage": 1,
    "hasNext": false,
    "isFirst": true,
    "isLast": true,
    "hasPrev": false
}
 */