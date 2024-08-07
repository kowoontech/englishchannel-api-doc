/**
 * @api {get} /admin/v1/statistics/sms/{id}/target 04. 대상자 보기
 *
 * @apiDescription  통계보고서 > sms전송현황 > 목록 조회> 대상자보기<br/>
 *
 * @apiVersion 1.0.0
 * @apiName admin_getSmsTarget
 * @apiGroup 1. Admin API > 06. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/statistics/sms/5/target?search=recipientName&keyword=김민국8'
 *
 * @apiParam (Query) id sms 식별키
 * @apiParam (Body) search 검색조건 (전체: ALL, 이름:recipientName, 이메일: email)
 * @apiParam (Body) keyword 검색내용
 *
 * @apiSuccess {Object[]} list 수취인 정보
 * @apiSuccess {String} list.id 수취인 식별키
 * @apiSuccess {String} target.email 사용
 * @apiSuccess {String} target.recipientPhone 수취인 번호
 * @apiSuccess {String} target.recipientName 수취인 이름
 * @apiSuccess {String} target.status 발송상태 (WAITING: 대기, SUCCESS:성공, FAIL: 실패)
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
{
    "list": [
        {
            "listNumber": 1,
            "id": 9,
            "email": "이메일8@naver.com",
            "recipientPhone": "010-2321-2312",
            "recipientName": "김민국8",
            "status": "FAIL"
        }
    ],
    "totalCount": 1,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "totalPage": 1,
    "endPage": 1,
    "hasNext": false,
    "isFirst": true,
    "isLast": true,
    "hasPrev": false
}
 */