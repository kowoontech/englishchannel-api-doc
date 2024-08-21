/**
 * @api {get} 8080/mobile/v1/feedback/{id} 03. ldf 상세보기
 *
 * @apiDescription  모바일 > 피드백 목록조회 > ldf 상세조회<br/>
 *
 * @apiVersion 1.0.0
 * @apiName mobile_listFeedbackdetail
 * @apiGroup 2. Mobile API > 03. 레슨피드백
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/mobile/v1/feedback/2532931'
 *
 * @apiParam (Query) id 예약 식별키
 *
 * @apiSuccess {Number} id ldf식별키
 * @apiSuccess {String} lesson Lesson
 * @apiSuccess {String} contentSp Stress and Pronunciation
 * @apiSuccess {String} contentV Vocabulary
 * @apiSuccess {String} contentSg Sentence Structure & Gramm
 * @apiSuccess {String} contentC Comment
 * @apiSuccess {String} grade 평점
 * @apiSuccess {String} evaluation 평가
 * @apiSuccess {String} date 예약일
 * @apiSuccess {String} startTime 수업시작시간
 * @apiSuccess {String} endTime 수업종료시간
 * @apiSuccess {String} teacherName 강사명
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 /*
{
    "id": 335375,
    "lesson": "400 - 1",
    "contentSp": "<p>-He doesn't know where he has to go.&nbsp;</p> <p>-She wants to pay her fee.&nbsp;</p> <p>-$8.20 = it's eight dollars and twenty cents / 'it's eight-twenty'&nbsp;</p> <p><br /></p> <p>-fare - transportation&nbsp;</p> <p>-fee - a service / education / penalties&nbsp;</p> <p><br /></p> <p>-another -- an + other&nbsp;</p> <p>-the others = the other items in a set (not including the item your focused)&nbsp;</p> <p><br /></p> <p>'This car looks cool! The others, I don't really care about.' *there are six cars and one of them is cool-looking&nbsp;</p> <p><br /></p> <p>-We have take another bicycle.&nbsp;</p>",
    "contentV": "<p>-We have to take another road / path.&nbsp;</p> <p><br /></p> <p>-Sure!&nbsp;</p> <p>-That's fine.&nbsp;</p> <p>-No problem.&nbsp;</p> <p><br /></p> <p>-Can we take another way? Yes, we can.&nbsp;</p> <p><br /></p> <p>-Could you drop me off at the nearest subway station?</p> <p><br /></p> <p>-How much is the apple?&nbsp;</p> <p>-How much are the apples?&nbsp;</p>",
    "contentSg": "<p>-It's eight-twenty.</p> <p>-bucks&nbsp;</p> <p><br /></p> <p>-We have to . . . / We need to . . . / It necessary to . . . + verb&nbsp;</p> <p><br /></p> <p>-Take v. = to choose a way . . .&nbsp; / to choose a mode of transportation . . .&nbsp;</p> <p><br /></p> <p>-drop me off . . . / let me out . . . / let me off . . .</p> <p><br /></p> <p>-Could you take me to the subway station?</p> <p><br /></p> <p>-Take me on . . . = 1. I'll take you on! -- I'll fight you! 2. hiring -- 'We've decided to take you on . . .'&nbsp;&nbsp;</p>",
    "contentC": "<p>-</p>",
    "grade": null,
    "evaluation": null,
    "date": "2023.08.02 Wed",
    "startTime": "09:30 PM",
    "endTime": "10:00 PM",
    "teacherName": "Alex"
}
 */