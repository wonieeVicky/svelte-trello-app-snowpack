# svelte-trello-clone-app

## Rollup 프로젝트를 Snowpack 프로젝트로 이관

최신 프론트엔드 빌드 도구인 Snowpack로 빌드 및 배포를 해본다.

Snowpack는 번들러가 아니며, 웹 빌드 시스템에 대한 새로운 접근 방식을 제공한다.
JavaScript의 ESM(브라우저에도 import, export 가 동작하므로 해당 방법을 사용함)을 활용하여 
동일 파일을 다시 빌드하지 않는 최초의 빌드 시스템을 생성해서 변경사항을 브라우저에 즉시 적용할 수 있다.
(기존의 webpack, rollup, parcel같은 무겁고 복잡한 번들러의 번들 소요 시간을 획기적으로 절약해준다.)

## CD 

Demo: [여기 클릭](https://superb-crisp-ed39be.netlify.app)
