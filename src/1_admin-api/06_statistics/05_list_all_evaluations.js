/**
 * @api {get} /admin/v1/statistics/evaluations 05. 평가 현황 목록 / 상세보기
 *
 * @apiDescription 평가현황 > <br/>
 * 통계보고서 > 평가현황 > 전체 목록 조회 + 상세보기
 *
 *
 * @apiVersion 1.0.0
 * @apiName all_evaluation
 * @apiGroup 1. Admin API > 06. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http:/admin/v1/statistics/evaluations?date=2023-12-04
 *
 * @apiParam (Query) {String} date 수업일 [yyyy-MM-dd]
 * @apiParam (Query) {String} [search]  강사명
 * @apiParam (Query) {String} keyword  검색구분(필수값: name)


 * @apiSuccess {String} teacherName 강사이름
 * @apiSuccess {String} teacherId  강사 식별키
 * @apiSuccess {Number} gradeCount 평가 인원수
 * @apiSuccess {Number} gradeAvg 평점
 * @apiSuccess {Number} tatal 총점
 * @apiSuccess {Number} date 검색시작일
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
[
    {
        "teacherName": "최태연",
        "teacherId": "M1661138591404520",
        "gradeCount": 9,
        "gradeAvg": 5.0,
        "total": 45.0,
        "date": "2023-02-01"
    },
    {
        "teacherName": "김나래",
        "teacherId": "M1657064932771055",
        "gradeCount": 1,
        "gradeAvg": 5.0,
        "total": 5.0,
        "date": "2023-02-01"
    },
    {
        "teacherName": "임정은",
        "teacherId": "M1515756140981038",
        "gradeCount": 1,
        "gradeAvg": 5.0,
        "total": 5.0,
        "date": "2023-02-01"
    },
    {
        "teacherName": "Adam",
        "teacherId": "M1660267538951028",
        "gradeCount": 1,
        "gradeAvg": 3.0,
        "total": 3.0,
        "date": "2023-02-01"
    }
]
 */