/**
 * @api {get} /admin/v1/statistics/sms/{id} 02. 발송 내역 상세 조회
 *
 * @apiDescription  통계보고서 > sms전송현황 > 상세 조회<br/>
 * id: 5 사용해주세요
 * @apiVersion 1.0.0
 * @apiName admin_getSms
 * @apiGroup 1. Admin API > 6. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/statistics/sms/5'
 *
 * @apiParam (Query) id sms 식별키
 *
 * @apiSuccess {Number} id sms 식별키
 * @apiSuccess {Object[]} target sms 받은 사람들의 정보(smsTarget)
 * @apiSuccess {String} target.id smsTarget 식별키
 * @apiSuccess {String} target.smsId 사용x
 * @apiSuccess {String} target.email 수취인 메일
 * @apiSuccess {String} target.recipientPhone 발송상태 (WAITING: 대기, SUCCESS:성공, FAIL: 실패)
 * @apiSuccess {String} target.sendDate 발송일
 * @apiSuccess {String} content 내용
 * @apiSuccess {String} reservationDate 예약발송일[yyyy-MM-dd HH:mm:ss]
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": 5,
    "target": [
        {
            "id": 1,
            "smsId": null,
            "email": "이메일1@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국",
            "status": "WAITING",
            "sendDate": "2012-11-12T00:00:00"
        },
        {
            "id": 2,
            "smsId": null,
            "email": "이메일2@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국2",
            "status": "WAITING",
            "sendDate": "2012-11-12T00:00:00"
        },
        {
            "id": 3,
            "smsId": null,
            "email": "이메일3@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국3",
            "status": "WAITING",
            "sendDate": "2012-11-12T00:00:00"
        },
        {
            "id": 4,
            "smsId": null,
            "email": "이메일4@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국4",
            "status": "SUCCESS",
            "sendDate": "2012-11-12T00:00:00"
        },
        {
            "id": 5,
            "smsId": null,
            "email": "이메일5@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국5",
            "status": "SUCCESS",
            "sendDate": "2012-11-12T00:00:00"
        },
        {
            "id": 6,
            "smsId": null,
            "email": "이메일5@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국5",
            "status": "FAIL",
            "sendDate": "2012-11-12T00:00:00"
        },
        {
            "id": 7,
            "smsId": null,
            "email": "이메일6@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국6",
            "status": "FAIL",
            "sendDate": "2012-11-12T00:00:00"
        },
        {
            "id": 8,
            "smsId": null,
            "email": "이메일7@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국7",
            "status": "FAIL",
            "sendDate": "2012-11-12T00:00:00"
        },
        {
            "id": 9,
            "smsId": null,
            "email": "이메일8@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국8",
            "status": "FAIL",
            "sendDate": "2012-11-12T00:00:00"
        },
        {
            "id": 10,
            "smsId": null,
            "email": "이메일9@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국9",
            "status": "FAIL",
            "sendDate": "2012-11-12T00:00:00"
        }
    ],
    "reservationDate": "2021-12-12T00:00:00",
    "content": "문자메세지"
}
 */