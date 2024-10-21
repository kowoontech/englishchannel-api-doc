/**
 * @api {post} /admin/v2/sms/send 04. SMS 발송
 *
 * @apiDescription 공통 > SMS 발송
 *
 * @apiVersion 1.0.0
 * @apiName admin_createSendSms2
 * @apiGroup 1. Admin API > 08. SMS
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v2/sms/send' \
 * -H "Content-Type: application/json" \
 * -d "{
     "senderPhone": "02-2082-1105",
     "content": "문자 받으시오!",
     "reservationDate": "2024-07-01 19:00",
     "recipients": [
          {
              "id": "M1394086415674055"
          },
          {
              "id": "M1394086415674056"
          }
     ]
}"
 * @apiParam (Body) {String} [senderPhone] 발신번호 (필요 없음. 어떤 번호를 입력해도 02-2082-1105로 발송됨)
 * @apiParam (Body) {String} content 내용
 * @apiParam (Body) {String} [reservationDate] 예약발송일때, 일시
 * @apiParam (Body) {String} sendType 문자타입 (S: SMS / L :LMS)
 * @apiParam (Body) {Object[]} recipients 발송대상 목록
 * @apiParam (Body) {String} [recipients.id] 발송대상 아이디
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */