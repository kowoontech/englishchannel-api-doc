/**
 * @api {get} /admin/v1/statistics/evaluations/ldf 10. 강사별 평가 상세보기
 *
 * @apiDescription 통계보고서 > 평가현황 > 상세보기 <br/>
 *  해당 기간에 평가된 ldf 정보
 *
 * @apiVersion 1.0.0
 * @apiName admin_lisldfinfo
 * @apiGroup 1. Admin API > 06. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/statistics/evaluations/ldf?date=2023-01-01&teacherId=M1661138591404520' \
 *
 *
 * @apiParam (Query) date 조회하려는 월(평가현황목록의 date,yyyy-MM-dd )
 * @apiParam (Query) teacherId 조회할 강사식별키


 * @apiSuccess {String} date 수업일
 * @apiSuccess {String} startTime 수업시작시간
 * @apiSuccess {String} endTime 수업종료시간
 * @apiSuccess {Number} grade 별점
 * @apiSuccess {String} evaluation 설명
 * @apiSuccess {String} userId 회원식별키
 * @apiSuccess {String} userName 학습자
 * @apiSuccess {Object[]} ldf ldf 정보
 * @apiSuccess {Number} ldf.id ldf식별키
 * @apiSuccess {String} ldf.lesson lesson
 * @apiSuccess {String} ldf.contentSp Stress and Pronunciation
 * @apiSuccess {String} ldf.contentV Vocabulary
 * @apiSuccess {String} ldf.contentSg Sentence Structure & Grammar
 * @apiSuccess {String} ldf.contentC Comment


 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200

[
    {
        "date": "2023-01-02",
        "startTime": "19:30",
        "endTime": "20:00",
        "grade": 5.0,
        "evaluation": "수준에 적당한 방식으로 수업이 진행되어 도움이 되었습니다.",
        "userId": "M1672207477162387",
        "userName": "최원보",
        "ldf": {
            "id": 288658,
            "lesson": "왕초보회화 01-02",
            "contentSp": "<p>go to +장소&nbsp;</p> <p><br></p> <p>i'll take this&nbsp;</p> <p><br></p> <p>i see my girl friend&nbsp;</p> <p>그냥 친구 i meet some friends&nbsp;</p> <p>see/watch&nbsp;</p> <p>see 내가 보려고하지 않아도 보임 목적의식 없음</p> <p>watch&nbsp; 내가 보려고 하는 것&nbsp;</p> <p>look 내가 목적의식 있음&nbsp;</p> <p><br></p> <p>주어 동사 사람목적어 사물목적어 4형식&nbsp;</p> <p><br></p> <p>i so like english (x) 어순 주어 동사 목적어 장소 방향 시간&nbsp;</p> <p>부사는 수식하는 형용사,동사 앞에나 뒤에&nbsp;</p> <p>i like english <span style=\"color: #ff007f\">so much</span>&nbsp;</p> <p><br></p> <p>do you have a job?</p> <p>what do you work? &gt;&gt; what do you do?&nbsp;</p> <p>what's your job? direct&nbsp;</p> <p><br></p>",
            "contentV": "<p>sleep (x) &gt;&gt; go to bed&nbsp;</p> <p>i go to bed at 2 <span style=\"color: #ff007f\">in the morning&nbsp;</span></p> <p>i reservation (X) i book a ticket&nbsp;</p> <p>스튜어디스 (x) &gt;&gt; flight attendant</p> <p>i book a flight ticket</p> <p>for round trip 왕복&nbsp;</p> <p><br></p> <p>i take a bus go to disneyland (x) 동사가 2개&nbsp;</p> <p>i take a bus to go to disneyland (o)&nbsp;</p> <p>can 할 수 있다&nbsp;</p> <p><br></p> <p>~해야한다 하는게 좋겠다 should !!!</p> <p>you should take a bus here to go to disney&nbsp;</p> <p>&gt;&gt; where <span style=\"color: #ff007f\">should</span> i take a bus to go to disney?</p> <p>&nbsp;should &lt;&lt;<have to<<<<<must<have=\"\" to=\"\" 해야=\"\" 해=\"\" <<<<must=\"\" 안하면=\"\" 안돼 <=\"\" p=\"\"></have></p> <p>should 개인적인 조언&nbsp;</p> <p>have to 내가 결정하는 게 아닌 남이 시키는 것&nbsp;</p> <p>be supposed to ~하기로 약속했었다&nbsp;</p> <p>you were supposed to meet me at 2 ~하기로 했었다&nbsp;</p> <p><br></p> <p>~안 해야 돼 /하면 안 돼&nbsp;</p> <p>don't have to 너 안 해도 괜찮아&nbsp;</p> <p>shouldn't 안 하는 게 좋아&nbsp;</p> <p>are not supposed to 전통/관습/규칙 안 돼&nbsp;</p> <p><br></p> <p>give someone a discount&nbsp;</p> <p>can you give me a discount&nbsp;</p> <p><br></p> <p><br></p>",
            "contentSg": "<p>&nbsp;</p>",
            "contentC": "<p>&nbsp;</p>"
        }
    },
 */