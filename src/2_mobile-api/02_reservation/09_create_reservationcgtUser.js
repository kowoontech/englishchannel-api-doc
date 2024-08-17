/**
 * @api {post} /mobile/v1/reservations/cgt 09. CGT 예약(회원)
 *
 * @apiDescription 모바일 > 메인 > cgt예약버튼 > 예약 취소 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName mobile_createCgt
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
 */