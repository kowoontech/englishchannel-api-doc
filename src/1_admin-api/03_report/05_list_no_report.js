/**
 * @api {get} /admin/v1/reservations/noreport 05. 학사보고서 미작성 목록 조회
 *
 * @apiDescription 회원관리 > 학사보고서 > 학사보고서 미작성 목록<br/>
 * 운영자 계정 : 회원관리 > 학사보고서 <br/>
 * 강사 계정 : 학사보고서 <br/>
 *
 * @apiVersion 1.0.0
 * @apiName listNoReport
 * @apiGroup 1. Admin API > 03. 학사보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/reservation/noreport?yearMonth=2023-01'
 *
 * @apiParam (Query) yearMonth 년월(yyyy-MM)
 *
 * @apiSuccess {Object[]} reports 학사 보고서 목록
 * @apiSuccess {String} reports.teacherId 강사 식별키(예약식별키)
 * @apiSuccess {String} reports.name 강사명
 * @apiSuccess {String} reports.total 전체 건수
 * @apiSuccess {Object[]} reports.noReports 날짜별 미작성 리스트
 * @apiSuccess {String} reports.noReports.date 날짜
 * @apiSuccess {String} reports.noReports.count 건수
 * @apiSuccess {String} reports.noReports.holiday 요일
 * @apiSuccess {Object[]} totals 합
 * @apiSuccess {Integer} totals.total 합
 * @apiSuccess {Object[]} totals.noReports 미작성 목록
 * @apiSuccess {String} totals.noReports.date 날짜
 * @apiSuccess {String} totals.noReports.count 건수
 * @apiSuccess {String} totals.noReports.holiday 요일
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 {
  "reports": [
    {
      "teacherId": "M1729308976238224",
      "name": "테스트강사",
      "total": 0,
      "noReports": [
        {"date": "2024-10-01", "count": 0, "holiday": 1},
        {"date": "2024-10-02", "count": 0, "holiday": 0},
        {"date": "2024-10-03", "count": 0, "holiday": 1},
        {"date": "2024-10-04", "count": 0, "holiday": 0},
        {"date": "2024-10-05", "count": 0, "holiday": 0},
        {"date": "2024-10-06", "count": 0, "holiday": 1},
        {"date": "2024-10-07", "count": 0, "holiday": 0},
        {"date": "2024-10-08", "count": 0, "holiday": 0},
        {"date": "2024-10-09", "count": 0, "holiday": 1},
        {"date": "2024-10-10", "count": 0, "holiday": 0},
        {"date": "2024-10-11", "count": 0, "holiday": 0},
        {"date": "2024-10-12", "count": 0, "holiday": 0},
        {"date": "2024-10-13", "count": 0, "holiday": 1},
        {"date": "2024-10-14", "count": 0, "holiday": 0},
        {"date": "2024-10-15", "count": 0, "holiday": 0},
        {"date": "2024-10-16", "count": 0, "holiday": 0},
        {"date": "2024-10-17", "count": 0, "holiday": 0},
        {"date": "2024-10-18", "count": 0, "holiday": 0},
        {"date": "2024-10-19", "count": 0, "holiday": 0},
        {"date": "2024-10-20", "count": 0, "holiday": 1},
        {"date": "2024-10-21", "count": 0, "holiday": 0},
        {"date": "2024-10-22", "count": 0, "holiday": 0},
        {"date": "2024-10-23", "count": 0, "holiday": 0},
        {"date": "2024-10-24", "count": 0, "holiday": 0},
        {"date": "2024-10-25", "count": 0, "holiday": 0},
        {"date": "2024-10-26", "count": 0, "holiday": 0},
        {"date": "2024-10-27", "count": 0, "holiday": 1},
        {"date": "2024-10-28", "count": 0, "holiday": 0},
        {"date": "2024-10-29", "count": 0, "holiday": 0},
        {"date": "2024-10-30", "count": 0, "holiday": 0},
        {"date": "2024-10-31", "count": 0, "holiday": 0}
      ]
    }
  ],
  "totals": [
    {
      "total": 0,
      "noReports": [
        {"date": "2024-10-01", "count": 0, "holiday": 1},
        {"date": "2024-10-02", "count": 1, "holiday": 0},
        {"date": "2024-10-03", "count": 3, "holiday": 1},
        {"date": "2024-10-04", "count": 0, "holiday": 0},
        {"date": "2024-10-05", "count": 0, "holiday": 0},
        {"date": "2024-10-06", "count": 0, "holiday": 1},
        {"date": "2024-10-07", "count": 0, "holiday": 0},
        {"date": "2024-10-08", "count": 0, "holiday": 0},
        {"date": "2024-10-09", "count": 0, "holiday": 1},
        {"date": "2024-10-10", "count": 0, "holiday": 0},
        {"date": "2024-10-11", "count": 0, "holiday": 0},
        {"date": "2024-10-12", "count": 0, "holiday": 0},
        {"date": "2024-10-13", "count": 0, "holiday": 1},
        {"date": "2024-10-14", "count": 0, "holiday": 0},
        {"date": "2024-10-15", "count": 0, "holiday": 0},
        {"date": "2024-10-16", "count": 0, "holiday": 0},
        {"date": "2024-10-17", "count": 0, "holiday": 0},
        {"date": "2024-10-18", "count": 0, "holiday": 0},
        {"date": "2024-10-19", "count": 0, "holiday": 0},
        {"date": "2024-10-20", "count": 0, "holiday": 1},
        {"date": "2024-10-21", "count": 0, "holiday": 0},
        {"date": "2024-10-22", "count": 0, "holiday": 0},
        {"date": "2024-10-23", "count": 0, "holiday": 0},
        {"date": "2024-10-24", "count": 0, "holiday": 0},
        {"date": "2024-10-25", "count": 0, "holiday": 0},
        {"date": "2024-10-26", "count": 0, "holiday": 0},
        {"date": "2024-10-27", "count": 0, "holiday": 1},
        {"date": "2024-10-28", "count": 0, "holiday": 0},
        {"date": "2024-10-29", "count": 0, "holiday": 0},
        {"date": "2024-10-30", "count": 0, "holiday": 0},
        {"date": "2024-10-31", "count": 0, "holiday": 0}
      ]
    }
  ],
  "teachers": [
    {"id": "M1729308976238224", "name": "테스트강사"},
    {"id": "M1400118325784523", "name": "한가영"},
    {"id": "M1729240753428900", "name": "박수현"},
    {"id": "M1594795852631377", "name": "Steven"},
    {"id": "M1695013438115743", "name": "서안나"},
    {"id": "M1657064932771055", "name": "김나래"},
    {"id": "M1661138591404520", "name": "최태연"},
    {"id": "M1681990831501448", "name": "정지은"},
    {"id": "M1713239402907750", "name": "박제은"},
    {"id": "M1698204875465368", "name": "Olivia"},
    {"id": "M1691559227102239", "name": "Sadie"},
    {"id": "M1709859614116619", "name": "Austin"}
  ]
}
 */