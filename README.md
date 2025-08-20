# GraphQL + Node.js Tutorial

✅ 공략끝

### 1 . GraphQL 기초 이해 ✅

- GraphQL이란 무엇인가? REST API와의 차이점 ✅
- GraphQL의 핵심 개념: Query(쿼리), Mutation(뮤테이션), Schema(스키마), Resolver(리졸버) ✅
- GraphQL 장단점 ✅

---

### 2. 개발 환경 세팅 ✅

- Node.js 설치 및 설정 ✅
- 프로젝트 폴더 생성 및 초기화 (`npm init`) ✅
- 필요한 패키지 설치: `graphql`, `express`, `express-graphql` or `apollo-server` ✅

---

### 3. 기본 GraphQL 서버 만들기

- Express 서버 세팅 ✅
- 간단한 GraphQL 스키마 정의(`type Query`) ✅
- 리졸버 함수 작성 ✅
- `express-graphql` 미들웨어 적용 ✅
- GraphiQL 테스트 인터페이스 사용법 익히기 ✅

---

### 4. 타입과 스키마 확장하기

- 다양한 스칼라 타입 (String, Int, Boolean 등) 사용법 ✅
- 커스텀 타입 (Object Types) 만들기 ✅
- 인자 전달과 반환값 다루기
- List와 Non-Null 타입 지정 방법

---

### 5. Mutation과 데이터 변경

- Mutation 스키마 정의 방법
- Create, Update, Delete 동작 구현하기
- 입력 타입(Input Type) 정의 및 활용 (`input`)
- 리졸버에서 실제 데이터 수정 로직 작성

---

### 6. 관계형 데이터 다루기

- 객체 간 관계 정의하기 (ex. User -> Post 관계)
- Nested Query 작성 (사용자 요청 시 하위 데이터까지 불러오기)
- DataLoader를 활용한 N+1 문제 해결

---

### 7. 에러 처리와 검증

- 리졸버에서 에러 처리 방법
- GraphQL 에러 포맷 이해하기
- 입력값 검증(Validation) 적용하기

---

### 8. 인증과 권한 관리

- JWT(JSON Web Token)를 이용한 인증 구현
- context 객체를 활용해 사용자 정보 전달하기
- 특정 쿼리/뮤테이션에 권한(Role) 기반 접근 제어 추가

---

### 9. Subscription (실시간 기능)

- Subscription 개념 이해
- Apollo Server + WebSocket 설정
- 실시간 채팅, 알림 같은 기능 구현하기

---

### 10. 고급 Schema 설계

- 인터페이스(Interface)와 유니온(Union) 타입 사용
- 스키마 모듈화 및 파일 분리 구조
- 스키마 Stitching / Federation 개념 (마이크로서비스 확장)

---

### 11.성능 최적화

- DatLoader로 효율적인 데이터 fetch
- 캐싱 전략 (쿼리 결과 캐싱, Redis 연동 등)
- 쿼리 복잡도 제한(Query Complexity) 설정

---

### 12.배포와 운영

- Production 환경 설정 (환경 변수, 보안 설정)
- 클라우드 배포
- Apollo Studio / GraphQL Playground 활용한 모니터링
