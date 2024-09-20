/**
 * @api {get} /admin/v1/reservations/schedules 01. 스케줄 조회
 *
 * @apiDescription 강의시간표, 학사보고서
 *
 * @apiVersion 1.0.0
 * @apiName admin_listSchedules
 * @apiGroup 1. Admin API > 10. 스케줄
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/reservations/schedules?date=2023-12-23'
 * 
 * @apiParam (Query) date 조회할 날짜 (yyyy-MM-dd)
 *
 * @apiSuccess {Object[]} teachers 강사 목록
 * @apiSuccess {String} teachers.id 강사 식별키
 * @apiSuccess {String} teachers.name 강사명
 * @apiSuccess {Object[]} schedules 스케줄
 * @apiSuccess {String} schedules.time 시간 (HH:mm)
 * @apiSuccess {Object[]} schedules.reservations 예약 목록, 예약이 없으면 optional 필드는 모두 null
 * @apiSuccess {Number} [schedules.reservations.reservationId] 예약 식별키
 * @apiSuccess {String} schedules.reservations.teacherId 강사 식별키
 * @apiSuccess {String} schedules.reservations.teacherName 강사명
 * @apiSuccess {String} [schedules.reservations.userId] 회원 식별키
 * @apiSuccess {String} [schedules.reservations.userName] 회원명
 * @apiSuccess {String} [schedules.reservations.email] 이메일
 * @apiSuccess {String} [schedules.reservations.textbook] 교재
 * @apiSuccess {String} [schedules.reservations.status] 예약 상태 (Y: 출석, N: 결석, R: 예약)
 * @apiSuccess {String} [schedules.reservations.statusLabel] 예약 상태명 (출석, 결석, 예약)
 * @apiSuccess {Number} [schedules.reservations.courseId] 수강 식별키
 * @apiSuccess {Boolean} schedules.reservations.isRetakeRequired 재등록 필요 여부 (true: 재등록 필요)
 * @apiSuccess {Boolean} schedules.reservations.isReported 학사보고서 등록 여부 (true: 학사보고서 등록)
 * @apiSuccess {Object[]} schedules.teachers 강의가 오픈된 강사 목록
 * @apiSuccess {String} [schedules.teachers.id] 강사 식별키
 * @apiSuccess {String} [schedules.teachers.name] 강사명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
 *     "teachers": [
 *         {
 *             "id": "M1657064932771055",
 *             "name": "김나래"
 *         },
 *         {
 *             "id": "M1661138591404520",
 *             "name": "최태연"
 *         }
 *     ],
 *     "schedules": [
         {
             "time": "09:30",
             "teachers": [
                 {
                     "id": "M1657064932771055",
                     "name": "김나래"
                 },
                 {
                     "id": "M1661138591404520",
                     "name": "최태연"
                 },
                 {
                     "id": "M1698204875465368",
                     "name": "Olivia"
                 },
                 {
                     "id": "M1709859614116619",
                     "name": "Austin"
                 }
             ],
             "reservations": [
                 {
                     "reservationId": 2711097,
                     "teacherId": "M1657064932771055",
                     "teacherName": "김나래",
                     "userId": "M1703814296618972",
                     "userName": "나한나",
                     "email": "o0241@naver.com",
                     "textbook": "일상영어섀도잉",
                     "status": "Y",
                     "statusLabel": "출석",
                     "courseId": 76373,
                     "isRetakeRequired": true,
                     "isReported": false
                 },
 *             ]
 *         }
 *     ]
 * }"
 */