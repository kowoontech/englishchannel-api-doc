/**
 * @api {get} /admin/v1/consultations 01. 상담관리 > 상담고객목록
 *
 * @apiDescription 회원관리 > 상담관리 > 상담고객<br/>
 *  모든 파라미터는 안넘기면 전체<br/>
 *  파마미터의 [전체] checkbox 선택 시 나머지 checkbox 선택 제거
 *
 * @apiVersion 1.0.0
 * @apiName all_consultation
 * @apiGroup 1. Admin API > 04. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/consultations?status=4
 *
 * @apiParam (Query) {String} consultationDateFrom 등록일(시작) (yyyy-MM-dd)
 * @apiParam (Query) {String} consultationDateTo 등록일(끝) (yyyy-MM-dd)
 * @apiParam (Query) {String} visitDateFrom 방문예약일(시작) (yyyy-MM-dd)
 * @apiParam (Query) {String} visitDateTo 방문예약일(끝) (yyyy-MM-dd)
 * @apiParam (Query) {String} type 상담구분(P: 전화상담,V: 방문상담,K: 카카오채널,N: 네이버예약)
 * @apiParam (Query) {Number} status 처리상태 (WAITING:대기중, 컨텍금지:컨택금지, UNVISITED:미방문(통화완료)<br/>
                                              RESERVED:예약완료, NOT_REGISTERED:미등록(상담완료), <br/>
                                              REGISTERED:등록완료, NoShow, MISSED:부재중)
 * @apiParam (Query) {String} search 검색구분( name:이름, phone: 전화번호 , details :상담내용)
 * @apiParam (Query) {String} keyword 검색내용
 * @apiParam (Query) {Number} limit 한페이지에 보여줄 회원 수
 * @apiParam (Query) {Number} page 현재 페이지

 * @apiSuccess {Object[]} list 회원 목록
 * @apiSuccess {String} list.id 예약 식별키
 * @apiSuccess {String} list.type (P:전화상담, V:방문상담, K:카카오채널, N:네이버예약, F:온라인상담, L:무료레벨테스트)
 * @apiSuccess {Number} list.status 처리상태 (WAITING:대기중, 컨텍금지:컨택금지, UNVISITED:미방문(통화완료)<br/>
                                                                   RESERVED:예약완료, NOT_REGISTERED:미등록(상담완료), <br/>
                                                                   REGISTERED:등록완료, NoShow, MISSED:부재중)
 * @apiSuccess {String} list.name 회원명
 * @apiSuccess {String} list.phone 전화번호
 * @apiSuccess {String} list.company 회사/직장명
 * @apiSuccess {String} list.callTime 통화시간 TIME_01 // 06:30~08:00 <br/>
                                             TIME_02 // 08:00~10:00 <br/>
                                             TIME_03 // 10:00~12:00<br/>
                                             TIME_04 // 12:00~14:00<br/>
                                             TIME_05 // 14:00~16:00<br/>
                                             TIME_06 // 16:00~18:00<br/>
                                             TIME_07 // 18:00~20:00<br/>
                                             TIME_08, // 20:00~21:00<br/>
                                             TIME_09, // 기타
 * @apiSuccess {String} list.visitDate 방문일정
 * @apiSuccess {String} list.createdOn 등록일
 * @apiSuccess {String} list.creatorName 상담직원
 * @apiSuccess {String} list.details 상담내용
 * @apiSuccess {Object[]} list.smsList 회원 목록
 * @apiSuccess {String} list.smsList.content  문자내용
 * @apiSuccess {String} list.smsList.smsId  문자식별키
 * @apiSuccess {String} list.smsList.recipientPhone  받는사람핸드폰번호
 * @apiSuccess {String} list.smsList.recipientName  받는사람이름
 * @apiSuccess {String} list.smsList.senderPhone  보내는 사람 번호
 * @apiSuccess {String} list.smsList.senderName  보내는 사람 이름
 * @apiSuccess {String} list.smsList.sendDate  전송날짜(yyyy-MM-dd HH:mm:ss)
 * @apiSuccess {String} list.smsList.status  발송성공여부(SUCCESS)

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
            "listNumber": 42,
            "id": 26306,
            "type": "P",
            "status": "4",
            "name": "test이름1",
            "cellPhone": "3",
            "company": "ABC Corp",
            "callTime": "40",
            "visitDate": "2021-12-12 00:00:00",
            "consultationDate": "2021-12-12 00:00:00",
            "creatorName": null,
            "details": "11",
            "smsList": [
                {
                    "content": "문자메세지",
                    "smsId": "5",
                    "recipientPhone": "3",
                    "recipientName": "김대한4",
                    "senderPhone": "123-456-7899",
                    "senderName": "고길동",
                    "sendDate": "2012-12-26 00:00:00",
                    "status": "SUCCESS"
                },
                {
                    "content": "문자메세지",
                    "smsId": "5",
                    "recipientPhone": "3",
                    "recipientName": "김대한3",
                    "senderPhone": "123-456-7899",
                    "senderName": "고길동",
                    "sendDate": "2012-12-25 00:00:00",
                    "status": "SUCCESS"
                },
                {
                    "content": "문자메세지",
                    "smsId": "5",
                    "recipientPhone": "3",
                    "recipientName": "김대한2",
                    "senderPhone": "123-456-7899",
                    "senderName": "고길동",
                    "sendDate": "2012-12-23 00:00:00",
                    "status": "SUCCESS"
                }
            ]
        },
        {
            "listNumber": 41,
            "id": 26305,
            "type": "P",
            "status": "4",
            "name": "test이름1",
            "cellPhone": "010-1111-1111",
            "company": "ABC Corp",
            "callTime": "40",
            "visitDate": null,
            "consultationDate": null,
            "creatorName": null,
            "details": "123",
            "smsList": []
        },
        {
            "listNumber": 40,
            "id": 26304,
            "type": "P",
            "status": "4",
            "name": "test이름1",
            "cellPhone": "010-1111-1111",
            "company": "ABC Corp",
            "callTime": "40",
            "visitDate": null,
            "consultationDate": null,
            "creatorName": null,
            "details": "test내용2",
            "smsList": []
        },
        {
            "listNumber": 39,
            "id": 26303,
            "type": "P",
            "status": "4",
            "name": "test이름",
            "cellPhone": "010-1111-1111",
            "company": "ABC Corp",
            "callTime": "40",
            "visitDate": null,
            "consultationDate": null,
            "creatorName": null,
            "details": "test내용2",
            "smsList": []
        },
        {
            "listNumber": 38,
            "id": 26300,
            "type": "P",
            "status": "4",
            "name": "test이름2",
            "cellPhone": "010-1111-1111",
            "company": "ABC Corp",
            "callTime": "40",
            "visitDate": "2021-12-12 12:12:12",
            "consultationDate": "2021-12-12 12:12:12",
            "creatorName": null,
            "details": "test내용2",
            "smsList": []
        },
        {
            "listNumber": 37,
            "id": 26299,
            "type": "P",
            "status": "4",
            "name": "test이름1",
            "cellPhone": "010-1111-1111",
            "company": "ABC Corp",
            "callTime": "40",
            "visitDate": "2021-12-12 12:12:12",
            "consultationDate": "2021-12-12 12:12:12",
            "creatorName": null,
            "details": "test내용2",
            "smsList": []
        },
        {
            "listNumber": 36,
            "id": 26297,
            "type": "P",
            "status": "4",
            "name": "test이름4",
            "cellPhone": "010-1111-1113",
            "company": "ABC Corp",
            "callTime": "40",
            "visitDate": "2021-12-12 00:00:00",
            "consultationDate": null,
            "creatorName": null,
            "details": "123",
            "smsList": []
        },
        {
            "listNumber": 35,
            "id": 26296,
            "type": "P",
            "status": "4",
            "name": "test이름4",
            "cellPhone": "010-1111-1113",
            "company": "ABC Corp",
            "callTime": "40",
            "visitDate": null,
            "consultationDate": null,
            "creatorName": null,
            "details": "test내용2",
            "smsList": []
        },
        {
            "listNumber": 34,
            "id": 26295,
            "type": "P",
            "status": "4",
            "name": "test이름3",
            "cellPhone": "010-1111-1113",
            "company": "ABC Corp",
            "callTime": "40",
            "visitDate": "2021-12-12 00:00:00",
            "consultationDate": "2021-12-12 00:00:00",
            "creatorName": null,
            "details": "test내용2",
            "smsList": []
        },
        {
            "listNumber": 33,
            "id": 26294,
            "type": "P",
            "status": "4",
            "name": "test이름",
            "cellPhone": "010-1111-1113",
            "company": "ABC Corp",
            "callTime": "40",
            "visitDate": "2021-12-12 00:00:00",
            "consultationDate": "2021-12-12 00:00:00",
            "creatorName": null,
            "details": "test내용2",
            "smsList": []
        }
    ],
    "totalCount": 42,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "totalPage": 5,
    "endPage": 5,
    "hasNext": false,
    "hasPrev": false,
    "isFirst": true,
    "isLast": true
}
 */