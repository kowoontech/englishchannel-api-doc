/**
 * @api {get} /admin/v1/users/{id}/consultations 17. 회원 상담 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 상담 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserConsultations
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/consultations'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * 
 * @apiSuccess {Object[]} consultations 상담 목록
 * @apiSuccess {Number} consultations.id 상담 식별키
 * @apiSuccess {String} consultations.consultationDate 상담일시 (yyyy-mm-dd HH:mm)
 * @apiSuccess {String} consultations.type 구분
 * @apiSuccess {String} consultations.details 상담내용
 * @apiSuccess {String} consultations.creatorName 상담직원
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "consultations": [
        {
            "id": 6651,
            "consultationDate": "2013-08-16 07:00",
            "type": "기타",
            "details": "정세진 학생과 쌍둥이 자매.고3이며 대입 수시 면접 준비로 주2회 수업 나옴. 승무원 학교 갈 예정임.",
            "creatorName": "권정민"
        },
        {
            "id": 10895,
            "consultationDate": "2013-11-18 19:00",
            "type": "예약",
            "details": "12월 부터 오전 9:30 고정예약 요청하심.",
            "creatorName": "채인숙"
        },
        {
            "id": 13209,
            "consultationDate": "2014-01-06 10:00",
            "type": "예약",
            "details": "Christoph 강사랑 예약 피해달라 부탁 하심. ",
            "creatorName": "권정민"
        },
        {
            "id": 13429,
            "consultationDate": "2014-01-08 10:00",
            "type": "기타",
            "details": "12월 8회 커피 상품권 드림.",
            "creatorName": "권정민"
        },
        {
            "id": 18817,
            "consultationDate": "2014-05-12 11:30",
            "type": "예약",
            "details": "Juan 강사와 예약 피할것.",
            "creatorName": "권정민"
        },
        {
            "id": 21055,
            "consultationDate": "2014-06-26 19:00",
            "type": "예약",
            "details": "당분간 다른 일정으로 사정이 생겨서 수업 못나온다고 함. 이번주 토요일 수업 먼저 취소해달라고 했고, 수강 기간 & 횟수 확인 요청. 수강 기간도 3주 정도 남았고, 수업도 7회 남았으니 방문해서 홀딩 서류 작성하고 방학 중의 일정이 끝나면 다시 수업할 수 있도록 할 것을 권유. 일단 알겠다고 함",
            "creatorName": "편효린"
        },
        {
            "id": 21788,
            "consultationDate": "2014-07-09 12:00",
            "type": "기타",
            "details": "월드컵 이벤트 당첨 1회 추가해드림.",
            "creatorName": "권정민"
        },
        {
            "id": 26914,
            "consultationDate": "2014-10-30 12:00",
            "type": "예약",
            "details": "예약하시고 계속 결석 하심.당분간 수업 오시기 힘드실 것 같다 말씀 하시며,홀딩 원하심. 겨울방학 12월중순부터 다시 컴백하시겠다 하심.",
            "creatorName": "권정민"
        }
    ]
}
 */