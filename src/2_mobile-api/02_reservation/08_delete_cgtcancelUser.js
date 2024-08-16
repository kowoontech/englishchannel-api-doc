/**
 * @api {delete} /mobile/v1/reservations/cgt 08. CGT 예약취소(회원)
 *
 * @apiDescription 모바일 > 메인 > cgt예약버튼 > 예약 취소 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName mobile_cancelcgt
 * @apiGroup 2. Mobile API > 02. 예약
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/mobile/v1/reservations/cgt' \
 * -H "Content-Type: application/json" \
 * -d "{
           "schedules":[9525345,9525351]
       }"
 *
 * 
 * @apiParam (Body) {Number[]} schedules schedule 식별키
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 {
     "code": "api-9900",
     "message": "잘못된 요청입니다. 일정 취소는 2일 전까지만 가능합니다."
 }
 */