# Lesson1

- create-mf-app을 이용하면 쉽게 기본 설정의 module federation app을 생성할 수 있습니다.
- ModuleFederationPlugin의 설정이 매우 중요합니다.
- name, filename, exposes의 key를 이용해서 코드를 런타임에 다른 앱에게 전달할 수 있습니다.
- remotes의 키는 내부에서 사용하며 값으로 외부의 정보를 정확히 기입해야 합니다.
- remotes의 키와 exposes의 키를 조합하며 소스코드에서 다른 서버의 소스 코드를 사용할 수 있습니다.

# Lesson2

- 마이크로 앱이 런타임에 사용하는 여러 라이브러리를 어떻게 공유해서 쓸 것인지 설정할 수 있습니다.
- shared 항목을 지정해서 설정하는데 사용 방법이 3가지가 있습니다.
- ["lodash"]와 같이 라이브러리 이름을 배열로 넣으면, package.json에 있는 버전으로 함께 공유해서 사용할 라이브러리의 기준이 정해집니다.
- {lodash:"4.17.21"}와 같이 키가 라이브러리 이름이고 값이 버전으로 지정하면 package.json과 관계없이 함께 공유해서 사용할 라이브러리의 기준을 정할 수 있습니다.
- {lodash:{requiredVersion: "4.17.20", singleton: true, strictVersion:true}} 와 같이 키가 라이브러리 이름 값이 객체 형태로 지정할 수 있으며, singleton과 같은 플래그를 이용해서 디테일한 공유 설정을 할 수 있습니다.
