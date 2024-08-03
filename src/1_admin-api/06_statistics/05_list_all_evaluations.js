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
 * @apiParam (Query) {String} [date] 수업일 [yyyy-MM-dd]
 * @apiParam (Query) {String} search  강사명



 * @apiSuccess {Number} detailId 목록 식별키 (상세보기)
 * @apiSuccess {String} teacherName 강사이름
 * @apiSuccess {String} teacherId  강사 식별키
 * @apiSuccess {Number} gradeCount 평가 인원수
 * @apiSuccess {Number} gradeAvg 평점
 * @apiSuccess {Number} tatal 총점
 * @apiSuccess {Object[]} ldfList 상세보기 내 LDF 목록
 * @apiSuccess {String} ldfList.id LDF 식별키
 * @apiSuccess {String} ldfList.date 수업일(날짜)
 * @apiSuccess {String} ldfList.startTime 수업일(시작시간)
 * @apiSuccess {String} ldfList.endTime 수업일(종료시간)
 * @apiSuccess {String} ldfList.userName 학습자
 * @apiSuccess {Number} ldfList.grade 별점
 * @apiSuccess {String} ldfList.evaluation 설명
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
[
    {
        "detailId": 1,
        "teacherName": "Tyler",
        "teacherId": "M1693558129675151",
        "gradeCount": 1,
        "gradeAvg": 4.0,
        "total": 4.0,
        "ldfList": [
            {
                "id": 362222,
                "date": "2023-12-01",
                "startTime": "19:30:00",
                "endTime": "20:00:00",
                "userName": "조예진",
                "grade": 4.0,
                "evaluation": "평가평가"
            },
            {
                "id": 362241,
                "date": "2023-12-01",
                "startTime": "20:30:00",
                "endTime": "21:00:00",
                "userName": "RE:이승민",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 362600,
                "date": "2023-12-04",
                "startTime": "18:30:00",
                "endTime": "19:00:00",
                "userName": "RE:박규은",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 362658,
                "date": "2023-12-04",
                "startTime": "21:30:00",
                "endTime": "22:00:00",
                "userName": "RE:문해화",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 362896,
                "date": "2023-12-05",
                "startTime": "19:00:00",
                "endTime": "19:30:00",
                "userName": "조예나",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 362922,
                "date": "2023-12-05",
                "startTime": "19:30:00",
                "endTime": "20:00:00",
                "userName": "RE:박규은",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 362946,
                "date": "2023-12-05",
                "startTime": "20:00:00",
                "endTime": "20:30:00",
                "userName": "김한나:환불",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 362970,
                "date": "2023-12-05",
                "startTime": "21:00:00",
                "endTime": "21:30:00",
                "userName": "RE:김윤아",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363208,
                "date": "2023-12-06",
                "startTime": "18:30:00",
                "endTime": "19:00:00",
                "userName": "RE:박규은",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363227,
                "date": "2023-12-06",
                "startTime": "19:30:00",
                "endTime": "20:00:00",
                "userName": "RE:이우열",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363251,
                "date": "2023-12-06",
                "startTime": "20:30:00",
                "endTime": "21:00:00",
                "userName": "RE:이수아",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363263,
                "date": "2023-12-06",
                "startTime": "21:30:00",
                "endTime": "22:00:00",
                "userName": "RE:김희진",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363492,
                "date": "2023-12-07",
                "startTime": "18:30:00",
                "endTime": "19:00:00",
                "userName": "김한나:환불",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363531,
                "date": "2023-12-07",
                "startTime": "19:30:00",
                "endTime": "20:00:00",
                "userName": "RE:박규은",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363551,
                "date": "2023-12-07",
                "startTime": "20:30:00",
                "endTime": "21:00:00",
                "userName": "RE:김윤아",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363830,
                "date": "2023-12-08",
                "startTime": "18:30:00",
                "endTime": "19:00:00",
                "userName": "RE:박규은",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363869,
                "date": "2023-12-08",
                "startTime": "20:30:00",
                "endTime": "21:00:00",
                "userName": "방수윤",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363896,
                "date": "2023-12-08",
                "startTime": "21:30:00",
                "endTime": "22:00:00",
                "userName": "RE:김소이",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 363981,
                "date": "2023-12-09",
                "startTime": "14:30:00",
                "endTime": "15:00:00",
                "userName": "김이은",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 364240,
                "date": "2023-12-11",
                "startTime": "18:30:00",
                "endTime": "19:00:00",
                "userName": "RE:박규은",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 364288,
                "date": "2023-12-11",
                "startTime": "21:30:00",
                "endTime": "22:00:00",
                "userName": "최서영",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 364567,
                "date": "2023-12-12",
                "startTime": "19:00:00",
                "endTime": "19:30:00",
                "userName": "조예진",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 364591,
                "date": "2023-12-12",
                "startTime": "19:30:00",
                "endTime": "20:00:00",
                "userName": "RE:박규은",
                "grade": 0.0,
                "evaluation": null
            },
            {
                "id": 364632,
                "date": "2023-12-12",
                "startTime": "21:30:00",
                "endTime": "22:00:00",
                "userName": "양세오",
                "grade": 0.0,
                "evaluation": null
            },
 */