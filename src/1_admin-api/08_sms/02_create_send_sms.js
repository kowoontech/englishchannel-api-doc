/**
 * @api {post} /admin/v1/sms/send 02. SMS 발송
 *
 * @apiDescription 공통 > SMS 발송
 *
 * @apiVersion 1.0.0
 * @apiName admin_createSendSms
 * @apiGroup 1. Admin API > 08. SMS
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/sms/send' \
 * -H "Content-Type: application/json" \
 * -d "{
     "senderPhone": "02-2082-1105",
     "content": "문자 받으시오!",
     "reservationDate": "2024-07-01 19:00",
     "recipients": [
          {
              "name": "RE-김동하",
              "phone": "010-3333-4444",
              "email": "kim@naver.com"
          },
          {
              "name": "RE-김하연",
              "phone": "010-5555-6666",
              "email": "kim2@naver.com"
          },
          {
              "name": "RE-서민하",
              "phone": "010-7777-8888",
              "email": "ha@naver.com"
          }
     ]
}"
 * @apiParam (Body) {String} [senderPhone] 발신번호 (필요 없음. 어떤 번호를 입력해도 02-2082-1105로 발송됨)
 * @apiParam (Body) {String} content 내용
 * @apiParam (Body) {String} [reservationDate] 예약발송일때, 일시
 * @apiParam (Body) {String} sendType 문자타입 (S: SMS / L :LMS)
 * @apiParam (Body) {Object[]} recipients 발송대상 목록
 * @apiParam (Body) {String} [recipients.name] 발송대상 이름
 * @apiParam (Body) {String} recipients.email 발송대상 이메일주소 
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */