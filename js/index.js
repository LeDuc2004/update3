
window.onload = () => {
  

  firebase.auth().onAuthStateChanged((user) => {
    
    if (user && localStorage.getItem("signin") == "id") {
      document.getElementById("body").style = ""
      view.setScreenActive("wellcomePage");
      loadinglogin()
      model.getChat()
      localStorage.setItem("bothEmail","loichaocuazalo")
      
     
    } else {
      
      document.getElementById("body").style = "background-image: url(./imge/thumbnail.jpg);background-color: #3362fc;"
      
      view.setScreenActive("loginPage");
      
    }
    
  });
  
  firebase
    .firestore()
    .collection("listMessage")
    .onSnapshot((docs) => {

      model.getChat()
     
    });
    firebase
    .firestore()
    .collection("idName")
    .onSnapshot((docs) => {

      model.getIdName()
     
    });
  firebase
    .firestore()
    .collection("idName")
    .doc("vGtlozg2ODnWYyeMp04E")
    .onSnapshot((doc) => {
      view.rederListFriend(doc.data().idNamechokhac);
    });
};
