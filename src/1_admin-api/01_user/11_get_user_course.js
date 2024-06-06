/**
 * @api {get} /admin/v1/users/{id}/courses/{courseId} 11. 회원 수강 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 수강 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserCourse
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1672401688362469/courses/75615'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {Number} courseId 수강 식별키
 * 
 * @apiSuccess {Number} id 수강 식별키
 * @apiSuccess {String} language 언어
 * @apiSuccess {String} name 수강명
 * @apiSuccess {Number} lessonCount 레슨횟수
 * @apiSuccess {Number} assignmentCount 배정횟수
 * @apiSuccess {Number} remainCount 잔여횟수
 * @apiSuccess {String} [countChangeReason] 레슨횟수 변경시사유
 * @apiSuccess {String} startDate 수강기간 시작일 (yyyy-mm-dd)
 * @apiSuccess {String} endDate 수강기간 종료일 (yyyy-mm-dd)
 * @apiSuccess {String} [dateChangeReason] 수강기간 변경시사유
 * @apiSuccess {String} teacherId 담임강사 실별키
 * @apiSuccess {String} [assistantTeacherId] 부담임강사 식별키
 * @apiSuccess {String} createdOn 등록일 (yyyy-mm-dd HH:mm:ss)
 * @apiSuccess {String} status 상태 (WAITING: 대기, NORMAL: 정상, CANCEL: 취소)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": 75615,
    "language": "영어",
    "name": "PTG (주2회 3개월)",
    "lessonCount": 50.0,
    "assignmentCount": 0.0,
    "remainCount": 50.0,
    "countChangeReason": "수강권추가구매",
    "startDate": "2023-12-30",
    "endDate": "2024-12-29",
    "dateChangeReason": "어플 사용을 위해 수강시작일 임시변경",
    "teacherId": "M1695013438115743",
    "assistantTeacherId": "M1681990831501448",
    "createdOn": "2023-12-30 14:32:36",
    "status": "NORMAL"
}
 */