/**
 * @api {get} /admin/v1/users/{id}/ldfs/{ldfId} 02. 회원 LDF 상세 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > LDF 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserLdf
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http:localhost:8080/admin/v1/users/M1672193890143260/ldfs/288497'
 *
 * @apiParam (Path) {String} LDF 식별키
 *
 * @apiSuccess {Long} id ldf 식별키 (이름 옆에 표시)
 * @apiSuccess {String} lesson lesson
 * @apiSuccess {String} date 수업일  (yyyy-mm-dd (EEE))
 * @apiSuccess {String} startTime 수업시작시간
 * @apiSuccess {String} endTime 수업끝나는시간
 * @apiSuccess {String} teacherName 강사명
 * @apiSuccess {String} contentSp Stress and Pronunciation
 * @apiSuccess {String} contentV Vocabulary
 * @apiSuccess {String} contentSg Sentence Structure & Grammar
 * @apiSuccess {String} contentC Comment
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
     "id": 288497,
     "lesson": "Jan. 2nd",
     "date": "2023-01-02 (Mon)",
     "startTime": "08:30",
     "endTime": "09:00",
     "teacherName": "임정은",
     "contentSp": "<p><span style=\"font-size: 20px\">impressed- 감명받은</span></p> <p><span style=\"font-size: 20px\">tired- 피곤한</span></p> <p><span style=\"font-size: 20px\">freshman- 1학년, 신입사원</span></p> <p><span style=\"font-size: 20px\">popular- 인기있는</span></p> <p><span style=\"font-size: 20px\">each other-&nbsp;</span><span style=\"font-size: 20px\">서로 서로&nbsp;</span></p> <p><span style=\"font-size: 20px\">outgoing- 외향적인</span></p> <p><span style=\"font-size: 20px\">hardworking- 성실한</span></p> <p><span style=\"font-size: 20px\">mutual- 서로의</span></p>",
     "contentV": "<p><span style=\"font-size: 20px\">&nbsp; socialize- 어울리다</span></p> <p><span style=\"font-size: 20px\">hit it off- 죽이 잘 맞다</span></p> <p><span style=\"font-size: 20px\">blow me away- 놀라게하다</span></p> <p><span style=\"font-size: 20px\">life time partner- 평생동반자</span></p> <p><span style=\"font-size: 20px\">manage- (겨우) 해내다</span></p> <p><span style=\"font-size: 20px\">conflict-갈등</span></p>",
     "contentSg": "<p>&nbsp;</p>",
     "contentC": "<p>&nbsp;</p>"
  }
 */