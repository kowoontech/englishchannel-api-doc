/**
 * @api {get} /admin/v1/users/{id}/levelTests/{testId} 30. 레벨테스트 상세조회
 *
 * @apiDescription 회원관리 > 회원  상세 조회 > 테스트 탭 <br/>
 * 테스트가 필요하다면, id : M1372661465106388 , testId : 6153 사용해주세요 <br/>
 * 회원id 의 회원 이름은 '김기훈' 입니다
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_getLevelTest
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'localhost:8080/admin/v1/users/M1372661465106388/levelTests/6153'
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
 * @apiSuccess {String[]} recommendedLevel Recommended Level [ R2:Pre// R3:300// R4:400//R5:500 //R6:600//R7:700://R8: 800//R9:900//ETC:ETC]
 * @apiSuccess {String[]} vowels vowels(순서대로 [ A,B,C,D,E,F,G,H,I,J,K,L,M,N])
 * @apiSuccess {String[]} consonants consonants(순서대로 [ R , L, P, F, B, V, Z, SH, EZH, CH, G, TTH, TH] )
 * @apiSuccess {String[]} studyType studyType( [ EC: English Conversation //BE: Business English //TS:Toeic Speaking <br/>
                                                    I:Interview ,ETC: ETC])
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "levelTest": {
        "id": 6153,
        "userId": null,
        "testStartTime": null,
        "testEndTime": null,
        "interviewer": "interviewer",
        "lbt": "10",
        "rbt": null,
        "obt": null,
        "testIp": null,
        "note": null,
        "purpose": null,
        "studyTypeEtc": "이유",
        "familyBackground": "familyBackground",
        "usageType": null,
        "occupation": null,
        "spareTime": null,
        "travelAbroad": "travelAbroad",
        "futurePlans": null,
        "clarity": "10",
        "intonation": "20",
        "vocabulary": "30",
        "verbsTense": null,
        "agreement": null,
        "prepositions": "40",
        "articles": null,
        "plurals": null,
        "others": null,
        "strongPoint": "strongPoint",
        "weakPoint": null,
        "comprehension": "10",
        "confidence": null,
        "comments": null,
        "recommendedLevelEtc": "recommendedLevelEtc",
        "studyType": "30,20",
        "consonants": "80,130",
        "vowels": "150,40",
        "recommendedLevel": "80,90",
        "file": "1721961066411_오픈.txt",
        "originalFile": "오픈.txt",
        "fileUrl": "http://localhost:8080/file/download/1721961066411_오픈.txt/오픈.txt"
    },
    "studyType": [
        "TS",
        "BE"
    ],
    "consonants": [
        "SH",
        "TH"
    ],
    "vowels": [
        "N",
        "C"
    ],
    "recommendedLevel": [
        "R8",
        "R9"
    ]
 */