/**
 * @api {post} /admin/v1/sms/send 02. SMS 발송
 *
 * @apiDescription 공통 > SMS 발송
 *
 * @apiVersion 1.0.0
 * @apiName admin_createSendSms
 * @apiGroup 1. Admin API > 8. SMS
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/sms/send' \
 * -H "Content-Type: application/json" \
 * -d "{
     "senderPhone": 010-1111-2222,
     "content": "문자 받으시오!",
     "reservationDate": "2024-07-01 19:00",
     "recipients": [
          {
              "name": "RE-김동하",
              "phone": "010-3333-4444"
          },
          {
              "name": "RE-김하연",
              "phone": "010-5555-6666"
          },
          {
              "name": "RE-서민하",
              "phone": "010-7777-8888"
          }
     ]
}"
 * @apiParam (Body) {String} senderPhone 발신번호
 * @apiParam (Body) {String} content 내용
 * @apiParam (Body) {String} [reservationDate] 예약발송일때, 일시
 * @apiParam (Body) {Object[]} recipients 발송대상 목록
 * @apiParam (Body) {String} recipients.name 발송대상 이름
 * @apiParam (Body) {String} recipients.phone 발송대상 휴대폰번호
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */