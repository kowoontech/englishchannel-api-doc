/**
 * @api {post} /admin/v1/consultations 09. 상담 관리 등록
 *
 * @apiDescription 회원관리 > 상담관리 > 상담등록 <br/>
 * "Content-Type"은 파일이 있어서 "multipart/form-data"로 해주세요
 *
 * @apiVersion 1.0.0
 * @apiName admin_createConsultation
 * @apiGroup 1. Admin API > 4. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/consultations' \
 * -H "Content-Type: multipart/form-data" \
 * -F "status=NO_CONTACT"\
 * -F "callTime=TIME_06"\
 * -F "studyPurposes=WORK"\
 * -F "studyPurposes=DEVELOPMENT"\
 * -F "foundPath=RECOMMEND"\
 *
 *
 * 
 * @apiParam (Body) {String} type 상담구분 [  P, // 전화상담<br/>
                                          V, // 방문상담<br/>
                                          K, // 카카오채널<br/>
                                          N, // 네이버예약<br/>
                                          F, // 온라인상담<br/>
                                          L, // 무료레벨테스트]<br/>
 * @apiParam (Body) {String} status 처리상태 [  WAITING, // 대기<br/>
                                            // 컨텍금지<br/>
                                            NO_CONTACT,<br/>
                                            UNVISITED,<br/>
                                            RESERVED,<br/>
                                            NOT_REGISTERED,<br/>
                                            REGISTERED,<br/>
                                            NO_SHOW,<br/>
                                            MISSED,]<br/>
 * @apiParam (Body) {String} name 이름
 * @apiParam (Body) {String} gender 성별 [    M: 남성,  F:여성]
 * @apiParam (Body) {String} callTime 통화 가능 시간 [  TIME_01, // 06:30~08:00<br/>
                                                  TIME_02, // 08:00~10:00<br/>
                                                  TIME_03, // 10:00~12:00<br/>
                                                  TIME_04, // 12:00~14:00<br/>
                                                  TIME_05, // 14:00~16:00<br/>
                                                  TIME_06, // 16:00~18:00<br/>
                                                  TIME_07, // 18:00~20:00<br/>
                                                  TIME_08, // 20:00~21:00<br/>
                                                  TIME_09,]<br/>
 * @apiParam (Body) {String} phone 전화번호
 * @apiParam (Body) {String} cellPhone 핸드폰번호
 * @apiParam (Body) {String} email 이메일
 * @apiParam (Body) {String[]} studyPurposes 공부목적[  COMMON_ENGLISH, // 생활영어<br/>
                                                    WORK, //업무<br/>
                                                    STUDY_ABROAD, // 유학<br/>
                                                    DEVELOPMENT, // 자기개<br/>
                                                    EMPLOYMENT, // 취업<br/>
                                                    ETC // 기타<br/>
                                                    ;]
 * @apiParam (Body) {String} foundPath 알게된동기   SIGN, // 간판<br/>
                                                  ONLINE, // 온라인검색<br/>
                                                  RECOMMEND, // 지인추천<br/>
                                                  FAN, // 부채<br/>
                                                  LEAFLET, // 3단리플릿<br/>
                                                  SUBWAY, // 지하철광고<br/>
                                                  ALLIANCE, // 기업제휴<br/>
                                                  ETC, // 기타<br/>
                                                  ;
 * @apiParam (Body) {String} foundPathNote 알게된 동기 이유
 * @apiParam (Body) {String} job 직업
 * @apiParam (Body) {String} company 회사명
 * @apiParam (Body) {String} consultationDate 상담일
 * @apiParam (Body) {String} visitDate 방문일[yyyy-MM-dd HH:mm:ss]
 * @apiParam (Body) {String} details 상담내용
 * @apiParam (Body) {File} file 첨부파일
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */