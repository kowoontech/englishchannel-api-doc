/**
 * @api {get} /mobile/v1/feedback 01.피드백 목록
 *
 * @apiDescription - 현재 날짜 기준으로 진행된 수업에 대한 예약 정보<br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName mobile_listFeedback
 * @apiGroup 2. Mobile API > 03. 레슨피드백
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/mobile/v1/feedback?courseId=32054'
 *
 * @apiParam (Query) {Number} courseId 수업식별키
 *
 * @apiSuccess {Number} id 예약식별키
 * @apiSuccess {String} date 예약일자
 * @apiSuccess {String} startTime 예약수업시간(시작)
 * @apiSuccess {String} endTime 예약수업시간(끝)
 * @apiSuccess {String} attendanceStatus 출결상태(Y:출석, N:결석 , R:예약)
 * @apiSuccess {String} teacherName 강사명
 * @apiSuccess {String} ldfYN ldf유무

 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "[
     {
         "id": 2614109,
         "date": "2024-01-03",
         "startTime": "06:00 PM",
         "endTime": "06:30 PM",
         "attendanceStatus": "Y",
         "teacherName": "Olivia1",
         "ldfYN": "N"
     },
     {
         "id": 2614108,
         "date": "2024-01-03",
         "startTime": "05:30 PM",
         "endTime": "06:00 PM",
         "attendanceStatus": "Y",
         "teacherName": "Olivia1",
         "ldfYN": "N"
     },
     {"
 */