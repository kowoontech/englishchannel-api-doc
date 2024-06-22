/**
 * @api {get} /admin/v1/consultations 01. 상담관리- 상담고객
 *
 * @apiDescription 회원관리 > 상담관리 > 상담고객<br/>
 *  모든 파라미터는 안넘기면 전체
 *  파마미터의 [전체] checkbox 선택 시 나머지 checkbox 선택 제거
 *
 * @apiVersion 1.0.0
 * @apiName all_consultation
 * @apiGroup 1. Admin API > 4. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/consultations
 * -H "Content-Type: application/json" \
 * -d "{
     "createDateFrom" : "2013-01-01",
     "createDateTo" : "2023-01-02",
     "visitDateFrom" :"2013-07-01",
     "visitDateTo" : "2023-02-01",
     "consultationType" :["N","P"],
     "search" :"name",
     "keyword" : "임"
}"

 * @apiParam (Body) {String} createDateFrom 등록일(시작)
 * @apiParam (Body) {String} createDateTo 등록일(끝)
 * @apiParam (Body) {String} visitDateFrom 방문예약일(시작)
 * @apiParam (Body) {String} visitDateFrom 방문예약일(끝)
 * @apiParam (Body) {String} consultationType 상담구분[P: 전화상담,V: 방문상담,K: 카카오채널,N: 네이버예약]
 * @apiParam (Body) {String} statuses 처리상태[  WAITING("3")대기,NO_CONTACT("4")컨택금지,UNVISITED("5"),RESERVED("6"),NOT_REGISTERED("7"),REGISTERED("8"),NO_SHOW("9"),MISSED("10")]
 * @apiParam (Body) {String} search 검색구분[ name:이름, phone: 전화번호 , details :상담내용]
 * @apiParam (Body) {String} keyword 검색내용

 * @apiSuccess {Object[]} list 회원 목록
 * @apiSuccess {String} list.id 예약 식별키
 * @apiSuccess {String} list.type (P:전화상담, V:방문상담, K:카카오채널, N:네이버예약, F:온라인상담, L:무료레벨테스트)
 * @apiSuccess {String} list.status 처리상태 ( WAITING("3"대기), NO_CONTACT("4"컨택금지), UNVISITED("5"),RESERVED("6"),NOT_REGISTERED("7"), REGISTERED("8"),NO_SHOW("9"), MISSED("10"),)
 * @apiSuccess {String} list.name 회원명
 * @apiSuccess {String} list.phone 전화번호
 * @apiSuccess {String} list.company 회사/직장명
 * @apiSuccess {String} list.callTime 통화시간
 * @apiSuccess {Number} list.visitDate 방문일정
 * @apiSuccess {Number} list.createdOn 등록일
 * @apiSuccess {Number} list.creatorName 상담직원
 * @apiSuccess {Number} list.details 상담내용

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
            "id": "22475",
            "type": "P",
            "status": "8",
            "name": "임수진:등록완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2023-01-02T16:00:00",
            "createdOn": "2023-01-02T14:51:31",
            "creatorName": "한시내",
            "details": "[레테] 1/2(월) 16:00 Alex.T 임수진님 010-5229-9799"
        },
        {
            "id": "21865",
            "type": "P",
            "status": "8",
            "name": "임정희:등록완료",
            "phone": null,
            "company": null,
            "callTime": "50",
            "visitDate": "2022-10-31T17:00:00",
            "createdOn": "2022-10-28T14:32:37",
            "creatorName": "장지영",
            "details": "[레테] 10/31(월) 17:00 ,Adam T 임정희님 010-7191-4866"
        },
        {
            "id": "20993",
            "type": "N",
            "status": "8",
            "name": "임은옥:등록완료",
            "phone": null,
            "company": "모아래 어린이집",
            "callTime": null,
            "visitDate": "2022-08-06T17:30:00",
            "createdOn": "2022-08-06T14:08:22",
            "creatorName": "고연정",
            "details": "[LEVEL TEST] 08/06(토) 17:30 pm Erin T 임은옥 010-2106-9311 "
        },
        {
            "id": "20674",
            "type": "N",
            "status": "8",
            "name": "임세은:등록완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2022-07-08T18:00:00",
            "createdOn": "2022-07-06T07:09:51",
            "creatorName": "천지은",
            "details": "*네이버인입 7/8(금) 오후4시로 예약 잡으심 > 확인차 연락드렸으나 부재중  7/9(금) 6:00pm Level Test. Alex T. 010-5851-4409"
        },
        {
            "id": "20240",
            "type": "N",
            "status": "7",
            "name": "임다예:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2022-06-04T14:30:00",
            "createdOn": "2022-06-01T17:53:09",
            "creatorName": "최지혜",
            "details": "* 네이버예약 -> 전화상담 간단히 진행 * 자세한 내용 아래 상담이력 참조 "
        },
        {
            "id": "19949",
            "type": "N",
            "status": "9",
            "name": "임지영:NOSHOW",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2022-05-12T18:00:00",
            "createdOn": "2022-05-06T09:50:09",
            "creatorName": "권혁인",
            "details": "[LEVEL TEST]  - 네이버 예약 인입 - 임지영님 \t010-9534-1135 - 5/12(목) 18:00 Alex T"
        },
        {
            "id": "19846",
            "type": "N",
            "status": "7",
            "name": "임지현:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2022-04-25T19:30:00",
            "createdOn": "2022-04-25T15:17:48",
            "creatorName": "천지은",
            "details": "[신규 상담] - 현재 직장인, 외국계로 추후 이직 희망하셔서 영어 공부 필요하다고 하심 - 수강료 / 강사 퀄리티 중요시 하시는 분 - lv 500-3 by Alex.T(실제 실력보다 점수 후하게 준듯 한 느낌) - 단어와 단어를 나열하는 수준이라 본인 생각에는 문장으로 수월하게 말하는 연습 하고 싶다고 하심 - 초반에 한인 선생님 위주로 수업 하시면서 어느정도 실력 향상 되었을 때 원어민T로 넘어가라고 권해드림 - JE, AISAC +, CUBE 500-1 권해드렸고, 큐브가 제일 맘에 든다고 하셨음 - 3개월 바짝 해보시라고 권유드렸으나 조금 더 생각해보겠다고 망설이셔서 좀 더 생각해보시고 연락주시라 함 - 추후 전화 한번 드려보면 좋을 듯 함   -------------------------------------------- [level test] 네이버 인입 \t임지현  \t010-9158-0992 4/25 7:30pm Alex.T"
        },
        {
            "id": "19645",
            "type": "P",
            "status": "7",
            "name": "임세현:상담완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2022-03-30T17:30:00",
            "createdOn": "2022-03-30T17:09:17",
            "creatorName": "이국화",
            "details": "- 전화/당일상담 요청하심 - 5:30PM AlexT 로 예약 - 2명 방문예정"
        },
        {
            "id": "19631",
            "type": "P",
            "status": "8",
            "name": "임성령:등록완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2022-03-30T09:00:00",
            "createdOn": "2022-03-29T13:23:56",
            "creatorName": "권혁인",
            "details": "[레테예약] 3/30(수) 9am Brett T."
        },
        {
            "id": "19431",
            "type": "P",
            "status": "8",
            "name": "임준영:등록완료",
            "phone": null,
            "company": null,
            "callTime": null,
            "visitDate": "2022-05-09T18:00:00",
            "createdOn": "2022-03-07T18:58:39",
            "creatorName": "이국화",
            "details": "- 영어회화/자기개발 목적 - 3/10(목) 6PM StevenT 레테예약  >> 전화로 다시예약 5/09(월) 6:00PM steven T"
        }
    ],
    "totalCount": 65,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "endPage": 7,
    "totalPage": 7,
    "startPage": 1,
    "hasNext": false,
    "hasPrev": false,
    "isFirst": true,
    "isLast": true
}
 */