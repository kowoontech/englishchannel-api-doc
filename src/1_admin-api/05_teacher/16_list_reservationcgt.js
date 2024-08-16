/**
 * @api {get} /admin/v1/teachers/reservationCgt 16. CGT 예약자 목록
 *
 * @apiDescription 강사관리 > CGT스케줄 > 목록 > 예약자 <br/>
 *  예약자 인원 클릭 시 예약자 명단
 *
 * @apiVersion 1.0.0
 * @apiName admin_listcgtmember
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/reservationCgt' \
 * -H "Content-Type: application/json" \
 * -d "{
           "schedules":[9525345,9525351],
           "date":"2024-08-16",
           "cgtTime":"09:30:00",
           "teacherId":"M1723613351792159"
       }"
 *
 * 
 * @apiParam (Body) {Number[]} schedules schedule 식별키
 * @apiParam (Body) {String} date 날짜 (yyyy-MM-dd)
 * @apiParam (Body) {String} teacherId 강사식별키
 * @apiParam (Body) {String} cgtTime CGT시간(HH:mm:ss)
 *
 *

* @apiSuccess {String} userId 회원 식별키
* @apiSuccess {String} name 회원 이름
* @apiSuccess {String} date 날짜(yyyy-MM-dd)
* @apiSuccess {String} startTime CGT시작시간(시작,HH:mm:ss)
* @apiSuccess {String} endTime CGT종료시간(시작,HH:mm:ss)
* @apiSuccess {String} teacherId 강사 식별키
* @apiSuccess {Number[]} schedules 스케줄


 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200

 [
     {
         "userId": "1028237",
         "name": "신혜정(6)",
         "date": "2024-08-16",
         "startTime": "09:30:00",
         "endTime": "10:00:00",
         "teacherId": "M1723613351792159",
         "schedules": [
             9525345,
             9525351
         ]
     },
     {
         "userId": "1028238",
         "name": "이경란(6)",
         "date": "2024-08-16",
         "startTime": "09:30:00",
         "endTime": "10:00:00",
         "teacherId": "M1723613351792159",
         "schedules": [
             9525345,
             9525351
         ]
     },
     {
         "userId": "1028792",
         "name": "이영진(6)",
         "date": "2024-08-16",
         "startTime": "09:30:00",
         "endTime": "10:00:00",
         "teacherId": "M1723613351792159",
         "schedules": [
             9525345,
             9525351
         ]
     }
 ]
 */