/**
 * @api {get} /admin/v1/users/{id}/courses 04. 회원 과정 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserCourses
 * @apiGroup 1. Admin API > 1. 회원관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1672401688362469/courses'
 *
 * @apiParam (Path) {String} id 회원 식별키
 *
 * @apiSuccess {Object[]} courses 과정 목록
 * @apiSuccess {Number} courses.id 과정 식별키
 * @apiSuccess {String} courses.name 과정명
 * @apiSuccess {Number} courses.lessonCount 레슨횟수
 * @apiSuccess {Number} courses.assignmentCount 배정횟수
 * @apiSuccess {Number} courses.remainCount 잔여횟수
 * @apiSuccess {String} courses.startDate 수강기간 시작일
 * @apiSuccess {String} courses.endDate 수강기간 종료일
 * @apiSuccess {String} courses.teacherName 담임강사명
 * @apiSuccess {String} courses.assistantTeacherName 부담임강사명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "courses": [
        {
            "id": 71840,
            "name": "NEW PT 24회 3개월/24.0회",
            "lessonCount": 24.0,
            "assignmentCount": 24.0,
            "startDate": "2023-01-09",
            "endDate": "2023-04-08",
            "teacherName": "Airin",
            "assistantTeacherName": "Adam",
            "remainCount": 0.0
        },
        {
            "id": 72884,
            "name": "PTM (주2회 3개월)/26.0회",
            "lessonCount": 26.0,
            "assignmentCount": 26.0,
            "startDate": "2023-04-11",
            "endDate": "2023-07-20",
            "teacherName": "Adam",
            "assistantTeacherName": "Daniel",
            "remainCount": 0.0
        },
        {
            "id": 73912,
            "name": "PTM (주2회 3개월)/26.0회",
            "lessonCount": 26.0,
            "assignmentCount": 26.0,
            "startDate": "2023-07-19",
            "endDate": "2024-01-28",
            "teacherName": "한가영",
            "assistantTeacherName": "김나래",
            "remainCount": 0.0
        },
        {
            "id": 75615,
            "name": "PTG (주2회 3개월)/50.0회",
            "lessonCount": 50.0,
            "assignmentCount": 0.0,
            "startDate": "2023-12-30",
            "endDate": "2024-12-29",
            "teacherName": "서안나",
            "assistantTeacherName": "정지은",
            "remainCount": 50.0
        }
    ]
}
 */