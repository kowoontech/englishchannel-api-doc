/**
 * @api {get} /admin/v1/statistics/waitingSms 07. 대기 내역 목록
 *
 * @apiDescription SMS 전송현황 > <br/>
 * 통계보고서 > sms전송현황 > 대기 내역 <br/>
 * 첫 조회 시 null , 검색 조건 시 전체일 때 ALL 사용
 *
 * @apiVersion 1.0.0
 * @apiName all_waitingSms
 * @apiGroup 1. Admin API > 6. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/statistics/waitingSms
 *
 * @apiParam (Query) {String} sendType 구분 [ALL:전체, L:LMS , S: SMS]
 * @apiParam (Query) {String} search 검색조건[ALL: 전체, recipientPhone: 수신번호,senderPhone:발신번호, content:내용]
 * @apiParam (Query) {Number} keyword 검색내용


 * @apiSuccess {Object[]} list SMS 목록
 * @apiSuccess {Object[]} list.smsTarget 대기 내역 정보
 * @apiSuccess {Number} list.smsTarget.id SMS 식별키
 * @apiSuccess {String} list.smsTarget.email 회원이메일
 * @apiSuccess {String} list.smsTarget.recipientPhone  수신번호
 * @apiSuccess {String} list.smsTarget.recipientName 수신자
 * @apiSuccess {String} list.smsTarget.status 상태(WAITING)
 * @apiSuccess {String} list.smsTarget.sendDate 발송일 (yyyy-MM-dd HH:mm:ss)
 * @apiSuccess {String} list.senderPhone 발송번호
 * @apiSuccess {String} list.senderName 발송자
 * @apiSuccess {String} list.content 문자내용
 *
 * @apiSuccess {Number} totalCount 전체 수
 * @apiSuccess {Number} page 현재 페이지
 * @apiSuccess {Number} limit 한페이지에 보여줄 회원 수
 * @apiSuccess {Number} totalPage 전체 페이지 수
 * @apiSuccess {Number} startPage 페이징 영역에 노출될 첫 페이지
 * @apiSuccess {Number} endPage 페이징 영역에 노출될 마지막 페이지
 * @apiSuccess {Boolean} hasPrev 전 페이징 영역 존재 여부
 * @apiSuccess {Boolean} hasNext 다음 페이징 영역 존재 여부
 * @apiSuccess {Boolean} isFirst 첫 페이징 영역 여부
 * @apiSuccess {Boolean} isLast 마지막 페이징 영역 여부
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "list": [
        {
            "smsTarget": {
                "id": 24,
                "email": null,
                "recipientPhone": "3",
                "recipientName": "김대한2",
                "status": "WAITING",
                "sendDate": "2012-12-12 00:00:00"
            },
            "senderPhone": "123-456-7899",
            "senderName": "고길동",
            "content": "문자메세지"
        },
        {
            "smsTarget": {
                "id": 23,
                "email": null,
                "recipientPhone": "3",
                "recipientName": "김대한1",
                "status": "WAITING",
                "sendDate": "2012-12-12 00:00:00"
            },
            "senderPhone": "123-456-7899",
            "senderName": "고길동",
            "content": "문자메세지"
        },
        {
            "smsTarget": {
                "id": 22,
                "email": null,
                "recipientPhone": "3",
                "recipientName": "김대한",
                "status": "WAITING",
                "sendDate": "2012-12-12 00:00:00"
            },
            "senderPhone": "123-456-7899",
            "senderName": "고길동",
            "content": "문자메세지"
        },
        {
            "smsTarget": {
                "id": 3,
                "email": "이메일3@naver.com",
                "recipientPhone": "010-2321-2312",
                "recipientName": "김민국3",
                "status": "WAITING",
                "sendDate": "2012-11-12 00:00:00"
            },
            "senderPhone": "123-456-7899",
            "senderName": "고길동",
            "content": "문자메세지"
        },
        {
            "smsTarget": {
                "id": 2,
                "email": "이메일2@naver.com",
                "recipientPhone": "010-2321-2312",
                "recipientName": "김민국2",
                "status": "WAITING",
                "sendDate": "2012-11-12 00:00:00"
            },
            "senderPhone": "123-456-7899",
            "senderName": "고길동",
            "content": "문자메세지"
        },
        {
            "smsTarget": {
                "id": 1,
                "email": "이메일1@naver.com",
                "recipientPhone": "010-2321-2312",
                "recipientName": "김민국",
                "status": "WAITING",
                "sendDate": "2012-11-12 00:00:00"
            },
            "senderPhone": "123-456-7899",
            "senderName": "고길동",
            "content": "문자메세지"
        }
    ],
    "totalCount": 6,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "endPage": 1,
    "totalPage": 1,
    "hasNext": false,
    "isFirst": true,
    "isLast": true,
    "hasPrev": false
}
 */