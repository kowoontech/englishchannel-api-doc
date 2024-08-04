/**
 * @api {get} /mobile/v1/main 01. 메인화면 데이터 조회
 *
 * @apiDescription 메인화면에 필요한 데이터 조회 <br/>
 * 로그인 필수 <br/>
 * 수강 목록
 *
 * @apiVersion 1.0.0
 * @apiName mobile_getMainData
 * @apiGroup 2. Mobile API > 01. 메인
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/mobile/v1/main' \
 * -H "Authorization: 2191d3aa-d33d-4677-9da0-44556277ab39"
 * 
 * @apiSuccess {Object[]} courses 수강 목록
 * @apiSuccess {Number} courses.id 수강 식별키
 * @apiSuccess {String} courses.productName 수강명
 * @apiSuccess {String} courses.startDate 수강 시작일 (yyyy-MM-dd)
 * @apiSuccess {String} courses.endDate 수강 종료일 (yyyy-MM-dd)
 * @apiSuccess {Number} courses.lessonCount 레슨 횟수
 * @apiSuccess {Number} courses.remainCount 잔여 횟수
 * @apiSuccess {Number} courses.attendanceCount 완료 횟수
 * @apiSuccess {Number} courses.reservationCount 예약 횟수
 * @apiSuccess {Object[]} courses.reservations
 * @apiSuccess {Number} courses.reservations.id 예약 식별키
 * @apiSuccess {String} courses.reservations.date 예약일 (yyyy-MM-dd)
 * @apiSuccess {String} courses.reservations.startTime 시작 시간 (HH:mm)
 * @apiSuccess {String} courses.reservations.endTime 종료 시간 (HH:mm)
 * @apiSuccess {String} courses.reservations.teacherId 강사 식별키
 * @apiSuccess {String} courses.reservations.teacherName 강사명
 * @apiSuccess {Boolean} courses.reservations.isCancelable 취소 가능 여부
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
 *     "courses": [
 *         {
 *             "id": 71840,
 *             "productName": "NEW PT 24회 3개월",
 *             "startDate": "2023-01-09",
 *             "endDate": "2023-04-08",
 *             "lessonCount": 24.0,
 *             "remainCount": 0.0,
 *             "attendanceCount": 24.0,
 *             "reservationCount": 0.0,
 *             "reservations": []
 *         },
 *         {
 *             "id": 72884,
 *             "productName": "PTM (주2회 3개월)",
 *             "startDate": "2023-04-11",
 *             "endDate": "2023-07-20",
 *             "lessonCount": 26.0,
 *             "remainCount": 0.0,
 *             "attendanceCount": 26.0,
 *             "reservationCount": 0.0,
 *             "reservations": []
 *         }
 *     ]
 * }"
 */