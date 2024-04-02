# k6-prometheus-grafana 부하 테스트 자동화 스크립트

## 스크립트 작성

- k6-scripts/stress.js
  - 해당 파일 내 k6 테스트 스크립트 작성
- 테스트 타겟 서버 찾는 법
  - 동일 도커 네트워크
    - http://{docker-compose 내 service_name}:{port}
    - 이 경우 k6 이하의 extra_hosts 설정은 삭제 가능
  - localhost에 띄워진 서버
    - http://host.docker.internal:{port}
    - k6 이하의 extra_hosts 설정 필요
  - public IP or domain
    - http://{IP or domain}:{port if IP}
    - 이 경우 k6 이하의 extra_hosts 설정은 삭제 가능

## 실행

- `docker-compose up`

## 테스트 결과 확인

- localhost:13000 접속
- id: admin, pw: admin, 비밀번호 변경 페이지 skip
- 좌측 패널에서 Dashboard 클릭

## 대시보드 출처
- https://grafana.com/grafana/dashboards/18030-k6-prometheus-native-histograms/