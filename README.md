# #강의 내용 정리

const = 변할 수 없는 값
let = 변할 수 있는 값

주로 const사용

const a = 5
let b = 6
let = 7
이면 let 은 7

var은 되도록 사용 X 우리가 사용하고자 하는 값을 명확히 표현해줘야함

null = 값이 비어있음 변수에 할당 (\* 파이썬에서는 None 사용)
undefined = 값이 없음 null과 다름

const days = [1, 2, false, true, null, undefined, "text", me];
배열 속에는 어느타입이든 들어갈 수 있음

console.log(days[2]) 3번째 값 가져옴
day[2] = "pizza" 3번째 값 변경
days.push("water") 배열의 마지막에 값 추가

object만들기

```
const player = {
  name: "a",
  age: 24
};
```

console.log(player.name) player의 name출력
player.name = "b"; player의 name 업데이트
player.tall = 000 player에 tall 추가

function = 반복작업 효율적으로

function이 없다면?

```
console.log("Hello my name is a");
console.log("Hello my name is b");
console.log("Hello my name is c"); >> 매우 비효율적
```

function으로 제작한다면?

```
function sayHello(nameOfPerson) {
  console.log("Hello my name is" + nameOfPerson);
}


sayHello("a");
sayHello("b");
sayHello("c");
```

object와 function을 합친 계산기 만들기

```
const calculator = {
  add: function(a, b) {
  console.log(a + b);
  },
  sub: function(a, b) {
  console.log(a - b);
  },
  mul: function(a, b) {
  console.log(a \* b);
  },
  div: function(a, b) {
  console.log(a / b);
  },
  power: function(a, b) {
  console.log(a \*\* b);
  },
};
```

function으로 값을 얻기 위해서는 return을 이용해야됨

prompt 유저에게 값을 물어볼때 사용 -- 구시대적인 방법
prompt로 값을 받을때는 type가 string
string을 int로 변경하는방법은? parseInt
parseInt("hello") 안에 string을 썻을 때는? Nan = Not a Number

JS에서도 If문과 논리연산자 사용 가능!

---

### html에서 js로 불러오는 방법

1. getElementById, getElementByClassName 이용하기
2. querySeletor, querySeletorAll 이용하기 << 주로 선호

#### 마우스 클릭, 올리기, 내리기 이벤트

```
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;
```

---

#### 화면(창) 사이즈 변환, 우클릭 이벤트

```
function handleWindowResize() {
    document.body.style.background = "tomato";
}

function handleContextMenu() {
    title.innerText = "That was a right click!";
    title.style.color = "blue";
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleContextMenu);
```

---

#### 복사(컨트롤 + C) 이벤트

```
function handleWindowCopy() {
    alert("copier!");
}

window.addEventListener("copy", handleWindowCopy);
```

---

#### 와이파이 ON/OFF 이벤트

```
function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOOOD");
}

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```

---

### classList의 다양한 Function

- classList를 이용하여 원래의 html의 클래스를 잃지 않고 클래스를 수정할 수 있다.
- 주로 add, remove toggle이 사용
- toggle은 add와 remove를 모두 가지고 있는 Function으로 코드를 압축할 수 있다.
