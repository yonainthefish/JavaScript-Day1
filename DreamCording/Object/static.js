// static 정적 프로퍼티, 메서드
class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  consttuctor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

console.log(Fruit.name);
