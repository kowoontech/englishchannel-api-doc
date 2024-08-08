/**
 * @api {get} /admin/v1/teachers 01. 강사목록 조회
 *
 * @apiDescription 강사관리 > <br/>
 *  제대로된 데이터가 별로 없어서 오류 가능성 높으니 계약기간 제외하고 테스트 해주세요
 *
 * @apiVersion 1.0.0
 * @apiName all_consultation
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/teachers?active=INACTIVE&type=LT&search=name&keyword=Da
 *
 * @apiParam (Query) {String} [contractDateFrom] 계약기간 [yyyy-MM-dd]
 * @apiParam (Query) {String} [contractDateTo]  계약기간[yyyy-MM-dd]
 * @apiParam (Query) {boolean} active 활동 (true/false) . 기본값 '활동(true)'으로
 * @apiParam (Query) {String} type 구분(HT, LT), 초기값 '전체'는 null
 * @apiParam (Query) {String} search 검색조건(ALL:전체name: 이름,loginId:아이디,email:이메일)
 * @apiParam (Query) {Number} keyword 검색내용
 * @apiParam (Query) {Number} limit 한페이지에 보여줄 강사 수
 * @apiParam (Query) {Number} page 현재 페이지

 * @apiSuccess {Object[]} list 강사 목록
 * @apiSuccess {String} list.userId 강사 식별키
 * @apiSuccess {String} list.type 구분(HT, LT)
 * @apiSuccess {String} list.teacherName  강사명
 * @apiSuccess {String} list.workTime 근무시간[AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4]
 * @apiSuccess {String} list.sort 순번
 * @apiSuccess {String} list.email 이메일
 * @apiSuccess {String} list.cellPhone 전화번호
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
            "userId": "M1695013438115743",
            "type": "HT",
            "teacherName": "서안나",
            "workTime": "AM_8",
            "sort": 28
        },
        {
            "userId": "M1681990831501448",
            "type": "HT",
            "teacherName": "정지은",
            "workTime": "PM_8",
            "sort": 36
        },
        {
            "userId": "M1665055086597885",
            "type": "HT",
            "teacherName": "정지경",
            "workTime": "PM_8",
            "sort": 40
        },
        {
            "userId": "M1661138591404520",
            "type": "HT",
            "teacherName": "최태연",
            "workTime": "PM_16",
            "sort": 35
        },
        {
            "userId": "M1657064932771055",
            "type": "HT",
            "teacherName": "김나래",
            "workTime": "PM_16",
            "sort": 30
        },
        {
            "userId": "M1655101918032060",
            "type": "HT",
            "teacherName": "홍성호",
            "workTime": "PM_8",
            "sort": 9
        },
        {
            "userId": "M1649713933516571",
            "type": "HT",
            "teacherName": "황재희",
            "workTime": "PM_16",
            "sort": 60
        },
        {
            "userId": "M1643076224863648",
            "type": "HT",
            "teacherName": "한윤경",
            "workTime": "PM_8",
            "sort": 8
        },
        {
            "userId": "M1611718455286391",
            "type": "HT",
            "teacherName": "김영지",
            "workTime": "PM_16",
            "sort": 6
        },
        {
            "userId": "M1610099206577796",
            "type": "HT",
            "teacherName": "최다정",
            "workTime": "AM_8",
            "sort": 20
        }
    ],
    "totalCount": 103,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "totalPage": 11,
    "endPage": 10,
    "hasNext": true,
    "hasPrev": false,
    "isFirst": true,
    "isLast": false
}
 */