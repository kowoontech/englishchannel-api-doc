/**
 * @api {get} /admin/v1/teachers/cgt 10. CGT 목록
 *
 * @apiDescription 강사관리 > CGT스케쥴 > 목록 조회<br/>
 *
 * @apiVersion 1.0.0
 * @apiName all_cgt
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'localhost:8080/admin/v1/teachers/cgt'
 *
 * @apiParam (Query) {String} [date] 예약일자 (yyyy-MM-dd)
 * @apiParam (Query) {String} [teacherId] 강사 식별키
 *
 *
 * @apiSuccess {Object[]} list CGT 목록
 * @apiSuccess {String} list.id CGT 식별키
 * @apiSuccess {String} [list.teacherId] 강사 식별키
 * @apiSuccess {String} list.teacherName 강사이름
 * @apiSuccess {String} list.date 예약일자
 * @apiSuccess {String} list.startTime 예약시간(시작,HH:mm)
 * @apiSuccess {String} list.endTime 예약시간(끝,HH:mm)
 * @apiSuccess {String} list.reservationLimit 정원
 * @apiSuccess {String} list.reservationCount 현재예약인원
 * @apiSuccess {Object[]} list.schedules 스케줄정보(일정)
 * @apiSuccess {String} list.schedules.id  스케줄 식별키
 * @apiSuccess {String} [list.schedules.date] 날짜(사용X, 위에 있는 '예약일자' 사용)
 * @apiSuccess {String} [list.schedules.startTime]  시작시간
 * @apiSuccess {String} [list.schedules.cgtTime]  CGT구분을 위한 컬럼
 * @apiSuccess {String} [list.schedules.type]  CGT구분을 위한 컬럼


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
            "id": 1,
            "teacherId": "M1723613351792159",
            "teacherName": "TEST",
            "date": "2024-08-16",
            "startTime": "09:30",
            "endTime": "10:30",
            "reservationLimit": 0,
            "reservationCount": 0,
            "schedules": [
                {
                    "id": 9525351,
                    "date": "2024-08-16",
                    "startTime": "09:30:00",
                    "cgtTime": "09:30:00",
                    "type": "CGT"
                },
                {
                    "id": 9525345,
                    "date": "2024-08-16",
                    "startTime": "10:00:00",
                    "cgtTime": "09:30:00",
                    "type": "CGT"
                }
            ]
        }
    ],
    "totalCount": 1,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "endPage": 1,
    "totalPage": 1,
    "hasPrev": false,
    "hasNext": false,
    "isFirst": true,
    "isLast": true
}
 */