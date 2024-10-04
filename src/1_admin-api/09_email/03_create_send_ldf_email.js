/**
 * @api {post} /admin/v1/email/ldf/send 03. LDF Email 발송
 *
 * @apiDescription 공통 > Email 발송
 *
 * @apiVersion 1.0.0
 * @apiName admin_createSendLDFEmail
 * @apiGroup 1. Admin API > 09. Email
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/email/ldf/send' \
 * -H "Content-Type: application/json" \
 * -d "{
     "ldfId": 1234,
     "email": "zombi@languagecube.kr",
     "name": "조원빈",
     "title": "이메일 테스트!",
     "lesson": "이메일 테스트입니다.",
     "lessonDate": "이메일 테스트입니다.",
     "teacher": "teacher@languagecube.kr",
     "contentSp": "테스트",
     "contentV": "테스트",
     "contentSg": "테스트",
     "contentC": "테스트"
 }"
 * @apiParam (Body) {Number} ldfId ldf 식별자 
 * @apiParam (Body) {String} email 수신자 이메일 
 * @apiParam (Body) {String} name 수신자 이름
 * @apiParam (Body) {String} title 제목
 * @apiParam (Body) {String} lesson 강의 이름
 * @apiParam (Body) {String} lessonDate 강의 시간
 * @apiParam (Body) {String} teacher 강사명
 * @apiParam (Body) {String} contentSp Stress and Pronunciation에 들어갈 내용
 * @apiParam (Body) {String} contentV Vocabulary에 들어갈 내용
 * @apiParam (Body) {String} contentSg Sentence Structure & Grammar 에 들어갈 내용
 * @apiParam (Body) {String} contentC Comment 에 들어갈 내용
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */


