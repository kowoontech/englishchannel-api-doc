/**
 * @api {get} /admin/v1/statistics/sms 01. 발송 내역 목록
 *
 * @apiDescription SMS 전송현황 > <br/>
 * 통계보고서 > sms전송현황 > 발송 내역
 *
 *
 * @apiVersion 1.0.0
 * @apiName all_Sms
 * @apiGroup 1. Admin API > 6. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/statistics/sms
 *
 * @apiParam (Query) {String} sendDateFrom 발송일 시작 [yyyy-MM-dd]
 * @apiParam (Query) {String} sendDateTo  발송일 종료 [yyyy-MM-dd]
 * @apiParam (Query) {String} sendType 구분 [L:LMS , S: SMS] 전체 시 null값 넘겨주세요
 * @apiParam (Query) {String} search 검색조건[content: 내용,senderName:발송인]
 * @apiParam (Query) {Number} keyword 검색내용


 * @apiSuccess {Object[]} list SMS 목록
 * @apiSuccess {String} list.id SMS 식별키
 * @apiSuccess {String} list.senderName 발송인
 * @apiSuccess {String} list.content  내용
 * @apiSuccess {String} list.sendDate 발송일[yyyy-MM-dd HH:mm:ss]
 * @apiSuccess {String} list.count 발송건수(성공/실패)
 * @apiSuccess {String} list.recipientName 수취인
 * @apiSuccess {String} list.reservationDate 예약일시(성공/실패)
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
            "id": 5,
            "senderName": "고길동",
            "content": "문자메세지",
            "sendDate": "2021-12-12T00:00:00",
            "count": 0,
            "recipientName": "홍길동",
            "reservationDate": "2021-12-12T00:00:00"
        },
        {
            "id": 6,
            "senderName": "고길동1",
            "content": "문자메세지1",
            "sendDate": "2021-12-12T00:00:00",
            "count": 0,
            "recipientName": "홍길동1",
            "reservationDate": "2021-12-12T00:00:00"
        },
        {
            "id": 7,
            "senderName": "고길동2",
            "content": "문자메세지2",
            "sendDate": "2021-12-12T00:00:00",
            "count": 0,
            "recipientName": "홍길동2",
            "reservationDate": "2021-12-12T00:00:00"
        },
        {
            "id": 8,
            "senderName": "고길동3",
            "content": "문자메세지3",
            "sendDate": "2021-12-12T00:00:00",
            "count": 0,
            "recipientName": "홍길동3",
            "reservationDate": "2021-12-12T00:00:00"
        }
    ],
    "totalCount": 4,
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