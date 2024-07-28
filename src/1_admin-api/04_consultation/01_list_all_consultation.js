/**
 * @api {get} /admin/v1/consultations 01. 상담관리 > 상담고객목록
 *
 * @apiDescription 회원관리 > 상담관리 > 상담고객<br/>
 *  모든 파라미터는 안넘기면 전체<br/>
 *  파마미터의 [전체] checkbox 선택 시 나머지 checkbox 선택 제거
 *
 * @apiVersion 1.0.0
 * @apiName all_consultation
 * @apiGroup 1. Admin API > 4. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/consultations?statusCodes=3&statusCodes=7
 *
 * @apiParam (Query) {String} consultationDateFrom 등록일(시작) (yyyy-MM-dd)
 * @apiParam (Query) {String} consultationDateTo 등록일(끝) (yyyy-MM-dd)
 * @apiParam (Query) {String} visitDateFrom 방문예약일(시작) (yyyy-MM-dd)
 * @apiParam (Query) {String} visitDateTo 방문예약일(끝) (yyyy-MM-dd)
 * @apiParam (Query) {String} type 상담구분(P: 전화상담,V: 방문상담,K: 카카오채널,N: 네이버예약)
 * @apiParam (Query) {Number} status 처리상태3:대기중, 4:컨택금지, 5:미방문(통화완료), 6:예약완료, 7:미등록(상담완료), 8:등록완료, 9:NoShow, 10:부재중)
 * @apiParam (Query) {String} search 검색구분( name:이름, phone: 전화번호 , details :상담내용)
 * @apiParam (Query) {String} keyword 검색내용
 * @apiParam (Query) {Number} limit 한페이지에 보여줄 회원 수
 * @apiParam (Query) {Number} page 현재 페이지

 * @apiSuccess {Object[]} list 회원 목록
 * @apiSuccess {String} list.id 예약 식별키
 * @apiSuccess {String} list.type (P:전화상담, V:방문상담, K:카카오채널, N:네이버예약, F:온라인상담, L:무료레벨테스트)
 * @apiSuccess {Number} list.status 처리상태(3:대기중, 4:컨택금지, 5:미방문(통화완료), 6:예약완료, 7:미등록(상담완료), 8:등록완료, 9:NoShow, 10:부재중)
 * @apiSuccess {String} list.name 회원명
 * @apiSuccess {String} list.phone 전화번호
 * @apiSuccess {String} list.company 회사/직장명
 * @apiSuccess {String} list.callTime 통화시간 10 // 06:30~08:00 <br/>
                                             20 // 08:00~10:00 <br/>
                                             30 // 10:00~12:00<br/>
                                             40 // 12:00~14:00<br/>
                                             50 // 14:00~16:00<br/>
                                             60 // 16:00~18:00<br/>
                                             70 // 18:00~20:00<br/>
                                             80, // 20:00~21:00<br/>
                                             90, // 기타
 * @apiSuccess {String} list.visitDate 방문일정
 * @apiSuccess {String} list.createdOn 등록일
 * @apiSuccess {String} list.creatorName 상담직원
 * @apiSuccess {String} list.details 상담내용
 * @apiSuccess {Object[]} list.smsList 회원 목록
 * @apiSuccess {String} list.smsList.content  문자내용
 * @apiSuccess {String} list.smsList.smsId  문자식별키
 * @apiSuccess {String} list.smsList.recipientPhone  받는사람핸드폰번호
 * @apiSuccess {String} list.smsList.recipientName  받는사람이름
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
            "id": 26268,
            "type": "N",
            "status": "7",
            "name": "원지연:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2023-12-30T11:30:00",
            "createdOn": "2023-12-29T21:48:08",
            "creatorName": "박지수",
            "details": "[레테] 12/30(토) 11:30am Steven.T 원지연 010-2727-7972"
        },
        {
            "id": 26223,
            "type": "N",
            "status": "7",
            "name": "유병주:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2024-01-02T14:00:00",
            "createdOn": "2023-12-26T11:19:06",
            "creatorName": "손진",
            "details": "[레테] 12/27(수) 14:00pm AlexT 유병주 010-2798-4312>> 21년도 등록고객으로 재상담받기를 원하심. >>예약변경: 상으로 예약상담변경요청하심.  >> [레테] 01/02(화) 14:00pm AlexT 유병주 010-2798-4312"
        },
        {
            "id": 26222,
            "type": "N",
            "status": "7",
            "name": "조승인:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2023-12-27T09:30:00",
            "createdOn": "2023-12-26T11:07:51",
            "creatorName": "손진",
            "details": "[레테] 12/27(수) 9:30am OliviaT 조승인 010-3223-7499 "
        },
        {
            "id": 26200,
            "type": "N",
            "status": "7",
            "name": "소현진:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2023-12-21T20:30:00",
            "createdOn": "2023-12-21T14:13:59",
            "creatorName": "한시내",
            "details": "[레테] 12/21(목) 20:30pm AlexT 소현진 010-2520-6618"
        },
        {
            "id": 26185,
            "type": "N",
            "status": "7",
            "name": "안솔:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2023-12-20T17:30:00",
            "createdOn": "2023-12-20T07:28:48",
            "creatorName": "손진",
            "details": "[레테] 12/20(수) 17:30pm OliviaT 안솔 010-9319-6207"
        },
        {
            "id": 26160,
            "type": "P",
            "status": "7",
            "name": "최시연:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2023-12-18T18:30:00",
            "createdOn": "2023-12-18T17:18:13",
            "creatorName": "한시내",
            "details": "[레테] 12/18(월) 18:30pm SadieT 최시연님 010-4142-5723"
        },
        {
            "id": 26159,
            "type": "V",
            "status": "7",
            "name": "유서현:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": null,
            "createdOn": "2023-12-18T17:14:12",
            "creatorName": "박수현",
            "details": "예약없이 워크인으로 오셔서 레테없이 상담도와드림. 고3여학생, 어머니와 상의 후 12/22(금)까지 오시면 당일할인 적용해드리기로 함. 증명서(수강확인서,출석확인서)는 어머니 이름으로 발급 해드리기로 함."
        },
        {
            "id": 26153,
            "type": "N",
            "status": "7",
            "name": "윤소민:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2023-12-18T20:00:00",
            "createdOn": "2023-12-18T10:14:01",
            "creatorName": "박수현",
            "details": "[레테] 12/18(월) 8:00pm Alex.T 윤소민 010-3096-3175  예약확인전화 드릴때 화상수업도 가능한지 문의하심. 대면수업으로 진행하나 불가시엔 화상,전화수업으로 대체 가능하다고 말씀드림."
        },
        {
            "id": 26096,
            "type": "N",
            "status": "7",
            "name": "장이룸:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2023-12-13T20:30:00",
            "createdOn": "2023-12-11T16:49:46",
            "creatorName": "박지수",
            "details": "[레테] 12/13(수) 8:30pm Sadie.T 장이룸 010-3844-8052"
        },
        {
            "id": 26082,
            "type": "N",
            "status": "7",
            "name": "김민철:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2023-12-12T10:30:00",
            "createdOn": "2023-12-08T21:08:02",
            "creatorName": "한시내",
            "details": "[레테] 12/9(토) 10:30am SadieT 김민철님 010-7175-5317 >> 방문예약인지 몰랐다고 하시며 취소하심. 월요일에 시간 확인하고 다시 예약하겠다고 하심  >>상담 재예약주심(전화로 시간준수 안내완료) [레테] 12/12(화) 10:30am Olivia.T 김민철 010-7175-5317"
        }
    ],
    "totalCount": 476,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "totalPage": 48,
    "endPage": 10,
    "hasNext": true,
    "isFirst": true,
    "isLast": false,
    "hasPrev": false
}
 */