import { injectGlobal } from 'styled-components';
import body from './images/body.jpg';
import shape1 from './images/shape1.png';
import shape2 from './images/shape2.png';
import shape3 from './images/shape3.png';
import shape4 from './images/shape4.png';

/* eslint no-unused-expressions: 0 */
injectGlobal`
body{
  background-image: url(${body});
  width

}
.ui.card:last-child{
  position: relative;
  top: 8rem;
  left: 55rem;
  height: 12rem;
  background-color: #fff;
  border-radius: 8px;
  min-height: 47rem;
  padding-top: 9px;
  width: 383px;
}
.ui.card>.content, .ui.cards>.card>.content{
  border-top:none;
}
.ui.card .content img, .ui.cards>.card .content img{
  display: inline-block;
  vertical-align: middle;
  left: 11rem;
}
.Titre{
  font-size: 2rem;
  top: 4rem;
  position: relative;
}
.sous-titre{
  font-size: 1.25rem;
  top: 4.75rem;
  position: relative;
  color: burlywood;
  left: 2rem;
}
.ui.input.focus>input, .ui.input>input:focus{
  top: 15rem;
  position: relative;
  left: 2rem;
  width: 21rem;
  background: #fff;
  color: rgba(0,0,0,.8);
  -webkit-box-shadow: none;
  box-shadow: none; 
  border-color: lightgray;
}
.ui.negative.button, .ui.negative.buttons .button{
  background-color: #db2828;
  color: #fff;
  text-shadow: none;
  background-image: none;
  position: relative;
  top: 8rem;
  left: 4rem;
  width: 17rem;
}
.Ou{
  position: relative;
  top: 9.15rem;
  font-size: 1rem;
  left: 12rem;
}
.ui.facebook.button{
  background-color: #3b5998;
  color: #fff;
  text-shadow: none;
  background-image: none;
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset;
  position: relative;
  top: 9rem;
  left: 2rem;
  width: 21rem;
}
.ui.google.plus.button{
  color: #fff;
  text-shadow: none;
  background-image: none;
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset;
  position: relative;
  top: 9.5rem;
  left: 2rem;
  width: 21rem;
}
.kep-login-facebook.metro{
  border-radius: 1rem;
  position: relative;
  top: 9rem;
  left: 4rem;
  height: 10px;
}
.Google-Login{
  position: relative;
  display: inline-block;
  background: rgb(209,72,54);
  color: rgb(255,255,255);
  width:268px
  padding-top: 10px;
  margin-top: 10rem;
  padding-bottom: 10px;
  border-radius: 2px;
  border: 1px solid transparent;
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto;
  left: 4rem;
  top: -1rem;
}
button, input{
  overflow: visible;
  margin: 5px;
  max-width: 100%;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  outline: 0;
  top: 6rem;
  left: 4rem;
  position: relative;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  text-align: left;
  line-height: 1.21428571em;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  padding: .67857143em 1em;
  background: #fff;
  border: 1px solid rgba(34,36,38,.15);
  color: rgba(0,0,0,.87);
  border-radius: .28571429rem;
  -webkit-transition: border-color .1s ease,-webkit-box-shadow .1s ease;
  transition: border-color .1s ease,-webkit-box-shadow .1s ease;
  -o-transition: box-shadow .1s ease,border-color .1s ease;
  transition: box-shadow .1s ease,border-color .1s ease;
  transition: box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.Description{
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  transition: opacity 0.2s linear;
  color: rgb(72,72,72);
  width: 224px;
}
/**NotFoundPage **/

.shape1{
  background-image: url(${shape1});
  background-size:contain;
  background-repeat:no-repeat;
  width: 100%;
  top: 4rem;
  bottom: 10px;
  position: absolute;
  left: -1.5rem;
}
.shape2{
  background-image: url(${shape2});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  background-position-y: 70%;
  background-position-x: 15%;
}
.shape3{
  background-image: url(${shape3});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  background-position-y: 0;
  background-position-x: 30%;
}
.shape4{
  background-image: url(${shape4});
  background-size:contain;
  background-repeat:no-repeat;
  width:86%;
  height:100%;
  position: fixed;
  background-position-y: inherit;
  background-position-x: right;
  right:0;
}
.errorContainer{
  position: absolute;
  left: -1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => (props.showMenu ? '100%' : 'calc(100% - 256px)')};
  transition: width 0.4s linear;
}

.title{
  color:blue;
  font-size: 2.25rem;
  font-family: "Poppins";
}

.logo404{
  width: 25rem;
  margin-top: 6rem;
  padding: 1rem;
}
.admin-error{
  margin: auto;
  margin-top:8rem;
}
.error{
  color: white;
  font-weight: bold;
  font-size: 40vh;
  margin-top: 14rem;
  margin-left: 20rem;
}
.alert{
  color: white;
  font-weight: bold;
  font-size: 40vh;
  position: relative;
  top: 15rem;
  left: 27rem;
}
.message{
  color: white;
  font-size: 1.75rem;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  position: relative;
  top: 15rem;
  left: 18rem;
  font-family: "Poppins";
}

.bulle{
  position: relative;
  padding: 67px;
  min-width: 250px;
  min-height: 250px;
  width: auto;
  height: auto;
  margin-left: 25px;
  border-radius: 50% 50% 50% 10%;
  display: flex;
  flex-direction: column;
  background-color: rgb(189, 8, 28);
  left: 26rem;
  top: -12rem;
  color:white;
}
.ui.button{
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: white;
  vertical-align: baseline;
  background: rgb(189,8,28);
  color: white;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  margin: 0 .25em 0 0;
  padding: .78571429em 1.5em .78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  position: relative;
  font-style: normal;
  top: -18rem;
  left: 30rem;
  text-align: center;
  text-decoration: none;
  hover:none;
  font-size:18px;
}
.Modal{
  position: relative;
  top: 30rem;
  left: 38rem;
}
.picto{
  content:'X'
  border:none;

}

`;