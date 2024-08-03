/**
 * @api {get} /admin/v1/statistics/evaluations/{id} 06. LDF 상세 조회
 *
 * @apiDescription  통계보고서 > 평가현황 > 상세보기 > LDF 보기<br/>
 * ldfList 에 있는 ldf 식별키를 사용해 테스트 해주세요
 * @apiVersion 1.0.0
 * @apiName admin_evaluation_ldf
 * @apiGroup 1. Admin API > 06. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/statistics/evaluations/362222'
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
    "id": 362222,
    "lesson": "SYM2 Issue 27",
    "contentSp": "<p>subtle =SUH+dil</p> <p><br /></p> <p>people=PEE+ppol</p>",
    "contentV": "<p>subtle (adj)=when something is not obvious or easy to notice</p> <p>EX: this coffee has a subtle berry taste</p> <p>EX: The facial expression is subtle, but you can tell she is a little uncomfortable</p> <p>EX: I will be subtle, and ask her casually about how she feels since she is so stressed</p> <p><br /></p> <p>to censor (v)/censorship (n)=to block content that is inappropriate</p> <p><br /></p> <p>graphic (adj)=shows too much violence, blood, sexual content, and something offensive</p> <p><br /></p> <p>to try one's damndest to + verb (idiom)=to try really hard to do or avoid something</p> <p><br /></p> <p>buy + something&nbsp; +with + (money, card, online back)</p> <p><br /></p> <p>young adult + fiction/fantasy/scifi</p> <p><br /></p> <p>false advertising (n)=wrong facts in ads</p> <p><br /></p> <p>skeptical/doubtful (adj)=to feel doubt</p> <p><br /></p> <p>predictable (adj)=easy to guess what will happen, can predict it, obvious</p> <p><br /></p> <p>subverts expectations (v+n)=to do something that is unexpected for the audience</p> <p>EX: The Matrix film subverted many people's expectations with the ending.</p> <p><br /></p> <p>nearly live (adj)=not exactly shot live, but very close to live based on time</p> <p><br /></p> <p>to manipulate (v)/manipulator (n)/manipulation (n)=to control people or situations using various hidden methods</p> <p><br /></p> <p>to convey (v)=to show something</p> <p>EX: The actor conveyed a lot of depression when they played that character</p> <p><br /></p> <p>absorb (v)=to take something and put it in side of yourself</p> <p>EX: a sponge absorbs water</p> <p>EX: a person absorbs knowledge</p>",
    "contentSg": "<p>I don't much care about that</p> <p>Correction: I don't really care about that</p> <p><br /></p> <p>when I was like teenager</p> <p>Correction: when I was a teenager/ during my teen years/ when I was a teen/ when I was an adolescent</p> <p><br /></p> <p>I can choose to see or not</p> <p>Correction: I can choose to avoid most ads, but commercials are harder to avoid</p> <p><br /></p> <p>people have to think more after watching commercial</p> <p>Correction: people have to be more skeptical when watching a commercial</p>",
    "contentC": "<p>https://www.happycow.net/reviews/charlies-grocery-seoul-317701</p>"
}
 */