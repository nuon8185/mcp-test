# KOSIS MCP 서버 패키지

이 프로젝트는 통계청 KOSIS(국가통계포털)의 OpenAPI를 사용하여 통계 데이터를 조회하는 MCP 서버 패키지입니다.

## 설치 방법

```bash
npm install
```

## 실행 방법

```bash
npm start
```

## API 엔드포인트

### 통계 목록 조회
GET /api/statistics

쿼리 파라미터:
- vwcd: 서비스뷰 코드 (기본값: MT_ZTITLE)
- listLev: 목록 레벨 (기본값: 1)
- parentId: 상위 목록 ID (기본값: 0)

## 환경 변수
- PORT: 서버 포트 (기본값: 3000)
- KOSIS_API_KEY: KOSIS API 키

## 주의사항
- API 키는 .env 파일에 저장되어 있으며, 실제 운영 환경에서는 보안을 위해 적절히 관리해야 합니다.
- Cross-Domain 제약을 해결하기 위해 CORS 미들웨어가 적용되어 있습니다.