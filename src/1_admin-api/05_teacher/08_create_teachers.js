/**
 * @api {post} /admin/v1/teachers 08. 강사 등록
 *
 * @apiDescription 강사관리 > 강사등록 <br/>
 * 동일 loginID가 존재로 에러 발생 시 알려주세요. <br/>
 * 아이디 입력하지 마세요
 *
 * @apiVersion 1.0.0
 * @apiName admin_createTeacher
 * @apiGroup 1. Admin API > 5. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/teachers' \
 * -H "Content-Type: application/json" \
 * -d "{
           "name":"zzzz",
           "firstNameEn":"firstNameEn4",
           "lastNameEn":"lastNameEn4",
           "password":"password1",
           "workStartDate":"2017-02-03",
           "workTime":"SP_10",
           "workType":"C",
           "partnerTeacherId":"500632",
           "teacherActive" : true,
           "email" : "email1",
           "teacherType" : "HT"
       }"
 *
 *
 * 
 * @apiParam (Body) {String} [name] 이름
 * @apiParam (Body) {String} [firstNameEn] 영문 이름(이름)
 * @apiParam (Body) {String} lastNameEn 영문 이름(성)
 * @apiParam (Body) {String} lastNameEn 영문 이름(성)
 * @apiParam (Body) {String} lastNameEn 영문 이름(성)
 * @apiParam (Body) {String} email 이메일
 * @apiParam (Body) {String} [password] 비밀번호
 * @apiParam (Body) {String} loginId 로그인한 아이디가 들어가니 값 넣지마세요
 * @apiParam (Body) {String} gender 성별 [M 남 , F 여]
 * @apiParam (Body) {String} [workStartDate] 근무시작일
 * @apiParam (Body) {String} [teacherType] 구분 [HT,LT]
 * @apiParam (Body) {String} workTime 근무시간 [AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4]
 * @apiParam (Body) {String} workType 근무타입 [A, C]
 * @apiParam (Body) {String} partnerTeacherId 파트너강사
 * @apiParam (Body) {String} [teacherActive] 활동여부 [true/false]
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */