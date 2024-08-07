/**
 * @api {get} /mobile/v1/feedback 01.피드백 목록
 *
 * @apiDescription - 완료 레슨 피드백 : 현재 날짜 기준으로 진행된 수업에 대한 예약 정보<br/>
 *                 - 레슨 피드백 상세 화면(레슨피드백보기):피드백 목록에 ldf 필드에 피드백 상세 화면에 대한 정보 있음<br/>
 *
 * @apiVersion 1.0.0
 * @apiName mobile_listFeedback
 * @apiGroup 2. Mobile API > 03. 레슨피드백
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/mobile/v1/feedback?isLdf=true&date=2023-01-10&time=00:00:00'
 *
 * @apiParam (Query) {boolean} isLdf false를 기본값으로 넘겨주세요 <br/>
 *                             (LDF가 포함된 완료 피드백만 조회 할때 true / 완료 피드백 전체 조회 시 false)
 * @apiParam (Query) {String} date 오늘날짜(yyyy-MM-dd)
 * @apiParam (Query) {String} time 현재시간(HH:mm)
 *
 * @apiSuccess {Object[]} feedbacks 레슨피드백 목록
 * @apiSuccess {String} feedbacks.date 예약일자
 * @apiSuccess {String} feedbacks.startTime 예약수업시간(시작)
 * @apiSuccess {String} feedbacks.endTime 예약수업시간(끝)
 * @apiSuccess {Object} feedbacks.ldf ldf 정보
 * @apiSuccess {Number} feedbacks.ldf.id ldf식별키
 * @apiSuccess {String} feedbacks.ldf.lesson lesson(ldf상세조회 시 information안에 Lesson)
 * @apiSuccess {String} feedbacks.ldf.contentSp Stress and Pronunciation
 * @apiSuccess {String} feedbacks.ldf.contentV Vocabulary
 * @apiSuccess {String} feedbacks.ldf.contentSg Sentence Structure&Grammar
 * @apiSuccess {String} feedbacks.ldf.contentC Comment
 * @apiSuccess {Number} feedbacks.ldf.grade 평점
 * @apiSuccess {String} feedbacks.ldf.evaluation 평가
 * @apiSuccess {String} feedbacks.attendanceStatus 출결상태(Y:출석, N:결석 , R:예약)
 * @apiSuccess {String} feedbacks.teacherName 강사명

 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "[
        {
            "date": "2023-01-09",
            "startTime": "20:30:00",
            "endTime": "21:00:00",
            "ldf": null,
            "attendanceStatus": "N",
            "teacherName": "Alex"
        },
        {
            "date": "2023-01-09",
            "startTime": "21:00:00",
            "endTime": "21:30:00",
            "ldf": null,
            "attendanceStatus": "N",
            "teacherName": "최태연"
        },
        {
            "date": "2023-01-03",
            "startTime": "20:30:00",
            "endTime": "21:00:00",
            "ldf": {
                "id": 288928,
                "lesson": "45294",
                "contentSp": "<p>What did you do on New Year's Day? (새해)&nbsp;</p> <p><br /></p> <p>Most of the concert goers were not local.</p> <p><br /></p> <p>fireworks 불꽃놀이&nbsp;</p> <p><br /></p> <p>Jeju Island is warmer than Seoul.&nbsp;</p> <p><br /></p> <p>There are many concerts at the end of the year.&nbsp;</p> <p><br /></p> <p>anime&nbsp; 일본 animation&nbsp;</p> <p><br /></p> <p>We're taking a girls' trip to Japan&nbsp;</p>",
                "contentV": "<p>I upload TO my social media. (SNS)&nbsp;</p> <p>I POST to my social media.&nbsp;</p> <p><br /></p> <p>engaged 약혼&nbsp;</p> <p>wedding 결혼식&nbsp;</p> <p><br /></p> <p>I want to HAVE a wedding.&nbsp;</p> <p><br /></p> <p>busy (adjective)&nbsp;</p> <p>I AM busy.&nbsp;</p> <p><br /></p>",
                "contentSg": "<p>&nbsp;</p>",
                "contentC": "<p>&nbsp;</p>",
                "grade": null,
                "evaluation": null
            },
            "attendanceStatus": "Y",
            "teacherName": "Steven"
        },
        {
            "date": "2023-01-03",
            "startTime": "21:00:00",
            "endTime": "21:30:00",
            "ldf": {
                "id": 288932,
                "lesson": "기본영어회화 01-03",
                "contentSp": "new year's resolution 새해 다짐&nbsp; <p>go on a diet&nbsp;</p> <p>hang up 전화를 끊다/hang out with ~~어울리다&nbsp;</p> <p>전화를 받다 pick up the phone&nbsp;</p> <p><br></p> <p>he brought some coffee to me /he brought me some coffee</p> <p>he drank a lot of water&nbsp;</p> <p>drink-drank-drunken&nbsp;&nbsp;</p> <p>why did you hang up the phone?</p> <p>why you hung up the phone?</p> <p>he left 태백 3 years ago&nbsp;</p> <p>we got hurt&nbsp;</p> <p>have a hangover&nbsp;</p> <p>he had a hangover last night&nbsp;</p> <p><br></p>",
                "contentV": "<p>&nbsp;</p>",
                "contentSg": "<p>get hurt 상처를 받은 것&nbsp;</p> <p>did you break a window?</p> <p>break up with 헤어지다&nbsp;</p> <p>did you break up with your boyfriend ?</p> <p>hometown 고향&nbsp;</p> <p>when did you leave your hometown&nbsp;</p> <p>i left my hometown 5 years ago&nbsp;</p> <p>did you hang up the phone first?&nbsp;</p> <p>he doesn't pick up the phone</p> <p>do you need my help?&nbsp;</p> <p>i need your help &lt;&lt;<span style=\"color: #0000ff\">i could use some help&nbsp;</span></p> <p><br></p>",
                "contentC": "<p>&nbsp;</p>",
                "grade": null,
                "evaluation": null
            },
            "attendanceStatus": "N",
            "teacherName": "최태연"
        },
        {
            "date": "2023-01-02",
            "startTime": "20:30:00",
            "endTime": "21:00:00",
            "ldf": null,
            "attendanceStatus": "N",
            "teacherName": "Adam"
        },
        {
            "date": "2023-01-02",
            "startTime": "21:00:00",
            "endTime": "21:30:00",
            "ldf": null,
            "attendanceStatus": "N",
            "teacherName": "최태연"
        },
        {
            "date": "2022-12-27",
            "startTime": "20:30:00",
            "endTime": "21:00:00",
            "ldf": null,
            "attendanceStatus": "Y",
            "teacherName": "Steven"
        },
        {
            "date": "2022-12-27",
            "startTime": "21:00:00",
            "endTime": "21:30:00",
            "ldf": null,
            "attendanceStatus": "Y",
            "teacherName": "최태연"
        },
        {
            "date": "2022-12-26",
            "startTime": "20:30:00",
            "endTime": "21:00:00",
            "ldf": null,
            "attendanceStatus": "N",
            "teacherName": "Alex"
        },
        {
            "date": "2022-12-26",
            "startTime": "21:00:00",
            "endTime": "21:30:00",
            "ldf": null,
            "attendanceStatus": "N",
            "teacherName": "최태연"
        },"
 */