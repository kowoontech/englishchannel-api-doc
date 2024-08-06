/**
 * @api {post} /admin/v1/teachers/cgttimes 09. CGT 등록 가능 시간
 *
 * @apiDescription 강사관리 > CGT스케줄 > 등록 > 예약일시의 시간 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_list_cgtTime
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/teachers/cgttimes'
 * -H "Content-Type: application/json" \
 * -d "{
           "date":"2023-11-04",
           "teacherId":"M1695013438115743"
       }"

 * @apiParam (Body) {String} date 예약날짜(yyyy-MM-dd)
 * @apiParam (Body) {String} teacherId 강사 식별키
 *
 * @apiSuccess String[]  예약가능시간
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
[
    "06:30:00",
    "08:30:00",
    "09:00:00",
    "09:30:00",
    "10:00:00"
]
 */