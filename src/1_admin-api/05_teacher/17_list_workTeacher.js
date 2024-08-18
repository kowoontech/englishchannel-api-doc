/**
 * @api {get} /admin/v1/teachers/worked 17. 기간별 강사 목록
 *
 * @apiDescription 강사관리 <br/>
 *  해당 기간에 일한 강사 목록
 *
 * @apiVersion 1.0.0
 * @apiName admin_listworkTeacher
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/worked?dateFrom=2023-01-01&dateTo=2023-01-31' \
 *
 *
 * @apiParam (Query) dateFrom 조회할 날짜 ~부터 (yyyy-MM-dd)
 * @apiParam (Query) dateTo 조회할 날짜 ~까지 (yyyy-MM-dd)


 * @apiSuccess {String} teacherId 강사식별키
 * @apiSuccess {String} name 강사이름


 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200

[
    {
        "teacherId": "M1515756140981038",
        "name": "임정은"
    },
    {
        "teacherId": "M1594795852631377",
        "name": "Steven"
    },
    {
        "teacherId": "M1660267538951028",
        "name": "Adam"
    },
    {
        "teacherId": "M1400118325784523",
        "name": "한가영"
    },
    {
        "teacherId": "M1487640799950353",
        "name": "Alex"
    },
    {
        "teacherId": "M1523939117926947",
        "name": "Airin"
    },
    {
        "teacherId": "M1661138591404520",
        "name": "최태연"
    },
    {
        "teacherId": "M1657064932771055",
        "name": "김나래"
    },
    {
        "teacherId": "M1649713933516571",
        "name": "황재희"
    }
]
 */