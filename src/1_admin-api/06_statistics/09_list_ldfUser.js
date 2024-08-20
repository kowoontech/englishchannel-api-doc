/**
 * @api {get} /admin/v1/statistics/evaluations/users 09. 평가한 학생 목록
 *
 * @apiDescription 통계보고서 > 평가현황 <br/>
 *  해당 기간에 평가한 학생 목록
 *
 * @apiVersion 1.0.0
 * @apiName admin_lisldfUser
 * @apiGroup 1. Admin API > 06. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/statistics/evaluations/users?dateFrom=2023-02-01&dateTo=2023-02-28' \
 *
 *
 * @apiParam (Query) dateFrom 조회할 날짜 ~부터 (yyyy-MM-dd)
 * @apiParam (Query) dateTo 조회할 날짜 ~까지 (yyyy-MM-dd)


 * @apiSuccess {String} userId 회원식별키
 * @apiSuccess {String} name 회원명


 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200

[
    {
        "userId": "M1672207477162387",
        "name": "최원보"
    },
    {
        "userId": "M1666947941196642",
        "name": "정보연"
    },
    {
        "userId": "M1676335706733128",
        "name": "이의종"
    },
    {
        "userId": "M1676620115349486",
        "name": "RE:손운룡"
    }
]
 */