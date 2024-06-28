/**
 * @api {get} /admin/v1/reservations/report/{reservationId} 02. 학사보고서조회
 *
 * @apiDescription 회원관리 > 학사보고서<br/>
 * 회원관리 > 학사보고서 > 수정/등록 시 사용
 *
 * @apiVersion 1.0.0
 * @apiName admin_getReport
 * @apiGroup 1. Admin API > 3. 학사보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/reservations/report/1317329'
 *
 * @apiParam (Path) {String} id 예약id 식별키
 * 
 * @apiSuccess {String} id 예약식별키
 * @apiSuccess {String} date 예약일
 * @apiSuccess {String} startTime 시작시간
 * @apiSuccess {String} endTime 종료시간
 * @apiSuccess {String} attendanceStatus 참석여부(Y:출석 , N:결석, R:예약)
 * @apiSuccess {String} todayLesson Today's Lesson
 * @apiSuccess {String} report 보고서(Lesson Content and Feedback)
 * @apiSuccess {String} nextLesson Next Lesson
 * @apiSuccess {String} userName 학생명
 * @apiSuccess {String} courseName 강의명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": 1317329,
    "date": "2018-01-03 (Wed)",
    "startTime": "07:30",
    "endTime": "08:00",
    "attendanceStatus": "Y",
    "report": "중간",
    "todayLesson": "처음",
    "nextLesson": "마지막",
    "userName": "전연호",
    "courseName": "PTM (주2회 6개월)"
}
 */