/**
 * @api {get} /mobile/v1/feedback/completion 04. 완료 레슨 피드백 목록
 *
 * @apiDescription -
 *
 *
 * @apiVersion 1.0.0
 * @apiName mobile_listCompleteFeedback
 * @apiGroup 2. Mobile API > 03. 레슨피드백
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/api/mobile/v1/feedback/completion'
 *
 *
 * @apiSuccess {Number} id 예약식별키
 * @apiSuccess {String} date 예약일자
 * @apiSuccess {String} startTime 예약수업시간(시작)
 * @apiSuccess {String} endTime 예약수업시간(끝)
 * @apiSuccess {String} attendanceStatus 출결상태(Y:출석, N:결석 , R:예약)
 * @apiSuccess {String} teacherName 강사명
 * @apiSuccess {Number} ldfId ldf 식별키
 * @apiSuccess {String} lesson lesson
 * @apiSuccess {String} contentSp Stress and Pronunciation
 * @apiSuccess {String} contentV Vocabulary
 * @apiSuccess {String} contentSg Sentence Structure & Gramm
 * @apiSuccess {String} contentC Comment
 * @apiSuccess {String} grade  평점
 * @apiSuccess {String} evaluation 평가

 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * [
       {
           "id": 2263980,
           "date": "2022.04.27 Wed",
           "startTime": "01:30 PM",
           "endTime": "02:00 PM",
           "attendanceStatus": "Y",
           "teacherName": "황재희",
           "ldfId": 90553,
           "lesson": "FreeClassJan13",
           "contentSp": "<p>pharmacy-[farmasey]&nbsp;</p><p><br/></p><p>cough-[coff]&nbsp;</p><p><br/></p><p>syrup-[si-rup]&nbsp;(notshirup)&nbsp;</p>",
           "contentV": "<p>tofillaprescription-toprepareaprescription&nbsp;</p><p><br/></p><p>ailment-ongoingillness&nbsp;</p><p><br/></p><p><br/></p>",
           "contentSg": "<p>Atfirst..............</p><p><br/></p><p>WhenIfirststartedIwassonervousIshookalot.&nbsp;</p><p><br/></p><p>Themovieisscary.</p><p><br/></p><p>Hefeelsscared.&nbsp;</p><p><br/></p><p>WhenshouldI(dosomething)?</p><p><br/></p><p>WhenshouldIeatameal?&nbsp;</p><p><br/></p><p>Intwohourstherewillbeafireworkshow.</p><p><br/></p><p>Comebackinthreedays.&nbsp;</p>",
           "contentC": "<p>Adoctorishandingoveranoteforaninjection.&nbsp;</p><p><br/></p><p>Amaninapharmacyispointingatthemedicineforarunnynose.&nbsp;</p><p><br/></p><p>Apharmacistisdenyingarequestbyawoman.&nbsp;</p>",
           "grade": null,
           "evaluation": null
       },
       {
           "id": 2265702,
           "date": "2022.04.30 Sat",
           "startTime": "03:00 PM",
           "endTime": "03:30 PM",
           "attendanceStatus": "Y",
           "teacherName": "황재희",
           "ldfId": 111454,
           "lesson": "1",
           "contentSp": "<p>&nbsp;</p>",
           "contentV": "<p><spanstyle=\"font-size:22px\">Breath</span></p><p><br></p><p><spanstyle=\"font-size:22px\">Breathe<br></span></p><p><spanstyle=\"font-size:22px\"><br></span></p><p><spanstyle=\"font-size:22px\">Habitat=whereananimallives</span></p><p><spanstyle=\"font-size:22px\"><br></span></p><p><spanstyle=\"font-size:22px\">Gills=howafishbreathes<br></span></p><p><spanstyle=\"font-size:22px\"><br></span></p><p><spanstyle=\"font-size:22px\">Takein=absorb<br></span></p><p><spanstyle=\"font-size:22px\"><br></span></p><p><spanstyle=\"font-size:22px\">12&nbsp;=Midnight/Noon<br></span></p><p><spanstyle=\"font-size:22px\"><br></span></p><p><spanstyle=\"font-size:22px\"></span></p>",
           "contentSg": "<p>&nbsp;</p>",
           "contentC": "<p>&nbsp;</p>",
           "grade": null,
           "evaluation": null
       },
       {
           "id": 2476347,
           "date": "2023.04.26 Wed",
           "startTime": "02:00 PM",
           "endTime": "02:30 PM",
           "attendanceStatus": "Y",
           "teacherName": "김나래",
           "ldfId": 313523,
           "lesson": ".",
           "contentSp": "<p>&nbsp;</p>",
           "contentV": "<p>*baseball:<spanstyle='color:#000000'>야구</span></p><p><br/></p><p><br/></p>",
           "contentSg": "<p>either/neither</p><p><br/></p><p>차이점??</p><p><br/></p><p>-</p><p>-</p><p>-</p><p>-</p><p>-</p><p><br/></p><p><br/></p>",
           "contentC": "<p>&nbsp;</p>",
           "grade": null,
           "evaluation": null
       }
   ]"
 */