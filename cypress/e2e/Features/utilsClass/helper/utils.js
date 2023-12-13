export class DummyValues{
    _randomNumber=0;
    _randomString='';
    
   setRandomNum(){
        let num=Math.floor(Math.random() * 100000001);
       this._randomNumber=num;
    }
     getRandomNumber(){
        //console.log(`${this._randomNumber}`)
        return this._randomNumber;
    }
    setrandomString(length){
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this._randomString=str;
  }
    getRandomString(){
     // console.log(`${this._randomString}`)
      return this._randomString;
    }
    setRandomNumberFour(){
      let number = Math.floor(Math.random()*4)
      this._randomNumberFour=number;
      }
      getRandomNumberFour(){
         return this._randomNumberFour
      }
  }
  