/**
 * @api {get} /admin/v1/users/{id}/levelTests 29. 레벨 테스트 목록
 *
 * @apiDescription 회원관리 > 회원 목록 조회 >  회원 상세 조회> 테스트탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_list_LevelTest
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/1028151/levelTests'
 *
 * @apiParam (Path) {String} id 회원 식별키
 *
 * @apiSuccess {Object[]} levelTest 레벨 테스트 목록
 * @apiSuccess {Number} list.id 레벨 테스트 식별키
 * @apiSuccess {String} list.testStartTime 시험일자 (yyyy-mm-dd HH:mm:ss)
 * 
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "levelTest": [
        {
            "id": "6112",
            "testStartTime": "2022-01-12 12:22"
        },
        {
            "id": "6114",
            "testStartTime": "2022-01-13 12:22"
        },
        {
            "id": "6115",
            "testStartTime": "2022-01-14 12:22"
        },
        {
            "id": "6116",
            "testStartTime": "2022-01-17 12:22"
        },
        {
            "id": "6117",
            "testStartTime": "2022-01-18 12:22"
        },
        {
            "id": "6118",
            "testStartTime": "2022-01-19 12:22"
        }
    ]
}
 */