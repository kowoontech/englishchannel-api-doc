/**
 * @api {get} /admin/v1/reservations/report/{reservationId} 02. 학사보고서조회
 *
 * @apiDescription 회원관리 > 학사보고서<br/>
 * 회원관리 > 학사보고서 > 수정/등록 시 사용 (예약식별키, 예약일,시간은 고정 출력)
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserOrder
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/orders/O1374064016311096'
 *
 * @apiParam (Path) {String} 예약id 식별키
 * 
 * @apiSuccess {long} id 예약식별키
 * @apiSuccess {String} date 예약일
 * @apiSuccess {String} startTime 시작시간
 * @apiSuccess {String} endTime 종료시간
 * @apiSuccess {String} attendanceStatus 참석여부(Y:출석 , N:결석, R:예약)
 * @apiSuccess {String} report 학사보고서내용
 * @apiSuccess {String} userName 학생명
 * @apiSuccess {String} courseName 강의명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": 1317368,
    "date": "2018-01-04 (Thu)",
    "startTime": "12:00",
    "endTime": "12:30",
    "attendanceStatus": "N",
    "report": "TEST",
    "userName": "RE-노희은",
    "courseName": "NEW PT 24회 3개월"
}
 */