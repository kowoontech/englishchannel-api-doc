/**
 * @api {get} /admin/v1/statistics/sms/{id} 02. 발송 내역 상세 조회
 *
 * @apiDescription  통계보고서 > 평가현황 > 상세보기 > LDF 보기<br/>
 * id: 288497 사용해주세요
 * @apiVersion 1.0.0
 * @apiName admin_evaluation_ldf
 * @apiGroup 1. Admin API > 6. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/statistics/ldfs/2884975'
 *
 * @apiParam (Query) id LDF 식별키
 *
 * @apiSuccess {Number} id LDF 식별키
 * @apiSuccess {String} lesson lesson
 * @apiSuccess {String} contentSp Stress and Pronunciation
 * @apiSuccess {String} contentV Vocabulary
 * @apiSuccess {String} contentSg Sentence Structure & Grammar
 * @apiSuccess {String} contentC Comment
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": 288497,
    "lesson": "Jan. 2nd",
    "contentSp": "<p><span style=\"font-size: 20px\">impressed- 감명받은</span></p> <p><span style=\"font-size: 20px\">tired- 피곤한</span></p> <p><span style=\"font-size: 20px\">freshman- 1학년, 신입사원</span></p> <p><span style=\"font-size: 20px\">popular- 인기있는</span></p> <p><span style=\"font-size: 20px\">each other-&nbsp;</span><span style=\"font-size: 20px\">서로 서로&nbsp;</span></p> <p><span style=\"font-size: 20px\">outgoing- 외향적인</span></p> <p><span style=\"font-size: 20px\">hardworking- 성실한</span></p> <p><span style=\"font-size: 20px\">mutual- 서로의</span></p>",
    "contentV": "<p><span style=\"font-size: 20px\">&nbsp; socialize- 어울리다</span></p> <p><span style=\"font-size: 20px\">hit it off- 죽이 잘 맞다</span></p> <p><span style=\"font-size: 20px\">blow me away- 놀라게하다</span></p> <p><span style=\"font-size: 20px\">life time partner- 평생동반자</span></p> <p><span style=\"font-size: 20px\">manage- (겨우) 해내다</span></p> <p><span style=\"font-size: 20px\">conflict-갈등</span></p>",
    "contentSg": "<p>&nbsp;</p>",
    "contentC": "<p>&nbsp;</p>"
}
 */