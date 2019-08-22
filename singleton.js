const single = (function () {
  function createObj() {
    this.num = 0;
  }
  let instance;
  function creater() {
    instance = new createObj();
    return instance;
  }
  return {
    getInstance = () => {
      if (!instance) {
        instance = creater();
      }
      return instance;
    }
  }
})()

const sp1 = single.getInstance();
const sp2 = single.getInstance();

console.log("IS IT SINGLETON=====", sp1 === sp2);