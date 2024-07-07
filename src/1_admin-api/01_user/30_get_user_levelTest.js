/**
 * @api {get} /admin/v1/users/{id}/levelTests/{testId} 30. 레벨테스트 상세조회
 *
 * @apiDescription 회원관리 > 회원  상세 조회 > 테스트 탭 <br/>
 * 없는 데이터가 많으니 id : 1028151 , testId : 6145 사용해주세요 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_getLevelTest
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/1028151/levelTests/6145'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {Number} LevelTest 식별키
 * 
 * @apiSuccess {Object[]} levelTest LevelTest 정보
 * @apiSuccess {Long} levelTest.id 테스트 식별키
 * @apiSuccess {String} levelTest.testStartTime 테스트일시(시작) (yyyy-mm-dd HH:mm:ss)
 * @apiSuccess {String} levelTest.testEndTime 테스트일시(끝)(yyyy-mm-dd HH:mm:ss)
 * @apiSuccess {String} levelTest.interviewer Interviewer
 * @apiSuccess {String} levelTest.lbt LBT 테스트결과
 * @apiSuccess {String} levelTest.rbt RBT 테스트결과
 * @apiSuccess {String} levelTest.obt OBT
 * @apiSuccess {String} levelTest.testIp TEST IP
 * @apiSuccess {String} levelTest.file 첨부파일명
 * @apiSuccess {String} levelTest.originalFile 실제 파일명
 * @apiSuccess {String} levelTest.fileUrl 첨부파일 다운로드 URL
 * @apiSuccess {String} levelTest.note 특이사항
 * @apiSuccess {String} levelTest.purpose  Purpose of Study
 * @apiSuccess {String} levelTest.studyType What kind of English do you want to study and learn?<br/>
                                    (사용x , 아래 studyType 사용해주세요)
 * @apiSuccess {String} levelTest.studyTypeEtc ETC 이유
 * @apiSuccess {String} levelTest.familyBackground  Family Background
 * @apiSuccess {String} levelTest.usageType Company or School
 * @apiSuccess {String} levelTest.occupation Occupation
 * @apiSuccess {String} levelTest.spareTime Spare Time
 * @apiSuccess {String} levelTest.Travel Abroad
 * @apiSuccess {String} levelTest.futurePlans Future Plans
 * @apiSuccess {String} levelTest.consonants consonants(사용x, 아래 consonants 사용해주세요)
 * @apiSuccess {String} levelTest.vowels vowels(사용x, 아래 vowels 사용해주세요)
 * @apiSuccess {String} levelTest.clarity clarity (10:hard to understand ,20:average ,30:easy to understand)
 * @apiSuccess {String} levelTest.intonation intonation (10:very Korean ,20:a bit Korean,30:acceptable ,40:near native)
 * @apiSuccess {String} levelTest.vocabulary vocabulary (10:very limited ,20:limited ,30:average ,40:above average ,50:extensive)
 * @apiSuccess {String} levelTest.verbsTense verbsTense (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiSuccess {String} levelTest.agreement agreement (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiSuccess {String} levelTest.prepositions prepositions (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiSuccess {String} levelTest.articles articles (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiSuccess {String} levelTest.plurals plurals (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiSuccess {String} levelTest.others others (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiSuccess {String} levelTest.strongPoint strongPoint
 * @apiSuccess {String} levelTest.weakPoint weakPoint
 * @apiSuccess {String} levelTest.comprehension Comprehension How much does learner understand <br/>
                                        (10:almost nothing ,20:some parts ,30:most parts ,40:almost everything ,50:everything)
 * @apiSuccess {String} levelTest.confidence confidence (10:completely lacking ,20:lacking ,30:average ,<br/>40:above average,50:very confident)
 * @apiSuccess {String} levelTest.recommendedLevel Recommended Level(사용x 아래 recommendedLevel 사용해주세요 )
 * @apiSuccess {String} levelTest.recommendedLevelEtc Etc 이유
 *
 * @apiSuccess {String[]} recommendedLevel Recommended Level (선택X:0, 순서대로> 10,20,30,40,50,60,70,80,90)
 * @apiSuccess {String[]} vowels vowels(선택X: 10 / 순서대로 20,30,40,50,60,70,80,90,100,110,120,130,140,150)
 * @apiSuccess {String[]} consonants consonants(선택 X:0, 순서대로 > 10,20,30,40,50,60,70,80,90,100,110,120,130 )
 * @apiSuccess {String[]} studyType studyType(선택X :0/ 순서대로 10,20,30,40,50)
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": 6118,
    "userId": null,
    "testStartTime": null,
    "testEndTime": null,
    "interviewer": "TEST",
    "lbt": null,
    "rbt": null,
    "obt": null,
    "testIp": null,
    "file": "1720341620662_다운로드.jpeg",
    "fileUrl": "http://localhost:8080/file/download/1720341620662_다운로드.jpeg/다운로드.jpeg",
    "note": null,
    "purpose": null,
    "studyType": null,
    "studyTypeEtc": "TEST4",
    "familyBackground": null,
    "usageType": null,
    "occupation": null,
    "spareTime": null,
    "travelAbroad": null,
    "futurePlans": null,
    "consonants": null,
    "vowels": null,
    "clarity": "E",
    "intonation": "VK",
    "vocabulary": "AA",
    "verbsTense": "NEVER",
    "agreement": "NEVER",
    "prepositions": "NEVER",
    "articles": "NEVER",
    "plurals": "NEVER",
    "others": "NEVER",
    "strongPoint": null,
    "weakPoint": null,
    "comprehension": "AE",
    "confidence": "CL",
    "comments": null,
    "recommendedLevel": null,
    "recommendedLevelEtc": null
}
 */