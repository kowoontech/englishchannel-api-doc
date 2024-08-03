/**
 * @api {post} /admin/v1/email/send 02. Email 발송
 *
 * @apiDescription 공통 > Email 발송
 *
 * @apiVersion 1.0.0
 * @apiName admin_createSendEmail
 * @apiGroup 1. Admin API > 09. Email
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/email/send' \
 * -H "Content-Type: application/json" \
 * -d "{
     "senderEmail": "webmaster@languagecube.kr",
     "title": "이메일 테스트!",
     "content": "이메일 테스트입니다.",
     "recipients": [
         {
             "name": "테스트",
             "email": "test@gmail.com"
         }
     ]
 }"
 * @apiParam (Body) {String} [senderEmail] 발신이메일 (필요 없음. 어떤 이메일을 입력해도 webmaster@languagecube.kr로 발송됨)
 * @apiParam (Body) {String} title 제목
 * @apiParam (Body) {String} content 내용
 * @apiParam (Body) {Object[]} recipients 발송대상 목록
 * @apiParam (Body) {String} [recipients.name] 발송대상 이름
 * @apiParam (Body) {String} recipients.email 발송대상 이메일
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */