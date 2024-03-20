# 서버 정보

| ENVIRONMENT | HOST                       |
|-------------|----------------------------|
| Development | http://?                   |
| Production  | https://?                  |

***

<br/>

# 로그인 인증

서버 세션을 사용하므로 WEB에서 서버 호출시 쿠키 공유 설정 필수!

***

<br/>

# 에러 정보

## Error Body

| FIELD   | TYPE   | DESCRIPTION |
|---------|--------|-------------|
| code    | String | 에러 코드     |
| message | String | 에러 메시지    |

<br/>

## 예시

```
HTTP/1.1 400
{
  "code": "admin-api-9900",
  "message": "Bad Request."
}
```

***

<br/>

# 버전 이력

| VERSION | DESCRIPTION                    | DATE       |
|---------|--------------------------------|------------|
| 1.0.0   | 최초 생성                        | 2024.03.12 |

<br/>
<br/>