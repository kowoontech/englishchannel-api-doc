/**
 * @api {get} /admin/v1/statistics/successSms 01. 발송 내역 목록
 *
 * @apiDescription SMS 전송현황 > <br/>
 * 통계보고서 > sms전송현황 > 발송 내역
 *
 *
 * @apiVersion 1.0.0
 * @apiName all_Sms
 * @apiGroup 1. Admin API > 06. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/statistics/successSms?sendType=ALL
 *
 * @apiParam (Query) {String} sendDateFrom 발송일 시작 [yyyy-MM-dd]
 * @apiParam (Query) {String} sendDateTo  발송일 종료 [yyyy-MM-dd]
 * @apiParam (Query) {String} sendType 구분 [ALL:전체, L:LMS , S: SMS]
 * @apiParam (Query) {String} search 검색조건[ALL:전체, content: 내용,senderName:발송인]
 * @apiParam (Query) {Number} keyword 검색내용


 * @apiSuccess {Object[]} list SMS 목록
 * @apiSuccess {String} list.listNumber NO
 * @apiSuccess {String} list.id SMS 식별키
 * @apiSuccess {String} list.senderName 발송인
 * @apiSuccess {String} list.content  내용
 * @apiSuccess {String} list.sendDate 발송일[yyyy-MM-dd HH:mm:ss]
 * @apiSuccess {String} list.total 총 발송 건수
 * @apiSuccess {String} list.success SMS 발송 성공
 * @apiSuccess {String} list.fail SMS 발송 실패
 * @apiSuccess {String} list.waiting SMS 발송 대기
 * @apiSuccess {String} list.sendType 구분(L:LMS , S: SMS)
 * @apiSuccess {String} list.recipientName 수취인
 * @apiSuccess {String} list.reservationDate 예약일시
 * @apiSuccess {String} list.recipientPhone 수신자 번호
 * @apiSuccess {String} list.senderPhone 발신자번호
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
            "listNumber": 4,
            "id": 5,
            "senderName": "고길동",
            "content": "문자메세지",
            "sendDate": "2021-12-12 00:00:00",
            "total": 17,
            "success": 5,
            "fail": 6,
            "waiting": 6,
            "sendType": "S",
            "recipientName": "홍길동",
            "recipientPhone": "010-2321-1234",
            "senderPhone": "123-456-7899",
            "reservationDate": "2021-12-12 00:00:00"
        },
        {
            "listNumber": 3,
            "id": 6,
            "senderName": "고길동1",
            "content": "문자메세지1",
            "sendDate": "2021-12-12 00:00:00",
            "total": 1,
            "success": 0,
            "fail": 1,
            "waiting": 0,
            "sendType": "L",
            "recipientName": "홍길동1",
            "recipientPhone": "010-2321-1234",
            "senderPhone": "123-456-7899",
            "reservationDate": "2021-12-12 00:00:00"
        },
        {
            "listNumber": 2,
            "id": 7,
            "senderName": "고길동2",
            "content": "문자메세지2",
            "sendDate": "2021-12-12 00:00:00",
            "total": 0,
            "success": 0,
            "fail": 0,
            "waiting": 0,
            "sendType": null,
            "recipientName": "홍길동2",
            "recipientPhone": "010-2321-1234",
            "senderPhone": "123-456-7899",
            "reservationDate": "2021-12-12 00:00:00"
        },
        {
            "listNumber": 1,
            "id": 19,
            "senderName": "고길동2",
            "content": "문자메세지2",
            "sendDate": "2021-12-12 00:00:00",
            "total": 0,
            "success": 0,
            "fail": 0,
            "waiting": 0,
            "sendType": null,
            "recipientName": "홍길동2",
            "recipientPhone": "010-2321-1234",
            "senderPhone": "123-456-7899",
            "reservationDate": "2021-12-12 00:00:00"
        }
    ],
    "totalCount": 4,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "endPage": 1,
    "startPage": 1,
    "totalPage": 1,
    "isFirst": true,
    "isLast": true,
    "hasNext": false,
    "hasPrev": false
}
 */